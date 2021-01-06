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

  async getCurrentWeather(city) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}weather?q=${city}&appid=${this.creds.API_KEY}&units=metric`
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
