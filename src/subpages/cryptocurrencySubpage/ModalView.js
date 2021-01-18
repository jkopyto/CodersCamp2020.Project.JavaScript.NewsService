import CryptoCurrencyService from "../../services/CryptoCurrencyService"

export default class ModalView {
  _coinId

  constructor() {
    this._currencyAPI = new CryptoCurrencyService()
  }

  openModal = async (actuallyDisplayedCoinsId, modalWindow) => {
    const closeModal = document.querySelector(".modal__close")

    await actuallyDisplayedCoinsId.forEach((coin) =>
      coin.addEventListener("click", () => {
        this._coinId = coin.getAttribute("data-coinId")
        this._currencyAPI
          .getSingleCoin(this._coinId)
          .then((r) => this.renderModal(r))
        modalWindow.classList.add("modal--open")
      })
    )
    closeModal.addEventListener("click", () => {
      modalWindow.classList.remove("modal--open")
    })
  }

  renderModal = (clickedCoin) => {
    const coinTitle = document.querySelector("h3.modal__title")
    const coinSymbol = document.querySelector("span.modal__symbol")
    const coinDescription = document.querySelector("p.modal__description")

    coinTitle.textContent = clickedCoin.name
    coinSymbol.textContent = clickedCoin.symbol
    coinDescription.textContent = clickedCoin.description
  }

  exchangeCoins = async (e) => {
    e.preventDefault()
    const moneySpan = document.querySelector("span.modal__money")
    const coinsInputValue = document.querySelector("form.modal__form").coins
      .value
    await this._currencyAPI
      .exchangeCoinToUSD(this._coinId, coinsInputValue)
      .then((r) => parseFloat(r).toFixed(2))
      .then((r) => (moneySpan.textContent = r))
  }

  exchangeCoinToUSD = async (coinId, amountOfCoins) => {
    await this._currencyAPI.exchangeCoinToUSD(coinId, amountOfCoins)
  }
}
