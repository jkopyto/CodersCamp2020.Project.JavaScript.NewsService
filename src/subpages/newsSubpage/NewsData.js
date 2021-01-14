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

  generateMessage(title, author, content) {
    return `
      <div>
        <h5>${title}</h5>
        <h6>${author}</h6>
        <p>${content}</p>
      </div>
    `
  }

  async updatePage() {
    const newsRes = await this._newsApi.getWorldNews()

    let outputMessage = ""
    newsRes.articles.forEach((e) => {
      outputMessage += this.generateMessage(
        e.title,
        e.author,
        e.content.substring(0, 200)
      )

      this.getNewsContentDiv().innerHTML = outputMessage
    })
  }

  async render() {
    this.updatePage()
  }
}
