export default class WeatherData {
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

  getForecastedData(forecastWeatherResults) {
    return Array.from(Array(8).keys()).map((value) => {
      return {
        date: this.getDateAndDayOfWeek(value + 1)[0],
        dayOfWeek: this.getDateAndDayOfWeek(value + 1)[1],
        dayIconUrl: this.getIconUrl(
          forecastWeatherResults.daily[value].weather[0].icon
        ),
        tempMax: forecastWeatherResults.daily[value].temp.max,
        tempMin: forecastWeatherResults.daily[value].temp.min,
        description: forecastWeatherResults.daily[value].weather[0].description,
      }
    })
  }

  renderHTML(
    weatherRes,
    dateDay0,
    dayOfWeekDay0,
    alertDescription,
    iconUrlCurrent,
    forecastedDaysData
  ) {
    return `
      <div class="weather-now-container">
        <div class="current-date">${dayOfWeekDay0}, ${dateDay0}</div>
        <div class="city">${weatherRes.name}, ${weatherRes.sys.country}</div>
        <div class="main-weather-info">
          <img src="${iconUrlCurrent}" alt="Weather icon"> 
          <div>${weatherRes.main.temp} &#176C </div>
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
            
            ${forecastedDaysData
              .map((value) => {
                const {
                  date,
                  dayOfWeek,
                  dayIconUrl,
                  tempMax,
                  tempMin,
                  description,
                } = value
                return `<div class="forecast-day">
                <div class="forecast-day-date">
                  ${dayOfWeek}, ${date}
                </div>
                <div>
                  <img src="${dayIconUrl}" alt="Weather icon">
                  ${tempMax} / ${tempMin}&#176C
                </div>
                <div>
                  ${description}  
                </div>
              </div>`
              })
              .join("")}
         
          </div>
        </div>
        <div class="detailed-weather-info"></div>
      </div>      
`
  }
}
