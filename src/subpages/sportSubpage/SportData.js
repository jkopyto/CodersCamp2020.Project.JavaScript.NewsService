import provider from "../../services/Provider"
import css from "./SportSubpage.css"
import Subpage from "../Subpage"

export default class SportSubpage extends Subpage {
  constructor() {
    super(css)
    this._sportApi = provider.get("SportApiService")
  }

  getLeagueContentDiv() {
    return document.querySelector(".europe_matches")
  }

  getStandingsContentDiv() {
    return document.querySelector(".europe_standings")
  }

  generateMessage(
    home_logo,
    home_team,
    home_score,
    away_logo,
    away_team,
    away_score
  ) {
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

  generateStandings(
    position,
    team_name,
    points,
    result,
    games_played,
    won,
    draw,
    lost
  ) {
    return `
      <tr>
        <td class="position_standings">
          <span class="time">${position}</span>
        </td>
        <td>${team_name}</td>
        <td>${points}</td>
        <td>${games_played}</td>
        <td>${won}</td>
        <td>${draw}</td>
        <td>${lost}</td>
        <td>
          <div class="status is-green">
            ${result}
          </div>
        </td>
      </tr>
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

  async updateStandings(league) {
    const sportResStandings = await this._sportApi.getLeagueStandings(league)
    const sportRes = await this._sportApi.getAllMatches(league)
    const teams_names = []
    let team_1
    let team_2
    sportRes.data.forEach((e) => {
      team_1 = { id: e.home_team.team_id, name: e.home_team.name }
      team_2 = { id: e.away_team.team_id, name: e.away_team.name }
      teams_names.push(team_1)
      teams_names.push(team_2)
    })

    let outputStandings = ""
    let position = 0

    sportResStandings.data.standings.forEach((e) => {
      if (e.result === null) {
        e.result = " "
      }
      const qwerty = teams_names.findIndex((x) => x.id === e.team_id)
      const team_name = teams_names[qwerty].name

      ++position
      outputStandings += this.generateStandings(
        position,
        team_name,
        e.points,
        e.result,
        e.overall.games_played,
        e.overall.won,
        e.overall.draw,
        e.overall.lost
      )

      this.getStandingsContentDiv().innerHTML = outputStandings
    })
  }

  async render() {
    this.updatePage()
    this.updateStandings()

    const buttonItaly = document.getElementById("italy-league")
    const buttonGermany = document.getElementById("germany-league")

    buttonGermany.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage("496")
      this.updateStandings("496")
    })
    buttonItaly.addEventListener("click", (event) => {
      event.preventDefault()
      this.updatePage("619")
      this.updateStandings("619")
    })
  }
}
