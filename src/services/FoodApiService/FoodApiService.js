import ApiService from "../ApiService"

export default class FoodApiService extends ApiService {
  constructor() {
    super(
      {
        API_KEY: process.env.FOOD_API_KEY,
        API_LINK: `https://api.spoonacular.com/api_key=${process.env.FOOD_API_KEY}`,
      },
      { headers: { Accept: "application/json" } }
    )
  }


  async getRecipesByNutriens(){
    const res = await this.get(`${this.creds.API_LINK}/recipes/findByNutrients`)
    let data = await res.json()
    return data
  }

  async findByIngredients(){
    const res = await this.get(`${this.creds.API_LINK}/recipes/findByIngredients`)
    let data = await res.json()
    return data
  }

}
