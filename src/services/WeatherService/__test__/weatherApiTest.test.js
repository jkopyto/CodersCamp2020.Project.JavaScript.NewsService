import WeatherApiService from "../WeatherApiService"
import { cityResponse } from "./mockResponses"

const weatherService = new WeatherApiService()

describe("Get submitted city weather tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(cityResponse))
  })

  it("Returns a city name", async () => {
    const res = await weatherService.getCurrentWeatherByCity("Wieliczka")
    expect(res.name).toEqual("Wieliczka")
  })
})
