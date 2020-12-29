import FetchClient from "../Http"

export class ApiService extends FetchClient {
  constructor(credentials) {
    super()
    this.creds = credentials
  }
}
