const config = {
  type: "carousel",
  startAt: 0,
  perView: 3,
  breakpoints: {
    600: {
      perView: 1,
    },
  },
  focusAt: "center",
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
