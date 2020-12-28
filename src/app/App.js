import provider from "../services/Provider"

export const App = ({ options }) => {
  const testErrorReport = () => {
    provider.get("errorReporting").report({
      error: new Error("Coś się popsuło i nie było mnie słychać"),
      errorInfo: `It is a brand new error ${options}`,
    })
  }

  testErrorReport()
  provider.get("wtf")
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

const sportApi = provider.get("SportApi");
sportApi.getTeamByName();