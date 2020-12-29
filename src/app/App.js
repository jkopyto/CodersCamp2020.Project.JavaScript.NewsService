import provider from "../services/Provider"

export const App = async ({ options }) => {
  const sportApi = provider.get("SportApi")
  const res = await sportApi.getAllTeams()
  console.log(res)
}

// Moje próby bez eksportu

// class SportApiService {
//   constructor(){
//     API_KEY = process.env.SPORT_API_KEY
//     API_LINK = `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${API_KEY}`
//   }

//   async getAllTeams(){
//     const res = await this.get(`${this.creds.API_LINK}&league_id=314`)
//     return res
//   }

//   async getTeamByName(teamName){
//      const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
//      return res
//   }
// }

// var myTeams = new SportApiService();
// myTeams.getAllTeams();

// Przykład z git'a

// export default class SportApiService extends ApiService {
//   constructor(){
//      super({
//         API_KEY = process.env.SPORT_API_KEY,
//         API_LINK = `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${API_KEY}`
//      })
//   }

//   async getAllTeams(){
//      const res = await this.get(`${this.creds.API_LINK}&league_id=314`)
//      return res
//   }

//   async getTeamByName(teamName){
//      const res = await this.get(`${this.creds.API_LINK}/teams?name=${teamName}`)
//      return res
//   }
// }

// var myTeams = new SportApiService();
// myTeams.getAllTeams();
