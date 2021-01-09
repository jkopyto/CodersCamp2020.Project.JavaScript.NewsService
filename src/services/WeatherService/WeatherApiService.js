import ApiService from "../ApiService"
import process from "process"

export default class WeatherApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.WEATHER_API_KEY,
      API_LINK: `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.WEATHER_API_KEY}`,
      API_BASE_LINK: "https://api.openweathermap.org/data/2.5/",
    })
  }
  async geoFindMe() {
    function onSuccess(position) {
      const currentLat = position.coords.latitude
      const currentLon = position.coords.longitude

      return [currentLat, currentLon]
    }

    function onError() {
      alert("Unable to retrieve your location, setting default...")
      return [35, 139]
    }

    function getCurrentPosition() {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (x) => resolve(onSuccess(x)),
          () => resolve(onError())
        )
      })
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser")
      return [35, 139]
    } else {
      return await getCurrentPosition()
    }
  }

  async getCurrentWeather(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}weather?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}&units=metric`
    )
    const data = await res.json()
    return data
  }

  async getAlert(coordLat, coordLon) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}onecall?lat=${coordLat}&lon=${coordLon}&appid=${this.creds.API_KEY}&units=metric`
    )
    const data = await res.json()
    return data
  }
}
