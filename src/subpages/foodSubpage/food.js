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
    imageDiv.appendChild(img)
    imageDiv.appendChild(this.addImageDescription(title))
    return imageDiv
  }

  addImageDescription(description) {
    const h3 = document.createElement("h3")
    h3.innerHTML = description
    return h3
  }

  createLiElement(content) {
    const li = document.createElement("li")
    li.innerHTML = content
    return li
  }

  createDeleteButton() {
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.classList = "deleteButton"
    return deleteButton
  }

  createCaloriesDiv(image, tabInstructions) {
    const caloriesDiv = document.createElement("div")
    caloriesDiv.classList = "caloriesDiv"
    const ol = document.createElement("ol")
    ol.classList = "instructionList"
    for (let i = 0; i < tabInstructions.length; i++) {
      ol.appendChild(this.createLiElement(tabInstructions[i].step))
    }
    caloriesDiv.appendChild(image)
    caloriesDiv.appendChild(ol)
    return caloriesDiv
  }

  async createWineDiv(food) {
    const wineDiv = document.createElement("div")
    wineDiv.classList = "wineDiv"
    const wine = await this.foodService.getWinePairing(food)
    if (wine.productMatches[0]) {
      const p = document.createElement("p")
      p.innerHTML = wine.pairingText
      console.log(wine)
      wineDiv.appendChild(p)
      wineDiv.appendChild(
        this.createDivImage(
          wine.productMatches[0].imageUrl,
          wine.productMatches[0].title
        )
      )
    } else {
      const h3 = document.createElement("h3")
      h3.innerHTML = "We don't have paired wine"
      wineDiv.appendChild(h3)
    }

    return wineDiv
  }

  removeCaloriesDiv(number) {
    if (document.querySelector(".caloriesDiv")) {
      for (let i = 0; i < number; i++) {
        const caloriesDiv = document.querySelector(".caloriesDiv")
        caloriesDiv.remove()
      }
    }
  }

  valueOfRecipes(e) {
    const span = document.querySelector(".value")
    span.innerHTML = e.target.value
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
    const recipesValue = document.querySelector("#slider")
    const yesInput = document.getElementById("yes")

    document
      .querySelector("#slider")
      .addEventListener("change", this.valueOfRecipes)
    button.addEventListener("click", async () => {
      const foodInf = new Array(recipesValue.value)
      const searchDiv = document.querySelector(".searchDiv")
      this.removeCaloriesDiv(document.querySelectorAll(".caloriesDiv").length)

      if (document.querySelector(".wineDiv")) {
        document.querySelector(".wineDiv").remove()
      }

      if (yesInput.checked) {
        const wine = await this.createWineDiv(
          document.getElementById("searchInput").value
        )
        searchDiv.appendChild(wine)
      }

      const food = await this.foodService.findRecipeByQuery(
        document.getElementById("searchInput").value,
        recipesValue.value
      )

      for (let i = 0; i < recipesValue.value; i++) {
        foodInf[i] = await this.foodService.getRecipeInformationById(
          food.results[i].id
        )

        searchDiv.appendChild(
          this.createCaloriesDiv(
            this.createDivImage(foodInf[i].image, foodInf[i].title),
            foodInf[i].analyzedInstructions[0].steps
          )
        )
      }
    })
  }
}
