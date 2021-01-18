import SportApiService from "../SportApiService"
import { matchResponse } from "./mockResponses"
import FetchError from "../../Http/FetchError"

const sportService = new SportApiService()
const mockSucessfulResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(matchResponse))
}

const mockFailingResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce("", { status: 404 })
}

describe("Get submitted city weather tests", () => {
  it("Returns a city name", async () => {
    mockSucessfulResponse()
    const res = await sportService.getAllMatches()
    expect(res.home_team.name).toEqual("ACF Fiorentina")
  })

  it("Returns error alert - wrong event", async () => {
    mockFailingResponse()
    await expect(sportService.getAllMatches("none")).rejects.toThrow(FetchError)
  })
})
