import provider from "../services/Provider"
import { SentryReporting, ConsoleReporting } from "../services/ErrorReporting"
import AppResourceProvider from "../services/ResourceProvider/AppResourceProvider"
import FoodApiService from "../services/FoodApiService"
import FetchClient from "../services/Http"
import Router from "../services/Router"
import CryptoCurrencyService from "../services/CryptoCurrencyService/CryptoCurrency.service"
import WeatherApiService from "../services/WeatherService"
import NewsApiServie from "../services/NewsApiService"
import SportApiService from "../services/SportApiService"
import NewsApiService from "../services/NewsApiService"
import LocalStorageService from "../services/Storage/LocalStorage"

const registerDependencyFunc = () => {
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
  provider.provide("CurrencyAPI", new CryptoCurrencyService())
  provider.provide("FoodApi", new FoodApiService())
  provider.provide("NewsApiService", new NewsApiServie())
  provider.provide("SportApiService", new SportApiService())
  provider.provide("NewsApiService", new NewsApiService())
  provider.provide("LocalStorageService", new LocalStorageService())
}

export const App = () => {
  registerDependencyFunc()
  const router = provider.get("router")
  router.onRouteChange()
}
