import WeatherApiService from "../WeatherApiService"
import {
  airPollutionResponse,
  cityResponse,
  geoFindMeResponse,
} from "./mockResponses"
import FetchError from "../../Http/FetchError"
import GeolocationNotSupportedError from "../errors/GeolocationNotSupportedError"

const weatherService = new WeatherApiService()
const mockSucessfulCityResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(cityResponse))
}

const mockFailingCityResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce("", { status: 404 })
}

const mockSucessfulAirPollutionResponse = () => {
  fetchMock.doMock()
  fetchMock.mockResponseOnce(JSON.stringify(airPollutionResponse))
}

describe("Get submitted city weather tests", () => {
  it("Returns a city name", async () => {
    mockSucessfulCityResponse()
    const res = await weatherService.getCurrentWeatherByCity("Wieliczka")
    expect(res.name).toEqual("Wieliczka")
  })

  it("Returns error alert - wrong input", async () => {
    mockFailingCityResponse()
    await expect(weatherService.getCurrentWeatherByCity("14")).rejects.toThrow(
      FetchError
    )
  })
})

describe("Get air pollution information tests", () => {
  it("Returns a co value", async () => {
    mockSucessfulAirPollutionResponse()
    const res = await weatherService.getAirPollution(50, 50)
    expect(res.list[0].components.co).toEqual(201.94053649902344)
  })
})

describe("Get current position tests", () => {
  it("Returns error if geolocation not supported", async () => {
    await expect(weatherService.geoFindMe()).rejects.toThrow(
      GeolocationNotSupportedError
    )
  })

  it("Returns coordinates if geolocation is supported", async () => {
    global.navigator.geolocation = {
      clearWatch: jest.fn(),
      getCurrentPosition(successCallback) {
        successCallback(geoFindMeResponse)
      },
      watchPosition: jest.fn(),
    }
    const res = await weatherService.geoFindMe()
    expect(res).toEqual([50, 50])
  })
})
