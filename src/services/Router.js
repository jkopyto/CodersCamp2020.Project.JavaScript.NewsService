import sportSubpage from "../subpages/sportSubpage/sport.html"
import foodSubpage from "../subpages/foodSubpage/food.html"
import weatherSubpage from "../subpages/weatherSubpage/weather.html"
import newsSubpage from "../subpages/newsSubpage/news.html"
import cryptocurrencySubpage from "../subpages/cryptocurrencySubpage/cryptocurrency.html"
export class Router {
  constructor() {
    window.addEventListener("hashchange", (event) => this.onRouteChange(event))
    this.slot = document.querySelector("#slot")
  }

  onRouteChange() {
    const hashLocation = window.location.hash.substring(1)
    console.log(hashLocation)
    this.loadContent(hashLocation)
  }

  async loadContent(uri) {
    let content

    switch (uri) {
      case "sport":
        content = sportSubpage
        break
      case "food":
        content = foodSubpage
        break
      case "weather":
        content = weatherSubpage
        break
      case "news":
        content = newsSubpage
        break
      case "cryptocurrency":
        content = cryptocurrencySubpage
        break
      default:
        content = await fetch("./index.html").then((res) => res.text())
    }
    this.updateSlot(content)
  }

  updateSlot(content) {
    this.slot.innerHTML = content
  }
}

export default Router
