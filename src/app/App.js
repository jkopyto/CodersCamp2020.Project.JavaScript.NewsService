import { CarouselComponent } from "./components/Carousel"

export const App = () => {
  const pageSlider = new CarouselComponent(".glide")
  pageSlider.init()
}
