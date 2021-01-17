import ApiService from "../ApiService"

export default class SportApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.SPORT_API_KEY,
      API_LINK: `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${process.env.SPORT_API_KEY}`,
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`,
    },
    {
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getAllTeams(event) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`
    )
    const data = await res.json()
    return data
  }

  async getTeamByName(teamName) {
    const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
    const data = await res.json()
    return data
  }
}

