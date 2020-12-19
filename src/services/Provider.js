class Provider {
  constructor() {
    this._providers = {}
  }

  provide(moduleName, implementation) {
    this._providers[moduleName] = implementation
  }

  get(moduleName) {
    if (this._providers[moduleName] !== undefined) {
      return this._providers[moduleName]
    } else {
      throw new Error(`Attempted to get an uregistered provider ${moduleName}`)
    }
  }
}

export default new Provider()
