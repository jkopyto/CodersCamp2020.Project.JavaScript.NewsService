/* eslint-disable no-unused-vars */
export default class HttpClient {
  async get(url) {
    throw new Error("Get not implemented")
  }

  async post(url, body) {
    throw new Error("Post not implemented")
  }

  async uploadChatImage(url, body) {
    throw new Error("uploadChatImage not implemented")
  }

  addHeaders(headers) {
    throw new Error("addHeaders not implemented")
  }

  get headers() {
    throw new Error("get headers not implemented")
  }
}
