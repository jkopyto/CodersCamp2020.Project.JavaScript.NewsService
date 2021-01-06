import HttpClient from "./HttpClient"
import FetchError from "./FetchError"
import provider from "../Provider"

const DEFAULT_HEADERS = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "application/json",
}

export default class FetchClient extends HttpClient {
  constructor({ headers = {}, maxRetries = 3, mode = "cors" } = {}) {
    super()

    this._headers =
      Object.keys(headers).length > 0 ? { ...headers } : { ...DEFAULT_HEADERS }
    this.maxRetries = maxRetries
    this.mode = mode
  }

  reportError(data) {
    provider.get("errorReporting").report(data)
  }

  async requestWithRetryAndLog(url, conf, retry) {
    return fetch(url, conf).catch((e) => {
      if (retry < this.maxRetries) {
        return new Promise((resolve) =>
          setTimeout(resolve, (retry + 1) * 200)
        ).then(() => {
          return this.requestWithRetryAndLog(url, conf, retry + 1)
        })
      } else {
        provider.get("errorReporting").report(e)
        throw e
      }
    })
  }

  async request(url, conf, retry) {
    const request = this.requestWithRetryAndLog(url, conf, retry).then((r) => {
      if (!(r && r.ok)) {
        throw new FetchError(
          r,
          `Bad status code, body: ${JSON.stringify(r.data)}`
        )
      } else {
        return r
      }
    })
    return request
  }

  async get(url) {
    return this.request(
      url,
      {
        method: "GET",
        headers: this._headers,
        mode: this.mode,
      },
      0
    )
  }

  async post(url, body) {
    return this.request(
      url,
      {
        method: "POST",
        headers: this._headers,
        mode: this.mode,
        body: JSON.stringify(body),
      },
      0
    )
  }

  get headers() {
    return this._headers
  }

  set headers(newHeaders) {
    this._headers = newHeaders
  }
}
