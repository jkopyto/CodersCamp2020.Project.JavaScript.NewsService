import provider from "../../services/Provider"
import css from "./CryptoCurrency.css"
import Subpage from "../Subpage"
import ModalView from "./ModalView"

export default class CryptoCurrencySubpage extends Subpage {
  _allCoins = []
  _coinsToRender = []
  _actuallyDisplayedCoinsId = []
  pageSize = 80

  constructor() {
    super(css)
    this._currencyAPI = provider.get("CurrencyAPI")
    this.modal = new ModalView()
  }

  coinsToRender = () => {
    const nextPageBtn = document.querySelector("#next-page")
    const prevPageBtn = document.querySelector("#prev-page")
    const inputSearch = document.querySelector("#search-coin")

    let actualPage = 0

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
        actualPage = 0
        this.renderPage()
      } else {
        this._coinsToRender = this._allCoins.filter((coin) =>
          coin.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      }
      this.renderPage()
    })
  }

  renderPage = () => {
    this.coinsList.innerHTML = null
    this._coinsToRender.forEach((coin) => {
      this.coinsList.innerHTML += `<p
 data-coinId="${coin.id}" 
 class="coins-list__coin button offer-button">
${coin.name}</p>`
    })
    this.updateActuallyCoinId()
  }

  updateActuallyCoinId = () => {
    this._actuallyDisplayedCoinsId = [
      ...document.querySelectorAll("[data-coinId]"),
    ]
    this.modal.openModal(this._actuallyDisplayedCoinsId, this.modalWindow)
  }

  catchHTMLElements = () => {
    this.modalForm = document
      .querySelector("form.modal__form")
      .addEventListener("submit", (e) => this.modal.exchangeCoins(e))
    this.coinsList = document.querySelector("#coins-list")
    this.modalWindow = document.querySelector(".modal")
  }

  render = async () => {
    await this.catchHTMLElements()
    await this._currencyAPI
      .getAllCoins()
      .then((r) => (this._allCoins = [...r]))
      .then((r) => (this._coinsToRender = r.slice(0, this.pageSize)))
    await this.renderPage()
    await this.coinsToRender()
  }
}
