import FoodApiService from "../../services/FoodApiService/FoodApiService"

export default class FoodSubpage {
  constructor() {
    this.foodService = new FoodApiService()
  }

  createDivImage(imgUrl) {
    const imageDiv = document.createElement("div")
    imageDiv.className = "imageDiv"
    const img = document.createElement("img")
    img.src = imgUrl
    img.style.width = "100%"
    imageDiv.appendChild(img)
    return imageDiv
  }

  addImageDescription(description) {
    const h3 = document.createElement("h3")
    h3.innerHTML = description
    return h3
  }

  async getFoodImages() {
    const images = document.querySelector(".images")
    const products = await this.foodService.getRecipeByCalories(200)
    const divs = [
      this.createDivImage(products[1].image),
      this.createDivImage(products[2].image),
      this.createDivImage(products[3].image),
    ]
    for (let i = 0; i < divs.length; i++) {
      divs[i].appendChild(this.addImageDescription(products[i + 1].title))
      images.appendChild(divs[i])
    }
    console.log(products)
  }
}
