class IndexView {
  constructor() {
    window.addEventListener("haschange", (event) => this.onRouteChane(event))
  }
  onRouteChange(event) {
    console.log(event)
  }
}
