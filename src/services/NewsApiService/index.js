import CryptoCurrencyService from "./CryptoCurrency.service"
import provider from "../Provider"

provider.provide("CurrencyAPI", new CryptoCurrencyService())
