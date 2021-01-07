import ApiService from "../ApiService"

export default class CryptoCurrencyService extends ApiService {
  constructor() {
    super(
      {
        API_LINK: `${process.env.CRYPTO_CURRENCY_LINK}`,
      },
      { headers: { Accept: "application/json" } }
    )
  }

  getAllCoins = async () => {
    return this.get(this.creds.API_LINK)
      .then((resp) => resp.json())
      .catch((e) => e.message)
  }

  getSingleCoin = async (coinId) => {
    const link = this.creds.API_LINK + "/" + coinId
    return await this.get(link)
      .then((resp) => resp.json())
      .catch((e) => e.message)
  }

  exchangeCoinToUSD = async (coinId, amountOfCoins) => {
    let numberOfCoins
    let coinsMarketPrice

    try {
      numberOfCoins = Number(amountOfCoins)
    } catch (e) {
      throw new Error("Amount of Coins is not a number")
    }

    return await this.get(`${this.creds.API_LINK}/${coinId}/ohlcv/latest`)
      .then((resp) => resp.json())
      .then((data) => {
        coinsMarketPrice = data[0].open
        return coinsMarketPrice * numberOfCoins
      })
      .catch((e) => e.message)
  }
}
