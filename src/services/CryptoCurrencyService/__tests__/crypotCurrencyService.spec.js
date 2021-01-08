import CryptoCurrencyService from "../CryptoCurrency.service"
import { allCoins, coinMarket, singleCoin } from "./response.mock"

const cryptoCurrencyService = new CryptoCurrencyService()

describe("getAllCoins test", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(allCoins))
  })

  it("should return array of all coins", async () => {
    const resp = await cryptoCurrencyService.getAllCoins()
    expect(resp).toMatchObject(allCoins)
  })
})

describe("singleCoin test", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(singleCoin))
  })

  it("should return object with coin data", async () => {
    const coin = "btc-bitcoin"
    const resp = await cryptoCurrencyService.getSingleCoin(coin)
    expect(resp).toMatchObject(singleCoin)
  })
})

describe("calculate coins to USD test", () => {
  beforeEach(() => {
    fetchMock.doMock()
    fetchMock.mockResponseOnce(JSON.stringify(coinMarket))
  })

  it("should return number value of USD", async () => {
    const coin = "btc-bitcoin"
    const USD = 10

    const resp = await cryptoCurrencyService.exchangeCoinToUSD(coin, USD)
    expect(resp).toBe(270774.3883159)
  })

  it("should return error when amountOfMoney is not a number", async () => {
    const coin = "btc-bitcoin"
    const USD = "noNumberConvertibleValue"

    const resp = await cryptoCurrencyService.exchangeCoinToUSD(coin, USD)
    expect(resp).toBeNaN()
  })
})
