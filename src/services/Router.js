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

<<<<<<< HEAD
<<<<<<< HEAD
  loadContent = (uri) => {
=======
  loadContent = async (uri) => {
>>>>>>> bb76e1d (Css isue)
=======
  async loadContent(uri) {
>>>>>>> 7575745 (Js changes)
    let content
    let script

    switch (uri) {
      case "sport":
        this.SubpageClass = null
        content = sportSubpage
        break
      case "food":
        this.SubpageClass = null
        content = foodSubpage
        script = () => new FoodSubpage().render()
        break
      case "weather":
        content = weatherSubpage
        script = () => new WeatherSubpage().render()
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
        script = () => new Homepage().init()
        break
    }
<<<<<<< HEAD
    this.updateSlot(content)
  }

  initScript = () => {
<<<<<<< HEAD
    if (this.SubpageClass) {
=======
    if(this.SubpageClass) {
>>>>>>> bb76e1d (Css isue)
      this.SubpageClass.initStylesheet()
    }
=======
    this.updateSlot(content, script)
>>>>>>> 7575745 (Js changes)
  }

  updateSlot(content, script) {
    this.slot.innerHTML = content
<<<<<<< HEAD
<<<<<<< HEAD
    this.SubpageClass && this.SubpageClass.render()
=======
    this.SubpageClass.render()
>>>>>>> bb76e1d (Css isue)
=======
    script && script()
>>>>>>> 7575745 (Js changes)
  }
}

export default Router
