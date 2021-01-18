import ApiService from "../ApiService"

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
