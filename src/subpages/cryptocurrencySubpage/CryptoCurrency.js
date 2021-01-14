import provider from "../../services/Provider"
import "./CryptoCurrency.css"

export default class CryptoCurrencySubpage {

  _allCoins = []
  _coinsToRender = []
  _actuallyDisplayedCoinsId = []
  pageSize = 50
  coinsList = document.querySelector("#coins-list")
  modalWindow = document.querySelector(".modal")
  body = document.querySelector("body")
  modalForm = document.querySelector("form.modal__form")

  constructor() {
    this._currencyAPI = provider.get("CurrencyAPI")
    this.init()
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
        this._coinsToRender = this._allCoins.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      }
      this.renderPage()
    })

  }


  openModal = async () => {

    await this._actuallyDisplayedCoinsId.forEach(coin => coin.addEventListener("click", (e) => {
        e.stopPropagation()

        const coinId = coin.getAttribute("data-coinId")

        this._currencyAPI.getSingleCoin(coinId).then(r => this.renderModal(r))
        this.modalWindow.classList.add("modal--open")

      })
    )
  }

  renderPage = () => {
    this.coinsList.innerHTML = null
    this._coinsToRender.forEach(
      coin => {
        this.coinsList.innerHTML += `<p data-coinId="${coin.id}">
                                     ${coin.name}
                                </p>`
      }
    )
    this.updateActuallyCoinsId()
  }

  renderModal = (clickedCoin) => {
    const coinTitle = document.querySelector("h3.modal__title")
    const coinSymbol = document.querySelector("span.modal__symbol")
    const coinDescription = document.querySelector("p.modal__description")

    coinTitle.textContent = clickedCoin.name
    coinSymbol.textContent = clickedCoin.symbol
    coinDescription.textContent = clickedCoin.description
  }

  updateActuallyCoinsId = () => {
    this._actuallyDisplayedCoinsId = [...document.querySelectorAll("[data-coinId]")]
    this.openModal()
  }


  init = async () => {
    await this._currencyAPI.getAllCoins()
      .then(r => this._allCoins = [...r])
      .then(r => this._coinsToRender = r.slice(0, this.pageSize))
    await this.renderPage()
    await this.coinsToRender()
  }


}
