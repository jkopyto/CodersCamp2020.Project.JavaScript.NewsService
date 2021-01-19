import css from "./food.css"
import Subpage from "../Subpage"
import provider from "../../services/Provider"

export default class FoodSubpage extends Subpage {
  constructor() {
    super(css)
    this.foodService = provider.get("FoodApi")
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

  createCaloriesDiv(image, tabInstructions, id, nutrients) {
    const caloriesDiv = document.createElement("div")
    caloriesDiv.classList = "caloriesDiv"
    const ol = document.createElement("ol")
    const btnNutrients = document.createElement("button")
    const btnDelete = document.querySelector(".delete")

    btnNutrients.classList = "button1 btnNutrients"
    btnNutrients.innerHTML = "Nutrients"
    ol.classList = "instructionList"
    for (let i = 0; i < tabInstructions.length; i++) {
      ol.appendChild(this.createLiElement(tabInstructions[i].step))
    }

    caloriesDiv.setAttribute("id", id)
    btnNutrients.addEventListener("click", (e) => {
      document.querySelector(".nutrients").classList = " nutrients nutrients1"
      document.querySelector(".fat").innerHTML =
        nutrients[parseInt(e.target.parentElement.id)].fat
      document.querySelector(".carbs").innerHTML =
        nutrients[parseInt(e.target.parentElement.id)].carbs
      document.querySelector(".calories").innerHTML =
        nutrients[parseInt(e.target.parentElement.id)].calories
      document.querySelector(".protein").innerHTML =
        nutrients[parseInt(e.target.parentElement.id)].protein
    })

    btnDelete.addEventListener("click", () => {
      document.querySelector(".nutrients").classList = "nutrients nutrients2"
    })

    caloriesDiv.appendChild(image)
    caloriesDiv.appendChild(ol)
    caloriesDiv.appendChild(btnNutrients)
    return caloriesDiv
  }

  async createWineDiv(food) {
    const wineDiv = document.createElement("div")
    wineDiv.classList = "wineDiv"
    const wine = await this.foodService.getWinePairing(food)
    if (wine.productMatches[0]) {
      const p = document.createElement("p")
      p.innerHTML = wine.pairingText
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
      h3.style.textAlign = "center"
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

  async createHeaderImages() {
    const images = document.querySelector(".images")
    const products = await this.foodService.getRecipeByCalories(200)
    for (let i = 1; i <= 3; i++) {
      images.appendChild(
        this.createDivImage(products[i].image, products[i].title)
      )
    }
  }

  async findRecipe() {
    const recipesValue = document.querySelector("#value")
    const yesInput = document.getElementById("yes")
    const foodInf = new Array(recipesValue.value)
    const nutrients = new Array(recipesValue.value)
    const searchDiv = document.querySelector(".searchDiv")
    this.removeCaloriesDiv(document.querySelectorAll(".caloriesDiv").length)

    if (document.querySelector(".wineDiv")) {
      document.querySelector(".wineDiv").remove()
    }

    const food = await this.foodService.findRecipeByQuery(
      document.getElementById("searchInput").value,
      recipesValue.value
    )

    if (food.totalResults == 0) {
      window.alert("Invalid recipe name!!!")
      return
    }

    if (yesInput.checked) {
      const wine = await this.createWineDiv(
        document.getElementById("searchInput").value
      )
      searchDiv.appendChild(wine)
    }

    for (let i = 0; i < recipesValue.value; i++) {
      foodInf[i] = await this.foodService.getRecipeInformationById(
        food.results[i].id
      )

      nutrients[i] = await this.foodService.getNutrientsById(food.results[i].id)

      searchDiv.appendChild(
        this.createCaloriesDiv(
          this.createDivImage(foodInf[i].image, foodInf[i].title),
          foodInf[i].analyzedInstructions[0].steps,
          i,
          nutrients
        )
      )
    }
  }

  async render() {
    this.createHeaderImages()
    const button = document.querySelector(".search")
    const input = document.querySelector("#searchInput")

    button.addEventListener("click", () => this.findRecipe(), false)
    input.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        this.findRecipe()
      }
    })
  }
}
