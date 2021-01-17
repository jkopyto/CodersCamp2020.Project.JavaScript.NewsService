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

  async getAllMatches(season) {
    season = typeof season !== 'undefined' ? season : '619';
    const res = await this.get(
      `${this.creds.API_BASE_LINK}matches?apikey=${this.creds.API_KEY}&season_id=${season}&date_from=2020-12-11&date_to=2020-12-19`
    )
    const data = await res.json()
    return data
  }

  async getCurrentMatch(event) {
    const res = await this.get(
      `${this.creds.API_BASE_LINK}matches/${event}?apikey=${this.creds.API_KEY}`
    )
    return await res.json()
  }

  async getLeagueStandings(season) {
    season = typeof season !== 'undefined' ? season : '619';
    const res = await this.get(
      `${this.creds.API_BASE_LINK}standings?apikey=${this.creds.API_KEY}&season_id=${season}`
    )
    const data = await res.json()
    return data
  }
}

