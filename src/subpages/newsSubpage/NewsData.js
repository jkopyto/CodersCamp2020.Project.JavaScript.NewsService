import provider from "../../services/Provider"
import Subpage from "../Subpage"
import css from "./NewsSubpage.css"
import "./NewsSubpage.css"

export default class NewsSubpage extends Subpage {
  constructor() {
    super(css)
    this._newsApi = provider.get("NewsApiService")
  }

  getNewsContentDiv() {
    return document.querySelector(".news__container")
  }

  generateMessage(news, output, i) {
    output[i] = []
    news.articles.forEach((e) => {
      output[i].push(
        this.generateDiv(e.title, e.author, e.content.substring(0, 200))
      )
    })
    return output
  }

  generateDiv(title, author, content) {
    return `
      <div>
        <h5>${title}</h5>
        <h6>${author}</h6>
        <p>${content}</p>
      </div>
    `
  }

  generateOutput(array, index = 0) {
    let output = ""
    let newIndex = index
    if (newIndex == 5) newIndex = 0
    array.forEach((innerArray) => {
      output += innerArray[newIndex]
    })

    this.getNewsContentDiv().innerHTML = output
    setTimeout(this.generateOutput, 5000, array, ++newIndex)
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

    this.generateOutput(outputArray, 0)
  }

  async render() {
    this.updatePage()
  }
}
