import sportSubpage from "../subpages/sportSubpage/sport.html"
import foodSubpage from "../subpages/foodSubpage/food.html"
import weatherSubpage from "../subpages/weatherSubpage/weather.html"
import newsSubpage from "../subpages/newsSubpage/news.html"
import cryptocurrencySubpage from "../subpages/cryptocurrencySubpage/cryptocurrency.html"
import WeatherSubpage from "../subpages/weatherSubpage/WeatherSubpage"
import { Homepage } from "../subpages/homepage/Homepage"
import homepage from "../subpages/homepage/homepage.html"

export class Router {
  constructor() {
    window.addEventListener("hashchange", (event) => this.onRouteChange(event))
    this.slot = document.querySelector("#slot")
  }

  onRouteChange() {
    const hashLocation = window.location.hash.substring(1)
    this.loadContent(hashLocation)
  }

  async loadContent(uri) {
    let content
    let script

    switch (uri) {
      case "sport":
        content = sportSubpage
        break
      case "food":
        content = foodSubpage
        break
      case "weather":
        content = weatherSubpage
        script = () => new WeatherSubpage().render()
        break
      case "news":
        content = newsSubpage
        break
      case "cryptocurrency":
        content = cryptocurrencySubpage
        break
      default:
        content = homepage
        script = () => new Homepage().init()
        break
    }
    this.updateSlot(content, script)
  }

  updateSlot(content, script) {
    this.slot.innerHTML = content
    script && script()
  }
}

export default Router
