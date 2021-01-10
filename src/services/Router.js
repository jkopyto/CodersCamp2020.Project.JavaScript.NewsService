import sportSubpage from "../subpages/sportSubpage/sport.html"
import foodSubpage from "../subpages/foodSubpage/food.html"
import weatherSubpage from "../subpages/weatherSubpage/weather.html"
import newsSubpage from "../subpages/newsSubpage/news.html"
import NewsSubpage from "../subpages/newsSubpage/NewsData"
import cryptocurrencySubpage from "../subpages/cryptocurrencySubpage/cryptocurrency.html"
import WeatherSubpage from "../subpages/weatherSubpage/WeatherSubpage"
import Homepage from "../subpages/homepage/Homepage"
import homepage from "../subpages/homepage/homepage.html"
import FoodSubpage from "../subpages/foodSubpage/food"

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
        this.SubpageClass = null
        content = sportSubpage
        break
      case "food":
        this.SubpageClass = null
        content = foodSubpage
        script = () => new FoodSubpage().getRecipes()
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
        this.SubpageClass = null
        content = cryptocurrencySubpage
        break
      default:
        content = homepage
        this.SubpageClass = new Homepage()
        break
    }
    this.updateSlot(content)
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
