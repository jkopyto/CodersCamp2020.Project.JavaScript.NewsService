import sportSubpage from "../subpages/sportSubpage/sport.html"
import foodSubpage from "../subpages/foodSubpage/food.html"
import weatherSubpage from "../subpages/weatherSubpage/weather.html"
import newsSubpage from "../subpages/newsSubpage/news.html"
import NewsSubpage from "../subpages/newsSubpage/NewsData"
import cryptocurrencySubpage from "../subpages/cryptocurrencySubpage/cryptocurrency.html"
import WeatherSubpage from "../subpages/weatherSubpage/WeatherSubpage"
import SportSubpage from "../subpages/sportSubpage/SportData"
import Homepage from "../subpages/homepage/Homepage"
import homepage from "../subpages/homepage/homepage.html"
import CryptoCurrencySubpage from "../subpages/cryptocurrencySubpage/CryptoCurrency"
import FoodSubpage from "../subpages/foodSubpage/food"
import Topbar from "../app/components/Topbar"

export class Router {
  SubpageClass = null

  constructor() {
    window.addEventListener("hashchange", (event) => this.onRouteChange(event))
    this.slot = document.querySelector("#slot")
  }

  onRouteChange() {
    const hashLocation = window.location.hash.substring(1)
    this.loadContent(hashLocation)
  }

  loadContent = (uri) => {
    let content
    this.SubpageClass && this.SubpageClass.removeStylesheet()
    switch (uri) {
      case "sport":
        content = sportSubpage
        this.SubpageClass = new SportSubpage()
        break
      case "food":
        this.SubpageClass = null
        content = foodSubpage
        this.SubpageClass = new FoodSubpage()
        break
      case "weather":
        content = weatherSubpage
        this.SubpageClass = new WeatherSubpage()
        break
      case "news":
        content = newsSubpage
        this.SubpageClass = new NewsSubpage()
        break
      case "cryptocurrency":
        this.SubpageClass = new CryptoCurrencySubpage()
        content = cryptocurrencySubpage
        break
      default:
        content = homepage
        this.SubpageClass = new Homepage()
        break
    }
    this.updateSlot(content)
    const topbar = new Topbar()
    topbar.setActiveClass(uri)
  }

  initScript = () => {
    if (this.SubpageClass) {
      this.SubpageClass.initStylesheet()
    }
  }

  updateSlot = (content) => {
    this.SubpageClass && this.SubpageClass.initStylesheet()
    this.slot.innerHTML = content
    this.SubpageClass && this.SubpageClass.render()
  }
}

export default Router
