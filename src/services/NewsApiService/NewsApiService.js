import ApiService from "../ApiService"
import process from "process"

export default class NewsApiService extends ApiService {
  constructor() {
    super(
      {
        API_LINK: `https://newsapi.org/v2/everything?apikey=${process.env.NEWS_API_KEY}&sortBy=popularity&pageSize=5`,
      },
      { headers: { Accept: "application/json" } }
    )
  }

  async getWorldNews() {
    const res = await this.get(`${this.creds.API_LINK}&q=*`).then((res) =>
      res.json()
    )
    return res
  }

  async getPolandNews() {
    const res = await this.get(
      `${this.creds.API_LINK}&language=pl&q=*`
    ).then((res) => res.json())
    return res
  }

  async getHealthNews() {
    const res = await this.get(`${this.creds.API_LINK}&q=health`).then((res) =>
      res.json()
    )
    return res
  }
}
