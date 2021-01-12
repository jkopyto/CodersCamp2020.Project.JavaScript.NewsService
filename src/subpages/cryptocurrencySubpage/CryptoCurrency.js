import provider from "../../services/Provider"
import "./CryptoCurrency.css"


export default class CryptoCurrencySubpage {

  _allCoins = []
  _coinsToRender = []
  coinsList = document.querySelector("#coins-list")


  constructor() {
    this._currencyAPI = provider.get("CurrencyAPI")
    this.init()
  }




  init = async () => {
    await this._currencyAPI.getAllCoins()
      .then(r => this._allCoins = [...r])
      .then(r => this._coinsToRender = r.slice(0, 500))
  }


}
