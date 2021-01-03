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
      `${this.creds.API_BASE_LINK}/food/products/search?query=${query}&number=10&apiKey=${this.creds.API_KEY}`
    )
    const data = await res.json()
    return data
  }

  async getRandomRecipe() {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/recipes/random?apiKey=${this.creds.API_KEY}`
    )
    const data = await res.json()
    return data
  }

  async getWinePairing(food) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/wine/pairing?food=${food}&apiKey=${this.creds.API_KEY}`
    )
    const data = await res.json()
    return data
  }

  async getIngredientDetails() {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}/food/ingredients/9266/information?amount=1&apiKey=${this.creds.API_KEY}`
    )
    const data = await res.json()
    console.log(data)
    return data
  }
}
