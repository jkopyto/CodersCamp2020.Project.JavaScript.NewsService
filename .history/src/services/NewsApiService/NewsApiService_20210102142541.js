import ApiService from "../ApiService"

export default class NewsApiService extends ApiService {
  constructor() {
    super({
      API_KEY: process.env.NEWS_API_KEY,
      API_LINK: `https://newsapi.org/v2/everything?apikey=${process.env.NEWS_API_KEY}`,
      API_BASE_LINK: `https://newsapi.org/v2/everything`,
    })
  }

  async getWorldNews() {
    // var today = new Date()
    const res = await this.get(`${this.creds.API_LINK}&q=*`)
    let data = await res.json()
    console.log(this.creds.API_KEY)
    return data
  }

  /* async getPolandNews() {
    var today = new Date()
    const res = await this.get(`${this.creds.API_LINK}&language=pl&q=*`)
    let data = await res.json()
    return data
  }

  async getHealthNews() {
    var today = new Date()
    const res = await this.get(`${this.creds.API_LINK}&q=health`)
    let data = await res.json()
    return data
  } */
}
