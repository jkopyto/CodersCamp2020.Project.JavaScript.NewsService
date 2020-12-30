import provider from "../services/Provider"

export const App = async ({ options }) => {
  const weatherApi = provider.get("WeatherApiService")
  var weatherRes = await weatherApi.getCurrentWeather("Berlin")
  // console.log(weatherRes)
  // const oneCallRes = await weatherApi.getAlert()
  // console.log(oneCallRes)

  const cityName = weatherRes.name
  const country = weatherRes.sys.country
  const degrees = weatherRes.main.temp
  const clouds = weatherRes.clouds.all
  const iconCode = weatherRes.weather[0].icon
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"

  var mainDiv = document.querySelector("#swquiz-app")
  mainDiv.innerHTML = `
      <div class="main">
        Put the name of the city:
        <form>
          <input type="text" id="cityName" placeholder="e.g. 'Berlin'">
          <button id="submit-city">Submit</button>
        </form>
      
        <div class='weather-now-container'>
          <div class='city'>${cityName}, ${country}</div>
          <img src="${iconUrl}" alt="Weather icon"> ${degrees} &#176C <br>
          <div class="weather-alert" style="background-color: red; padding: 1px; color:white; display: inline-block">e.g. 'Yellow Snow/Ice Warning'</div>
          <div class="weather-feels" style="font-weight: bold;">Fells like ${
            weatherRes.main.feels_like
          } &#176C, ${weatherRes.weather[0].description}</div>
          <div>
            <p>Cloudiness: ${clouds}%</p>
            <p>${weatherRes.main.pressure}hPa</p>
            <p>${weatherRes.main.humidity}%</p>
            <p>Visibility: ${weatherRes.visibility / 1000} km</p>
          
          </div>
          <div class="weather-forecast"></div>
          <div class="detailed-weather-info"></div>
        </div>
      </div>
      
`
  // const button = document.getElementById("submit-city")
  // var inputCity = document.getElementById("cityName")
  // button.addEventListener("click", (event) => {
  //   event.preventDefault()
  //   weatherRes = weatherApi.getCurrentWeather(inputCity)
  // })
  // testErrorReport()
  // provider.get("wtf")
}
