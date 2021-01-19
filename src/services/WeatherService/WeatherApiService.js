import ApiService from "../ApiService"
import GeolocationNotSupportedError from "./errors/GeolocationNotSupportedError"

export default class WeatherApiService extends ApiService {
  constructor() {
    super(
      {
        API_KEY: process.env.WEATHER_API_KEY,
        API_LINK: `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.WEATHER_API_KEY}`,
        API_BASE_LINK: "https://api.openweathermap.org/data/2.5/",
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
  }

  async geoFindMe() {
    function onSuccess(position) {
      const currentLat = position.coords.latitude
      const currentLon = position.coords.longitude

      return [currentLat, currentLon]
    }

    function onError() {
      window.alert("Unable to retrieve your location, setting default...")
      return new GeolocationNotSupportedError()
    }

    function getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (x) => resolve(onSuccess(x)),
          () => reject(onError())
        )
      })
    }

    if (!navigator.geolocation) {
      throw new GeolocationNotSupportedError()
    } else {
      return await getCurrentPosition()
    }
  }

  async getCurrentWeatherByCoords(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}weather?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}&units=metric`
    )
    return await res.json()
  }

  async getCurrentWeatherByCity(city) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}weather?q=${city}&appid=${this.creds.API_KEY}&units=metric`
    )
    return await res.json()
  }

  async getAlert(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}onecall?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}&units=metric`
    )
    return await res.json()
  }

  async getForecastWeatherByCoords(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}onecall?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}&units=metric`
    )
    return await res.json()
  }
  async getAirPollution(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}air_pollution?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}`
    )
    return await res.json()
  }
}
