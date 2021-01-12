import provider from "../../services/Provider"
import "./CryptoCurrency.css"


export default class CryptoCurrencySubpage {

  _allCoins = []
  _coinsToRender = []
  pageSize = 500
  coinsList = document.querySelector("#coins-list")


  constructor() {
    this._currencyAPI = provider.get("CurrencyAPI")
    this.init()
  }

  coinsToRender = () => {
    const nextPageBtn = document.querySelector("#next-page")
    const prevPageBtn = document.querySelector("#prev-page")
    const inputSearch = document.querySelector("#search-coin")

    let actualPage = 1

    nextPageBtn.addEventListener("click", () => {
      actualPage++
      const startPageFrom = actualPage * this.pageSize
      const finishPageAt = actualPage * this.pageSize + this.pageSize
      this._coinsToRender = this._allCoins.slice(startPageFrom, finishPageAt)
      this.renderPage()
    })

    prevPageBtn.addEventListener("click", () => {
      actualPage--
      const startPageFrom = actualPage * this.pageSize
      const finishPageAt = actualPage * this.pageSize + this.pageSize
      this._coinsToRender = this._allCoins.slice(startPageFrom, finishPageAt)
      this.renderPage()
    })


    inputSearch.addEventListener("keyup", (e) => {
      if (e.target.value.length === 0) {
        this._coinsToRender = this._allCoins.slice(0, this.pageSize)
        actualPage = 1
        this.renderPage()
      } else {
        this._coinsToRender = this._allCoins.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      }
      this.renderPage()
    })

  }

  renderPage = () => {
    this.coinsList.innerHTML = null
    this._coinsToRender.forEach(
      coin => {
        this.coinsList.innerHTML += `<p data-id="${coin.id}">
                                     ${coin.name}
                                </p>`
      }
    )
  }


  init = async () => {
    await this._currencyAPI.getAllCoins()
      .then(r => this._allCoins = [...r])
      .then(r => this._coinsToRender = r.slice(0, 5))
    await this.renderPage()
    await this.coinsToRender()
  }


}
