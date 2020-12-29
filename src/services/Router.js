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

  loadContent(uri) {
    const contentUri = `/static/partials/${uri}.html`
    fetch(contentUri)
      .then((res) => res.text())
      .then((content) => this.updateSlot(content))
  }

  updateSlot(content) {
    this.slot.innerHTML = content
  }
}

export default Router
