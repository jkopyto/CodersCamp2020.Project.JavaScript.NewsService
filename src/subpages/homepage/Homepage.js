import { CarouselComponent } from "../../app/components/Carousel"
import Subpage from "../Subpage"
import { renderCalendarWidget } from "simple-calendar-widget"

export default class Homepage extends Subpage {
  constructor() {
    super("")
    this.carouselComponent = new CarouselComponent(".glide")
  }
  render() {
    this.carouselComponent.init()
    const images = [...document.querySelectorAll(".slide-image")]
    images.forEach((image) => {
      image.addEventListener("click", (event) => {
        const routeHash = event.target.dataset["pageHash"]
        window.location = "#" + routeHash
      })
    })
    renderCalendarWidget(undefined, undefined, "#calendar")
  }
}
