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

  generateMessage(news) {
    let output = ""
    news.articles.forEach((e) => {
      output += this.generateDiv(e.title, e.author, e.content.substring(0, 200))
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

  async updatePage() {
    let outputMessage = ""
    await this._newsApi
      .getWorldNews()
      .then((res) => (outputMessage += this.generateMessage(res)))
    await this._newsApi
      .getPolandNews()
      .then((res) => (outputMessage += this.generateMessage(res)))
    await this._newsApi
      .getHealthNews()
      .then((res) => (outputMessage += this.generateMessage(res)))

    this.getNewsContentDiv().innerHTML = outputMessage
  }

  async render() {
    this.updatePage()
  }
}
