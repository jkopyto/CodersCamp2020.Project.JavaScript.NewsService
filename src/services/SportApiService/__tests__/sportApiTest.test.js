import SportApiService from "../SportApiService"
import { matchResponse } from "./mockResponses"
import { leagueResponse } from "./mockResponses"
import FetchError from "../../Http/FetchError"

const sportService = new SportApiService()
const mockSucessfulResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(matchResponse))
}
const mockSucessfulLeagueResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(leagueResponse))
}

const mockFailingResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce("", { status: 404 })
}

describe("Get submitted match result test", () => {
  it("Returns a match result", async () => {
    mockSucessfulResponse()
    const res = await sportService.getAllMatches()
    expect(res.home_team.name).toEqual("ACF Fiorentina")
  })

  it("Returns error alert - wrong event", async () => {
    mockFailingResponse()
    await expect(sportService.getAllMatches("none")).rejects.toThrow(FetchError)
  })
})

describe("Get submitted league standings", () => {
  it("Returns a match result", async () => {
    mockSucessfulLeagueResponse()
    const res = await sportService.getLeagueStandings()
    expect(res.result).toEqual("Champions League")
    expect(res.overall.games_played).toEqual(18)
    expect(res.away.goals_diff).toEqual(12)
  })

  it("Returns error alert - wrong event", async () => {
    mockFailingResponse()
    await expect(sportService.getLeagueStandings("none")).rejects.toThrow(
      FetchError
    )
  })
})
