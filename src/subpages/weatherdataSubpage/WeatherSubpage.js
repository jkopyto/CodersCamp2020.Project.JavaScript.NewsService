import provider from "../../services/Provider"

export default class WeatherSubpage {
  render() {
    const weatherApi = provider.get("WeatherApiService")
    const weatherContentDiv = document.querySelector("#weather-content")

    const updatePage = async (city = "Berlin") => {
      const weatherRes = await weatherApi.getCurrentWeather(city)
      const cityName = weatherRes.name
      const country = weatherRes.sys.country
      const degrees = weatherRes.main.temp
      const clouds = weatherRes.clouds.all
      const iconCode = weatherRes.weather[0].icon
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`

      weatherContentDiv.innerHTML = `
      <div class="weather-now-container">
        <div class="city">${cityName}, ${country}</div>
        <img src="${iconUrl}" alt="Weather icon"> ${degrees} &#176C <br>
        <div class="weather-alert">e.g. 'Yellow Snow/Ice Warning'</div>
        <div class="weather-feels">Fells like ${
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
`
    }

    updatePage()

    const button = document.getElementById("submit-city")
    const inputCity = document.getElementById("cityName")

    button.addEventListener("click", (event) => {
      event.preventDefault()
      updatePage(inputCity.value)
    })
  }
}
