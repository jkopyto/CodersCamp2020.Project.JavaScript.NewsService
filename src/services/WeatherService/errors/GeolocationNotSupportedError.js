export default class GeolocationNotSupportedError extends Error {
  constructor() {
    super("Geolocation is not supported by your browser")
  }
}
