import ApiService from "../ApiService"
import process from "process"

export default class FoodApiService extends ApiService {
  constructor() {
    super(
      {
        API_KEY: process.env.FOOD_API_KEY,
        API_LINK: `https://api.spoonacular.com/api_key=${process.env.FOOD_API_KEY}`,
        API_BASE_LINK: "https://api.spoonacular.com",
      },
      { headers: { Accept: "application/json" } }
    )
  }

  async findProductByQuery(query) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/products/search?query=${query}&number=1&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getRandomRecipe() {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/recipes/random?apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getWinePairing(food) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/wine/pairing?food=${food}&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getIngredientDetailsById(id) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/ingredients/${id}/information?amount=1&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getRecipeByCalories(calories) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/recipes/findByNutrients?minCalories=50&maxCalories=${calories}&number=5&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getRecipeInformationById(id) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/recipes/${id}/information?includeNutrition=false&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async getWineDescription(wine) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/wine/description?wine=${wine}&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }

  async findRecipeByQuery(query) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/recipes/complexSearch?query=${query}&number=3&apiKey=${this.creds.API_KEY}`
    ).then((res) => res.json())

    return res
  }
}
