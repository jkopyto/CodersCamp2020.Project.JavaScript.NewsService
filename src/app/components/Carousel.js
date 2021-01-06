import Glide from "@glidejs/glide"

export class CarouselComponent {
  constructor(selector) {
    this.glide = new Glide(selector)
  }

  init() {
    this.glide.mount()
  }
}
