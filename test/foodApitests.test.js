import FoodApiService from "../src/services/FoodApiService/FoodApiService"

const foodService = new FoodApiService()

describe("Main Menu Screen", () => {
  it("Api test", async () => {
    const res = await foodService.getWinePairing("pizza")
    expect(res).toBe("Melbec")
  })
})
