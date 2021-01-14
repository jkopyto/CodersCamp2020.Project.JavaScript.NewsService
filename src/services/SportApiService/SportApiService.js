<<<<<<< HEAD
<<<<<<< HEAD
=======
/* eslint-disable no-undef */
>>>>>>> d739a83 (Initial commit)
=======
>>>>>>> ff3f2c0 (Styles + variable fix)
import ApiService from "../ApiService"

export default class SportApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.SPORT_API_KEY,
      API_LINK: `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${process.env.SPORT_API_KEY}`,
<<<<<<< HEAD
<<<<<<< HEAD
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`,
=======
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`
>>>>>>> d739a83 (Initial commit)
=======
      API_BASE_LINK: `https://app.sportdataapi.com/api/v1/soccer/`,
>>>>>>> 2bb4310 (Sport Data subpage with styles)
    })
  }

  async getAllTeams(event) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    let res = await this.get(
      `${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`
    )
=======
    const res = await this.get(`${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`)
>>>>>>> d739a83 (Initial commit)
=======
    const res = await this.get(
=======
    let res = await this.get(
>>>>>>> ff3f2c0 (Styles + variable fix)
      `${this.creds.API_BASE_LINK}${event}${this.creds.API_KEY}&season_id=619`
    )
>>>>>>> 2bb4310 (Sport Data subpage with styles)
    let data = await res.json()
    return data
  }

  async getTeamByName(teamName) {
<<<<<<< HEAD
<<<<<<< HEAD
    let res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
    let data = await res.json()
    return data
  }
}
=======
    const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
=======
    let res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
>>>>>>> ff3f2c0 (Styles + variable fix)
    let data = await res.json()
    return data
  }
}
<<<<<<< HEAD
>>>>>>> d739a83 (Initial commit)
=======
>>>>>>> 2bb4310 (Sport Data subpage with styles)
