import WeatherApiService from "../WeatherApiService"
import { cityResponse } from "./mockResponses"
import FetchError from "../../Http/FetchError"

const weatherService = new WeatherApiService()
const mockSucessfulResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(cityResponse))
}

const mockFailingResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce("", { status: 404 })
}

describe("Get submitted city weather tests", () => {
  it("Returns a city name", async () => {
    mockSucessfulResponse()
    const res = await weatherService.getCurrentWeatherByCity("Wieliczka")
    expect(res.name).toEqual("Wieliczka")
  })

  it("Returns error alert - wrong input", async () => {
    mockFailingResponse()
    await expect(weatherService.getCurrentWeatherByCity("14")).rejects.toThrow(
      FetchError
    )
  })
})
