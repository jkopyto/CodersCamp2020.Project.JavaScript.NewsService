import Chart from "chart.js"
export default class WeatherData {
  getIconUrl(iconCode) {
    return `http://openweathermap.org/img/w/${iconCode}.png`
  }

  getHours(hoursToAdd = 0) {
    const time = new Date().getHours() + hoursToAdd
    let res = time >= 24 ? time - 24 : time
    res =
      res > 12
        ? String(res.toFixed(1) - 12) + " PM"
        : String(res.toFixed(1)) + " AM"
    return res
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
        tempMax: forecastWeatherResults.daily[value].temp.max.toFixed(1),
        tempMin: forecastWeatherResults.daily[value].temp.min.toFixed(1),
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
      <div class="current-weather-and-maps">
        <div class="current-weather-description">
          <div class="current-date">${dayOfWeekDay0}, ${dateDay0}</div>
          <div class="city">${weatherRes.name}, ${weatherRes.sys.country}</div>
          <div class="main-weather-info">
            <img src="${iconUrlCurrent}" alt="Weather icon"> 
            <div>${weatherRes.main.temp.toFixed(1)} &#176C </div>
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
        </div>
        
        <div class="weather-maps">MAPY POGODOWE</div>
      </div>
        
        
        <div class="forecast-container">
          <div class="hourly-forecast">
            <div class="title">Hourly forecast</div>
          
            <canvas id="hourly-chart"></canvas>
          </div>
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

  renderChart(forecastWeatherResults) {
    const chartDiv = document.getElementById("hourly-chart").getContext("2d")
    new Chart(chartDiv, {
      type: "line",
      data: {
        datasets: [
          {
            data: Array.from(Array(9).keys()).map((val) => {
              return forecastWeatherResults.hourly[val].temp.toFixed(1)
            }),
            backgroundColor: ["rgba(255, 99, 132, 0)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 100,
            top: 20,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 5.0,
                padding: 10,
                suggestedMin: -2,
                steps: 10,
                suggestedMax: 5,
                callback(value) {
                  return value + "°C"
                },
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              id: "xAxis1",
              type: "category",
              ticks: {
                padding: 10,
              },

              labels: Array.from(Array(9).keys()).map((val) => {
                return forecastWeatherResults.hourly[val].weather[0].description
              }),
            },
            {
              id: "xAxis2",
              type: "category",
              ticks: {
                padding: 10,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              labels: Array.from(Array(9).keys()).map((val) => {
                return forecastWeatherResults.hourly[val].wind_speed + " m/s"
              }),
            },
            {
              position: "top",
              id: "xAxis3",
              type: "category",
              ticks: {
                padding: 10,
              },
              gridLines: {
                drawOnChartArea: false,
              },
              labels: Array.from(Array(9).keys()).map((val) => {
                return this.getHours(val)
              }),
            },
          ],
        },
        legend: {
          display: false,
        },
      },
      pointLabels: {
        display: true,
      },
    })
  }
}
