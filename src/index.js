/* eslint-disable no-undef */
import "regenerator-runtime/runtime" //async/await with Parcel
import { App } from "./app/App"
import provider from "./services/Provider"
import { SentryReporting, ConsoleReporting } from "./services/ErrorReporting"
import AppResourceProvider from "./services/ResourceProvider/AppResourceProvider"
import FetchClient from "./services/Http"
import Router from "./services/Router"
import WeatherApiService from "./services/WeatherService"
import WeatherSubpage from "./subpages/weatherSubpage/WeatherSubpage"

if (process.env.SENTRY_DSN) {
  provider.provide(
    "errorReporting",
    new SentryReporting(process.env.SENTRY_DSN, process.env.GIT_COMMIT)
  )
} else {
  provider.provide("errorReporting", new ConsoleReporting())
}

provider.provide("resourceProvider", new AppResourceProvider())
provider.provide("httpClient", new FetchClient({ maxRetries: 2 }))
provider.provide("router", new Router())
provider.provide("weatherApiService", new WeatherApiService())
provider.provide("weatherSubpage", new WeatherSubpage())

window.onload = () => App()
