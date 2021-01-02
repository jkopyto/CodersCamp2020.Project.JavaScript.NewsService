import FetchClient from "../Http"

export default class ApiService extends FetchClient {
  constructor(credentials, settings = {}) {
    super(settings)
    this.creds = credentials
  }
}
