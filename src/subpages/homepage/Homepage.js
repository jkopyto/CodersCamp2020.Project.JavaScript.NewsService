import { CarouselComponent } from "../../app/components/Carousel"
import Subpage from "../Subpage"

export default class Homepage extends Subpage {
  constructor() {
    super("")
    this.carouselComponent = new CarouselComponent(".glide")
  }
  init() {
    this.carouselComponent.init()
    const images = [...document.querySelectorAll(".slide-image")]
    images.forEach((image) => {
      image.addEventListener("click", (event) => {
        const routeHash = event.target.dataset["pageHash"]
        window.location = "#" + routeHash
      })
    })
  }
}
