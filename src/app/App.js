import provider from "../services/Provider"

export const App = async () => {
  const foodService = provider.get("FoodApi")

  foodService.getRecipeByCalories(200)
}
