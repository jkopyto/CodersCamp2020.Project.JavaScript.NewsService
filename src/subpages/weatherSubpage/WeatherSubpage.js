import provider from "../../services/Provider"
import css from "./WeatherSubpage.css"
import Subpage from "../Subpage"
import WeatherData from "./WeatherData"

export default class WeatherSubpage extends Subpage {
  constructor() {
    super(css)
    this._weatherApi = provider.get("weatherApiService")
  }

  getWeatherContentDiv() {
    return document.querySelector("#weather-content")
  }

  async updatePage(city) {
    const weatherData = new WeatherData()
    const [dateDay0, dayOfWeekDay0] = weatherData.getDateAndDayOfWeek()
    let weatherRes
    this.getWeatherContentDiv()
    let coords

    if (!city) {
      coords = await this._weatherApi.geoFindMe()
      weatherRes = await this._weatherApi.getCurrentWeatherByCoords(
        coords[0],
        coords[1]
      )
    } else {
      try {
        weatherRes = await this._weatherApi.getCurrentWeatherByCity(city)
      } catch {
        window.alert("Something went wrong, please try again")
      }

      coords = [weatherRes.coord.lon, weatherRes.coord.lat]
    }

    const forecastWeatherRes = await this._weatherApi.getForecastWeatherByCoords(
      coords[0],
      coords[1]
    )

    const forecastedDaysData = weatherData.getForecastedData(forecastWeatherRes)
    const alert = await this._weatherApi.getAlert(
      weatherRes.coord.lat,
      weatherRes.coord.lon
    )

    const alertDescription =
      typeof alert.alerts === "undefined" ? 0 : alert.alerts[0].description
    const iconUrlCurrent = weatherData.getIconUrl(weatherRes.weather[0].icon)

    this.getWeatherContentDiv().innerHTML = new WeatherData().renderHTML(
      weatherRes,
      dateDay0,
      dayOfWeekDay0,
      alertDescription,
      iconUrlCurrent,
      forecastedDaysData
    )
    const weatherAlertP = document.getElementsByClassName("weather-alert")[0]
    alertDescription
      ? (weatherAlertP.style.display = "block")
      : (weatherAlertP.style.display = "none")
  }

  async render() {
    await this.updatePage()
    const button = document.getElementById("submit-city")
    const inputCity = document.getElementById("cityName")

    button.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage(inputCity.value)
    })
  }
}
