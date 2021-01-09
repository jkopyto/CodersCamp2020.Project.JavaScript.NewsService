import sportSubpage from "../subpages/sportSubpage/sport.html"
import foodSubpage from "../subpages/foodSubpage/food.html"
import weatherSubpage from "../subpages/weatherSubpage/weather.html"
import newsSubpage from "../subpages/newsSubpage/news.html"
import cryptocurrencySubpage from "../subpages/cryptocurrencySubpage/cryptocurrency.html"
<<<<<<< HEAD
import WeatherSubpage from "../subpages/weatherSubpage/WeatherSubpage"
=======
import homepage from "../subpages/homepage/homepage.html"
import { Homepage } from "../subpages/homepage/Homepage"
>>>>>>> abfe1e2 (homepage with carousel run by default on start, pagescripts init added to router, draft styling)

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
<<<<<<< HEAD
    let script

=======
    let pageScripts
>>>>>>> abfe1e2 (homepage with carousel run by default on start, pagescripts init added to router, draft styling)
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
        // pageScripts = new NewsPage()
        break
      case "cryptocurrency":
        content = cryptocurrencySubpage
        // pageScripts = new CryptocurrencyPage()
        break
      default:
        content = homepage
        pageScripts = new Homepage()
    }
<<<<<<< HEAD
    this.updateSlot(content, script)
  }

  updateSlot(content, script) {
    this.slot.innerHTML = content
    script && script()
=======
    this.updateSlot(content, pageScripts)
  }

  updateSlot(content, pageScripts) {
    this.slot.innerHTML = content
    if (pageScripts) {
      pageScripts.init()
    }
>>>>>>> abfe1e2 (homepage with carousel run by default on start, pagescripts init added to router, draft styling)
  }
}

export default Router
