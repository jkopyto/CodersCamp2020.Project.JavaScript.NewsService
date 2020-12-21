import FetchClient from "./FetchClient"

export class ApiService extends FetchClient {
  constructor(credentials) {
    super()
    this.creds = credentials
  }
}
