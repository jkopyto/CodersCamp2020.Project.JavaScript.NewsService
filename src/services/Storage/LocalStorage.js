import Storage from "./Storage"

export default class LocalStorageService extends Storage {
  getItem(key) {
    return window.localStorage.getItem(key)
  }

  setItem(key, value) {
    window.localStorage.setItem(key, value)
  }

  removeItem(key) {
    window.localStorage.removeItem(key)
  }

  clear() {
    window.localStorage.clear()
  }
}
