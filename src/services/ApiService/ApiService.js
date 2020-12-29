import FetchClient from "../Http"

export default class ApiService extends FetchClient {
  constructor(credentials) {
    super()
    this.creds = credentials
  }
}
