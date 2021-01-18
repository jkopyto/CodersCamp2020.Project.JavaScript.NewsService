import provider from "../../services/Provider"
import Subpage from "../Subpage"
import css from "./NewsSubpage.css"

export default class NewsSubpage extends Subpage {
  constructor() {
    super(css)
    this._newsApi = provider.get("NewsApiService")
  }

  getNewsContentDiv1() {
    return document.querySelector(".news__content1")
  }

  getNewsContentDiv2() {
    return document.querySelector(".news__content2")
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
  }

  changeOpacity2 = (array, index) => {
    const newIndex = this.incrementIndex(index)
    this.getNewsContentDiv2().innerHTML =
      array[0][newIndex] + array[1][newIndex] + array[2][newIndex]
    this.getNewsContentDiv2().style.opacity = 1
    this.getNewsContentDiv1().style.opacity = 0
    setTimeout(this.changeOpacity1, 5000, array, newIndex)
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
  }

  async render() {
    this.updatePage()
  }
}
