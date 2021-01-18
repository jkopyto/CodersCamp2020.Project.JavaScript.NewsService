import Chart from "chart.js"
import * as utils from "./weatherUtils"

export default class WeatherData {
  getForecastedData(forecastWeatherResults) {
    return Array.from(Array(8).keys()).map((value) => {
      return {
        date: utils.getDateAndDayOfWeek(value + 1)[0],
        dayOfWeek: utils.getDateAndDayOfWeek(value + 1)[1],
        dayIconUrl: utils.getIconUrl(
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
    forecastedDaysData,
    airPollutionData
  ) {
    const createPollutionDataType = (name, label) => {
      return {
        name,
        label,
      }
    }

    const pollutionData = [
      createPollutionDataType("pm2_5", "PM2.5"),
      createPollutionDataType("pm10", "PM10"),
      createPollutionDataType("no2", "NO<sub>2</sub>"),
      createPollutionDataType("so2", "SO<sub>2</sub>"),
      createPollutionDataType("co", "CO"),
    ]

    return `
      <div class="weather-now-container">
        <div class="current-weather-pollution">
          <div class="current-weather-description">
            <div class="current-date">${dayOfWeekDay0}, ${dateDay0}</div>
            <div class="city">${weatherRes.name}, ${
      weatherRes.sys.country
    }</div>
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
        
          <div class="air-pollution">
            <div class="title">Air pollution</div>
            <table>
              <tr>
                <th>Pollution</th>
                <th>Amount [<span>&#181;</span>g/m<sup>3</sup>]</th>
                <th>Air quality</th>
              </tr>
              
              ${pollutionData
                .map(({ name, label }) => {
                  const airPollutionDataValue = airPollutionData[name]
                  return `
                  <tr>
                    <td>${label}</td>
                    <td>${airPollutionDataValue}</td>
                    <td class="quality-info" data-quality="${utils.getQualityIndex(
                      name,
                      airPollutionDataValue
                    )}"/>
                  </tr>
                `
                })
                .join("")}
            </table>
          </div>
        </div>
        
        <div class="forecast-container">
          <div class="hourly-forecast">
            <div class="title">Hourly forecast</div>
          
            <canvas id="hourly-chart" class="chart"></canvas>
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
                return utils.getHours(val)
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
