import ApiService from "../ApiService"

export default class NewsApiService extends ApiService {
  constructor() {
    super(
      {
        API_KEY: process.env.NEWS_API_KEY,
        API_LINK: `https://newsapi.org/v2/everything?apikey=${process.env.NEWS_API_KEY}&pageSize=5`,
      },
      { headers: { Accept: "application/json" } }
    )
  }

  async getWorldNews() {
    const res = await this.get(`${this.creds.API_LINK}&q=*`)
    const data = await res.json()
    return data
  }

  async getPolandNews() {
    const res = await this.get(`${this.creds.API_LINK}&language=pl&q=*`)
    const data = await res.json()
    return data
  }

  async getHealthNews() {
    const res = await this.get(`${this.creds.API_LINK}&q=health`)
    const data = await res.json()
    return data
  }
}
