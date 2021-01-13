import provider from "../../services/Provider"
import css from "./WeatherSubpage.css"
import Subpage from "../Subpage"

export default class WeatherSubpage extends Subpage {
  constructor() {
    super(css)
    this._weatherApi = provider.get("weatherApiService")
    this._weatherContentDiv = document.querySelector("#weather-content")
  }

  getIconUrl(iconCode) {
    return `http://openweathermap.org/img/w/${iconCode}.png`
  }

  getDateAndDayOfWeek(numberOfDaysToAdd = 0) {
    let date = new Date()
    date.setDate(date.getDate() + numberOfDaysToAdd)
    const dd = String(date.getDate()).padStart(2, "0")
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const dayOfWeek = weekday[date.getDay()]
    const yyyy = date.getFullYear()
    date = mm + "/" + dd + "/" + yyyy

    return [date, dayOfWeek]
  }

  async updatePage(city) {
    const [dateDay0, dayOfWeekDay0] = this.getDateAndDayOfWeek()
    const [dateDay1, dayOfWeekDay1] = this.getDateAndDayOfWeek(1)
    const [dateDay2, dayOfWeekDay2] = this.getDateAndDayOfWeek(2)
    const [dateDay3, dayOfWeekDay3] = this.getDateAndDayOfWeek(3)
    const [dateDay4, dayOfWeekDay4] = this.getDateAndDayOfWeek(4)
    const [dateDay5, dayOfWeekDay5] = this.getDateAndDayOfWeek(5)
    const [dateDay6, dayOfWeekDay6] = this.getDateAndDayOfWeek(6)
    const [dateDay7, dayOfWeekDay7] = this.getDateAndDayOfWeek(7)
    const [dateDay8, dayOfWeekDay8] = this.getDateAndDayOfWeek(8)
    let weatherRes
    let coords

    if (!city) {
      coords = await this._weatherApi.geoFindMe()
      weatherRes = await this._weatherApi.getCurrentWeatherByCoords(
        coords[0],
        coords[1]
      )
    } else {
      weatherRes = await this._weatherApi.getCurrentWeatherByCity(city)
      coords = [weatherRes.coord.lon, weatherRes.coors.lat]
    }
    const forecastWeatherRes = await this._weatherApi.getForecastWeatherByCoords(
      coords[0],
      coords[1]
    )

    const alert = await this._weatherApi.getAlert(
      weatherRes.coord.lat,
      weatherRes.coord.lon
    )
    const alertDescription =
      typeof alert.alerts === "undefined" ? 0 : alert.alerts[0].description
    const iconCodeCurrent = weatherRes.weather[0].icon
    const iconCodeForecastDay0 = forecastWeatherRes.daily[0].weather[0].icon
    const iconCodeForecastDay1 = forecastWeatherRes.daily[1].weather[0].icon
    const iconCodeForecastDay2 = forecastWeatherRes.daily[2].weather[0].icon
    const iconCodeForecastDay3 = forecastWeatherRes.daily[3].weather[0].icon
    const iconCodeForecastDay4 = forecastWeatherRes.daily[4].weather[0].icon
    const iconCodeForecastDay5 = forecastWeatherRes.daily[5].weather[0].icon
    const iconCodeForecastDay6 = forecastWeatherRes.daily[6].weather[0].icon
    const iconCodeForecastDay7 = forecastWeatherRes.daily[7].weather[0].icon

    const iconUrlCurrent = this.getIconUrl(iconCodeCurrent)
    const iconUrlForecastDay0 = this.getIconUrl(iconCodeForecastDay0)
    const iconUrlForecastDay1 = this.getIconUrl(iconCodeForecastDay1)
    const iconUrlForecastDay2 = this.getIconUrl(iconCodeForecastDay2)
    const iconUrlForecastDay3 = this.getIconUrl(iconCodeForecastDay3)
    const iconUrlForecastDay4 = this.getIconUrl(iconCodeForecastDay4)
    const iconUrlForecastDay5 = this.getIconUrl(iconCodeForecastDay5)
    const iconUrlForecastDay6 = this.getIconUrl(iconCodeForecastDay6)
    const iconUrlForecastDay7 = this.getIconUrl(iconCodeForecastDay7)

    this._weatherContentDiv.innerHTML = `
      <div class="weather-now-container">
      <div class="current-date">${dayOfWeekDay0}, ${dateDay0}</div>
      <div class="city">${weatherRes.name}, ${weatherRes.sys.country}</div>
        <div class="main-weather-info">
          <img src="${iconUrlCurrent}" alt="Weather icon"> <div>${
      weatherRes.main.temp
    } &#176C </div>
        </div>
        <p class="weather-alert">${alertDescription}</p>
        <div class="weather-feels">
          Fells like ${weatherRes.main.feels_like} &#176C, 
          ${weatherRes.weather[0].description}
        </div>
        <div class="detailed-info">
          <div>Cloudiness: ${weatherRes.clouds.all}%</div>
          <div>${weatherRes.main.pressure}hPa</div>
          <div>Humidity: ${weatherRes.main.humidity}%</div>
          <div>Visibility: ${weatherRes.visibility / 1000} km</div>
        </div>
        <div class="forecast-container">
        <div class="hourly-forecast"></div>
        <div class="weather-forecast">
          <div class="title">8-day forecast</div>
          <div>
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay1}, ${dateDay1}
              </div>
              <div>
                <img src="${iconUrlForecastDay0}" alt="Weather icon">
                ${forecastWeatherRes.daily[0].temp.max} / 
                ${forecastWeatherRes.daily[0].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[0].weather[0].description}  
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay2}, ${dateDay2}
              </div>
              <div>
                <img src="${iconUrlForecastDay1}" alt="Weather icon">
                ${forecastWeatherRes.daily[1].temp.max} / 
                ${forecastWeatherRes.daily[1].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[1].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay3}, ${dateDay3}
              </div>
              <div>
                <img src="${iconUrlForecastDay2}" alt="Weather icon">
                ${forecastWeatherRes.daily[2].temp.max} / 
                ${forecastWeatherRes.daily[2].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[2].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay4}, ${dateDay4}
              </div>
              <div>
                <img src="${iconUrlForecastDay3}" alt="Weather icon">
                ${forecastWeatherRes.daily[3].temp.max} / 
                ${forecastWeatherRes.daily[3].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[3].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay5}, ${dateDay5}
              </div>
              <div>
                 <img src="${iconUrlForecastDay4}" alt="Weather icon">
                  ${forecastWeatherRes.daily[4].temp.max} / 
                  ${forecastWeatherRes.daily[4].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[4].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay6}, ${dateDay6}
              </div>
              <div>
                <img src="${iconUrlForecastDay5}" alt="Weather icon">
                ${forecastWeatherRes.daily[5].temp.max} / 
                ${forecastWeatherRes.daily[5].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[5].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay7}, ${dateDay7}
              </div>
              <div>
                <img src="${iconUrlForecastDay6}" alt="Weather icon">
                ${forecastWeatherRes.daily[6].temp.max} / 
                ${forecastWeatherRes.daily[6].temp.min}&#176C
              </div>
              <div>
                ${forecastWeatherRes.daily[6].weather[0].description}
              </div>
            </div>
            
            <div class="forecast-day">
              <div class="forecast-day-date">
                ${dayOfWeekDay8}, ${dateDay8}
              </div>
              <div>
                <img src="${iconUrlForecastDay7}" alt="Weather icon">
                ${forecastWeatherRes.daily[7].temp.max} / 
                ${forecastWeatherRes.daily[7].temp.min}&#176C
              </div>
              <div>
                  ${forecastWeatherRes.daily[7].weather[0].description}
              </div>
            </div>
          </div>
         </div>
        </div>
        <div class="detailed-weather-info"></div>
      </div>      
`
    const weatherAlertP = document.getElementsByClassName("weather-alert")[0]
    alertDescription
      ? (weatherAlertP.style.display = "block")
      : (weatherAlertP.style.display = "none")
  }

  async render() {
    this.updatePage()
    const button = document.getElementById("submit-city")
    const inputCity = document.getElementById("cityName")

    button.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage(inputCity.value)
    })
  }
}
