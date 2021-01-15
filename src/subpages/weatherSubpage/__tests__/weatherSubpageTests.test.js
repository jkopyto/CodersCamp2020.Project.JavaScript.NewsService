import WeatherData from "../WeatherData"

const weatherData = new WeatherData()

describe("Get proper date tests", () => {
  it("Returns a valid date", () => {
    const mockDate = new Date(2021, 0, 14, 12)
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate)

    const [date, dayOfWeek] = weatherData.getDateAndDayOfWeek(21)

    spy.mockRestore()

    expect(dayOfWeek).toEqual("Thursday")
    expect(date).toEqual("02/04/2021")
  })
})
