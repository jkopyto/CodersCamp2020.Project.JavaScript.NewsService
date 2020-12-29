import responseToJson from "src/utils/responseToJson"

export default class FetchError extends Error {
  constructor(err, info) {
    super(
      `Fetch error response: ${JSON.stringify(
        responseToJson(err.response)
      )}, info: ${info}, err: ${err}`
    )
    this.response = err.response
    this.data = err.data
    this.info = info
  }

  toJson() {
    return {
      name: "FetchError",
      response: responseToJson(this.response),
      info: this.info,
      data: this.data,
    }
  }
}
