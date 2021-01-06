import provider from "../services/Provider"

export const App = async () => {
  const foodService = provider.get("FoodApi")

  const wine = await foodService.getWinePairing("pizza")

  for (let i = 0; i < 3; i++) {
    console.log(wine.pairedWines[i].toUpperCase())
    const inf = await foodService.getWineDescription(wine.pairedWines[i])
    console.log(inf.wineDescription)
  }
}
