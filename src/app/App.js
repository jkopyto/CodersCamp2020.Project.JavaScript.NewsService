import provider from "../services/Provider"

export const App = async () => {
  const currencyAPI = provider.get("CurrencyAPI")
  const allCoins = await currencyAPI.getAllCoins()
  const singleCoin = await currencyAPI.getSingleCoin("btc-bitcoin")
  const exchangeCoinToUSD = await currencyAPI.exchangeCoinToUSD("btc-bitcoin", 17)

  console.log(allCoins)
  console.log(singleCoin)
  console.log(exchangeCoinToUSD)
  // console.log(allCoins)
  // console.log(singleCoin)
  // return allCoins
}
