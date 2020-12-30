import ApiService from "../ApiService"
import process from "process"

export default class WeatherApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.WEATHER_API_KEY,
      API_LINK: `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.WEATHER_API_KEY}`,
    })
    // this.reportError(process.env.WEATHER_API_KEY)
  }
}
