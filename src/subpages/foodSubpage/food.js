import FoodApiService from "../../services/FoodApiService/FoodApiService"
import Subpage from "../Subpage"
import css from "./food.css"

export default class FoodSubpage extends Subpage {
  constructor() {
    super(css)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5302aa9 (create and change some function in food subpage)
  createLiElement(content) {
    const li = document.createElement("li")
    li.innerHTML = content
    return li
  }

<<<<<<< HEAD
=======
>>>>>>> a275824 (Creating searching recipe function)
=======
>>>>>>> 5302aa9 (create and change some function in food subpage)
  createDeleteButton() {
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.classList = "deleteButton"
    return deleteButton
  }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  createCaloriesDiv(image, summary) {
=======
  createCaloriesDiv(image, tabInstructions) {
>>>>>>> 5302aa9 (create and change some function in food subpage)
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
<<<<<<< HEAD
      for (let i = 0; i < 3; i++) {
>>>>>>> a275824 (Creating searching recipe function)
=======
      for (let i = 0; i < number; i++) {
>>>>>>> 5302aa9 (create and change some function in food subpage)
        const caloriesDiv = document.querySelector(".caloriesDiv")
        caloriesDiv.remove()
      }
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5302aa9 (create and change some function in food subpage)
  valueOfRecipes(e) {
    const span = document.querySelector(".value")
    span.innerHTML = e.target.value
  }

<<<<<<< HEAD
=======
>>>>>>> a275824 (Creating searching recipe function)
=======
>>>>>>> 5302aa9 (create and change some function in food subpage)
  async createHeaderImages() {
    const images = document.querySelector(".images")
    const products = await this.foodService.getRecipeByCalories(200)
    for (let i = 1; i <= 3; i++) {
      images.appendChild(
        this.createDivImage(products[i].image, products[i].title)
      )
    }
  }

<<<<<<< HEAD
  async render() {
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
=======
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
<<<<<<< HEAD
            foodInf[i].instructions
>>>>>>> a275824 (Creating searching recipe function)
=======
            foodInf[i].analyzedInstructions[0].steps
>>>>>>> 5302aa9 (create and change some function in food subpage)
          )
        )
      }
    })
  }
}
