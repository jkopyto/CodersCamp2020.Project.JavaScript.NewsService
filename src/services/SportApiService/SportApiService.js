<<<<<<< HEAD
=======
/* eslint-disable no-undef */
>>>>>>> d739a83 (Initial commit)
import ApiService from "../ApiService"

export default class SportApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.SPORT_API_KEY,
      API_LINK: `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${process.env.SPORT_API_KEY}`,
<<<<<<< HEAD
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`,
=======
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`
>>>>>>> d739a83 (Initial commit)
    })
  }

  async getAllTeams(event) {
<<<<<<< HEAD
    let res = await this.get(
      `${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`
    )
=======
    const res = await this.get(`${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`)
>>>>>>> d739a83 (Initial commit)
    let data = await res.json()
    return data
  }

  async getTeamByName(teamName) {
<<<<<<< HEAD
    let res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
    let data = await res.json()
    return data
  }
}
=======
    const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
    let data = await res.json()
    return data
  }
}
>>>>>>> d739a83 (Initial commit)
