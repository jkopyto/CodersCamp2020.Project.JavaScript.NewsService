import { CarouselComponent } from "../../app/components/Carousel"

export class Homepage {
  constructor() {
    this.carouselComponent = new CarouselComponent(".glide")
  }
  init() {
    this.carouselComponent.init()
    let images = [...document.querySelectorAll(".slide-image")]
    images.forEach((image) => {
      image.addEventListener("click", (event) => {
        const routeHash = event.target.dataset["pageHash"]
        window.location = "#" + routeHash
      })
    })
  }
}
