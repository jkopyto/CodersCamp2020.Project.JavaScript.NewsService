import NewsApiService from "../NewsApiService"
import { mockResponse1, mockResponse2, mockResponse3 } from "./mockResponses"

const newsService = new NewsApiService()

describe("getWorldNews tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse1))
  })

  it("Returns an object", async () => {
    const res = await newsService.getWorldNews()
    expect(res).toMatchObject(mockResponse1)
  })
})

describe("getPolandNews tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse2))
  })

  it("Returns an object", async () => {
    const res = await newsService.getPolandNews()
    expect(res).toMatchObject(mockResponse2)
  })
})

describe("getHealthNews tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse3))
  })

  it("Returns an object", async () => {
    const res = await newsService.getHealthNews()
    expect(res).toMatchObject(mockResponse3)
  })
})
