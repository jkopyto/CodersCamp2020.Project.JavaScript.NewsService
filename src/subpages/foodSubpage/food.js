import FoodApiService from "../../services/FoodApiService/FoodApiService"

export default class FoodSubpage {
  constructor() {
    this.foodService = new FoodApiService()
  }

  createDivImage(imgUrl, title) {
    const imageDiv = document.createElement("div")
    imageDiv.className = "imageDiv"
    const img = document.createElement("img")
    img.src = imgUrl
    img.style.width = "100%"
    img.style.maxHeight = "300px"
    imageDiv.appendChild(img)
    imageDiv.appendChild(this.addImageDescription(title))
    return imageDiv
  }

  addImageDescription(description) {
    const h3 = document.createElement("h3")
    h3.innerHTML = description
    return h3
  }

  createDeleteButton() {
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.classList = "deleteButton"
    return deleteButton
  }

  createCaloriesDiv(image, summary) {
    const caloriesDiv = document.createElement("div")
    caloriesDiv.classList = "caloriesDiv"
    const p = document.createElement("p")
    p.innerHTML = summary
    caloriesDiv.appendChild(image)
    caloriesDiv.appendChild(p)
    caloriesDiv.appendChild(this.createDeleteButton())
    return caloriesDiv
  }

  removeCaloriesDiv() {
    if (document.querySelector(".caloriesDiv")) {
      for (let i = 0; i < 3; i++) {
        const caloriesDiv = document.querySelector(".caloriesDiv")
        caloriesDiv.remove()
      }
    }
  }

  async createHeaderImages() {
    const images = document.querySelector(".images")
    const products = await this.foodService.getRecipeByCalories(200)
    for (let i = 1; i <= 3; i++) {
      images.appendChild(
        this.createDivImage(products[i].image, products[i].title)
      )
    }
  }

  async getRecipes() {
    this.createHeaderImages()
    const button = document.querySelector(".search")
    button.addEventListener("click", async () => {
      const food = await this.foodService.findRecipeByQuery(
        document.getElementById("searchInput").value
      )
      const foodInf = new Array(3)
      const searchDiv = document.querySelector(".searchDiv")
      this.removeCaloriesDiv()
      for (let i = 0; i < 3; i++) {
        foodInf[i] = await this.foodService.getRecipeInformationById(
          food.results[i].id
        )
        searchDiv.appendChild(
          this.createCaloriesDiv(
            this.createDivImage(foodInf[i].image, foodInf[i].title),
            foodInf[i].instructions
          )
        )
      }
    })
  }
}
