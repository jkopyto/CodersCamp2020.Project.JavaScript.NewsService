const config = {
  type: "carousel",
  startAt: 0,
  perView: 2,
  breakpoints: {
    600: {
      perView: 1,
    },
  },
}

import Glide from "@glidejs/glide"

export class CarouselComponent {
  constructor(selector) {
    this.glide = new Glide(selector, config)
  }

  init() {
    this.glide.mount()
  }
}
