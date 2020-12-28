import ApiService from "./ApiService"

export default class SportApiService extends ApiService {
  constructor(){
     super({
        API_KEY = process.env.SPORT_API_KEY,
        API_LINK = `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${API_KEY}`
     })
  }
  
  async getAllTeams(){
     const res = await this.get(`${this.creds.API_LINK}&league_id=314`)
     return res
  }
  
  async getTeamByName(teamName){
     const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
     return res
  }
}
