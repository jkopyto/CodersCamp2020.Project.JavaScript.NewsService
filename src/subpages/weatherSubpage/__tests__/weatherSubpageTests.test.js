import * as utils from "../weatherUtils"

describe("Get proper url", () => {
  it("Returns an url with icon code", () => {
    const res = utils.getIconUrl("bla")
    expect(res).toEqual("http://openweathermap.org/img/w/bla.png")
  })
})

describe("Get proper date tests", () => {
  it("Returns a valid date", () => {
    const mockDate = new Date(2021, 0, 14, 12)
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate)

    const [date, dayOfWeek] = utils.getDateAndDayOfWeek(21)

    spy.mockRestore()

    expect(dayOfWeek).toEqual("Thursday")
    expect(date).toEqual("02/04/2021")
  })
})

describe("Get proper hour tests", () => {
  it("Returns a valid hour", () => {
    const mockDate = new Date(2021, 0, 14, 12)
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate)

    const h = utils.getHours(5)

    spy.mockRestore()

    expect(h).toEqual("5 PM")
  })
})

describe("Get quality index tests", () => {
  it("Returns an information about pollution e.g. 'good' ", () => {
    const res = utils.getQualityIndex("co", 15)
    expect(res).toEqual("sufficient")
  })
})
