import LocalStorageService from "../LocalStorage"

const localStorage = new LocalStorageService()

describe("setItem and getItem tests", () => {
  it("Returns an new created storaged item ", () => {
    localStorage.setItem("testItem", "testResult")
    const res = localStorage.getItem("testItem")
    expect(res).toBe("testResult")
  })
})

describe("removeItem test", () => {
  it("Returns an empty field after new created storaged item ", () => {
    localStorage.setItem("testItem", "testResult")
    localStorage.removeItem("testItem")
    const res = localStorage.getItem("testItem")
    expect(res).toBe(null)
  })

  it("Returns remaining field after new created storaged items ", () => {
    localStorage.setItem("testItem1", "testResult1")
    localStorage.setItem("testItem2", "testResult2")
    localStorage.removeItem("testItem1")
    const res = localStorage.getItem("testItem2")
    expect(res).toBe("testResult2")
  })
})

describe("clear test", () => {
  it("Returns an empty field after new created storaged items part 1", () => {
    localStorage.setItem("testItem1", "testResult1")
    localStorage.setItem("testItem2", "testResult2")
    localStorage.clear()
    const res = localStorage.getItem("testItem1")
    expect(res).toBe(null)
  })

  it("Returns an empty field after new created storaged items part 2", () => {
    localStorage.setItem("testItem1", "testResult1")
    localStorage.setItem("testItem2", "testResult2")
    localStorage.clear()
    const res = localStorage.getItem("testItem2")
    expect(res).toBe(null)
  })
})
