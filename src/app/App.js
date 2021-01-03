import provider from "../services/Provider"

export const App = async () => {
  const foodService = provider.get("FoodApi")
  foodService.findProductByQuery("pizza")
  foodService.getRandomRecipe()
  foodService.getWinePairing("banana")
  foodService.getIngredientDetails()
}
