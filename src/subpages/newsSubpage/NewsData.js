import provider from "../../services/Provider"
import Subpage from "../Subpage"
import css from "./news-subpage.css"

export default class NewsSubpage extends Subpage {
  constructor() {
    super(css)
    this._newsApi = provider.get("NewsApiService")
    this._localStorage = provider.get("LocalStorageService")
  }

  getNewsContentDiv1() {
    return document.querySelector(".news__content1")
  }

  getNewsContentDiv2() {
    return document.querySelector(".news__content2")
  }

  getStorageContentDiv() {
    return document.querySelector(".recentlySeen__container")
  }

  generateMessage(news, output, i) {
    output[i] = []
    news.articles.forEach((e) => {
      output[i].push(
        this.generateDiv(e.title, e.author, e.content.substring(0, 200), e.url)
      )
    })
    return output
  }

  generateDiv(title, author, content, link) {
    return `
      <a href='${link}' target='_blank'>
        <div class="singleNews__container">
          <div>
            <h5>${title}</h5>
            <h6>Author: ${author}</h6>
            <p>${content}</p>
          </div>
        </div>
      </a>
    `
  }

  incrementIndex = (index) => {
    let newIndex = index + 1
    if (newIndex == 5) newIndex = 0
    return newIndex
  }

  changeOpacity1 = (array, index) => {
    const newIndex = this.incrementIndex(index)
    this.getNewsContentDiv1().innerHTML =
      array[0][newIndex] + array[1][newIndex] + array[2][newIndex]
    this.getNewsContentDiv2().style.opacity = 0
    this.getNewsContentDiv1().style.opacity = 1
    setTimeout(this.changeOpacity2, 5000, array, newIndex)
    this.getArticle()
  }

  changeOpacity2 = (array, index) => {
    const newIndex = this.incrementIndex(index)
    this.getNewsContentDiv2().innerHTML =
      array[0][newIndex] + array[1][newIndex] + array[2][newIndex]
    this.getNewsContentDiv2().style.opacity = 1
    this.getNewsContentDiv1().style.opacity = 0
    setTimeout(this.changeOpacity1, 5000, array, newIndex)
    this.getArticle()
  }

  getArticle = () => {
    const getArticles = document.querySelectorAll(".singleNews__container")
    getArticles.forEach((e) => {
      e.addEventListener("click", () => {
        this._localStorage.setItem("elementHref", e.parentElement.href)
        this._localStorage.setItem("lastSeen", e.innerHTML)
        const storagedHref = this._localStorage.getItem("elementHref")
        const storagedItem = this._localStorage.getItem("lastSeen")
        this.getStorageContentDiv().innerHTML = `<h4>Recently seen: </h4> <a href="${storagedHref}" target='_blank'>${storagedItem}</a>`
      })
    })
  }

  async updatePage() {
    let outputArray = []
    let arrayIndex = 0
    await this._newsApi
      .getWorldNews()
      .then(
        (res) =>
          (outputArray = this.generateMessage(res, outputArray, arrayIndex++))
      )
    await this._newsApi
      .getPolandNews()
      .then(
        (res) =>
          (outputArray = this.generateMessage(res, outputArray, arrayIndex++))
      )
    await this._newsApi
      .getHealthNews()
      .then(
        (res) =>
          (outputArray = this.generateMessage(res, outputArray, arrayIndex++))
      )

    this.changeOpacity1(outputArray, 0)
    if (this._localStorage.getItem("lastSeen"))
      this.getStorageContentDiv().innerHTML = `<h4>Recently seen: </h4>  <a href="${this._localStorage.getItem(
        "elementHref"
      )}" target='_blank' >${this._localStorage.getItem("lastSeen")}</a>`
    else
      this.getStorageContentDiv().innerHTML = "<h4>Recently seen: </h4> <a></a>"
  }

  async render() {
    this.updatePage()
  }
}
