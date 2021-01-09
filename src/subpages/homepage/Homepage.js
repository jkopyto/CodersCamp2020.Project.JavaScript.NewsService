import { CarouselComponent } from "../../app/components/Carousel"

export class Homepage {
  constructor() {
    this.carouselComponent = new CarouselComponent(".glide")
  }
  init() {
    this.carouselComponent.init()
  }
}
