import provider from "../../services/Provider"
import css from "./SportSubpage.css"
import Subpage from "../Subpage"
import "./SportSubpage.css"

export default class SportSubpage extends Subpage {
  constructor() {
    super(css)
    this._sportApi = provider.get("SportApiService")
  }

  getLeagueContentDiv() {
    return document.querySelector(".europe_country_box")
  }

  getMatchContentDiv() {
    return document.querySelector(".europe")
  }

  generateMessage(home_logo, home_team, home_score, away_logo, away_team, away_score) {
    return `
      <div class="europe_country">
        <div class="europe_country__name">
          <img src="${home_logo}" alt="italian home logo">
          <span>${home_team}</span>
          <span class="score">${home_score}</span>
        </div>
        <div class="europe_country__name">
          <span class="score">${away_score}</span>
          <span>${away_team}</span>
          <img src="${away_logo}">
        </div>
      </div>
    `
  }

  async updatePage(league) {
    const sportRes = await this._sportApi.getAllMatches(league)

    let outputMessage = ""

    sportRes.data.forEach((e) => {
      outputMessage += this.generateMessage(
        e.home_team.logo,
        e.home_team.name,
        e.stats.home_score,
        e.away_team.logo,
        e.away_team.name,
        e.stats.away_score
      )

      this.getLeagueContentDiv().innerHTML = outputMessage
    })
  }

  async render() {
    this.updatePage()

    const buttonItaly = document.getElementById("italy-league")
    const buttonEngland = document.getElementById("england-league")

    buttonEngland.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage("352")
    })
    buttonItaly.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage("619")
    })
  }
}
