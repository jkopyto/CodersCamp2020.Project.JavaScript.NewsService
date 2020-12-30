import sportSubpage from "../subpages/sportSubpage/sportdata.html"

export class Router {
  constructor() {
    window.addEventListener("hashchange", (event) => this.onRouteChange(event))
    this.slot = document.querySelector("#slot")
  }

  onRouteChange(event) {
    const hashLocation = window.location.hash.substring(1)
    console.log(hashLocation)
    this.loadContent(hashLocation)
  }

  async loadContent(uri) {
    let content

    switch (uri) {
      case "sportdata":
        content = sportSubpage
        break
      default:
        content = await fetch(`/static/partials/${uri}.html`).then((res) =>
          res.text()
        )
    }

    // // const contentUri = `/static/partials/${uri}.html`
    // fetch(contentUri)
    //   .then((res) => res.text())
    //   .then((content) => this.updateSlot(content))

    this.updateSlot(content)
  }

  updateSlot(content) {
    this.slot.innerHTML = content
  }
}

export default Router
