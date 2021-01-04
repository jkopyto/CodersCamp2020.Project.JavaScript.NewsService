/* eslint-disable no-undef */
import "regenerator-runtime/runtime" //async/await with Parcel
import { App } from "./app/App"
import { SportApiFunction } from "./subpages/sportSubpage/SportData"
import provider from "./services/Provider"
import { SentryReporting, ConsoleReporting } from "./services/ErrorReporting"
import AppResourceProvider from "./services/ResourceProvider/AppResourceProvider"
import SportApiService from "./services/SportApiService"
import FetchClient from "./services/Http"
import Router from "./services/Router"

const ONE_SECOND_MILLIS = 1000
const SW_API_BASE_URL = process.env.SW_API_BASE_URL || "https://swapi.dev/api"
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS

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
<<<<<<< HEAD
provider.provide("router", new Router())
=======
provider.provide("SportApi", new SportApiService())
>>>>>>> d739a83 (Initial commit)

window.onload = () =>
  SportApiFunction()
