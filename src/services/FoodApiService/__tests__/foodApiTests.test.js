import FoodApiService from "../FoodApiService"
import {
  mockResponse,
  mockResponse1,
  mockResponse2,
  mockResponse3,
  mockResponse4,
} from "./mockResponses"

const foodService = new FoodApiService()

describe("GetWinePairing tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse))
  })

  it("Returns an object", async () => {
    const res = await foodService.getWinePairing("pizza")
    expect(res).toMatchObject(mockResponse)
  })

  it("Returns a wine name string", async () => {
    const res = await foodService.getWinePairing("pizza")
    expect(res.pairedWines[0]).toBe("sangiovese")
  })
})

describe("GetWineDescription tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse1))
  })

  it("Returns an object", async () => {
    const res = await foodService.getWineDescription("merlot")
    expect(res).toMatchObject(mockResponse1)
  })

  it("Returns a wine description string", async () => {
    const res = await foodService.getWineDescription("merlot")
    expect(res.wineDescription).toBe(
      "Merlot is a dry red wine which is smooth and medium bodied."
    )
  })
})

describe("FindProductByQuery tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse2))
  })

  it("Returns an object", async () => {
    const res = await foodService.findProductByQuery("chicken")
    expect(res).toMatchObject(mockResponse2)
  })
})

describe("GetIngredientsDetails tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse3))
  })

  it("Returns an object", async () => {
    const res = await foodService.getIngredientDetailsById(9266)
    expect(res).toMatchObject(mockResponse3)
  })

  it("Returns a product name string", async () => {
    const res = await foodService.getIngredientDetailsById(9266)
    expect(res.name).toBe("pineapples")
  })
})

describe("GetRecipeByCalories tests", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse4))
  })

  it("Returns an object", async () => {
    const res = await foodService.getRecipeByCalories(123)
    expect(res).toMatchObject(mockResponse4)
  })
})
