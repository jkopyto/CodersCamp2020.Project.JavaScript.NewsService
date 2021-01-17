import provider from "../Provider"
import WeatherApiService from "../WeatherService/WeatherApiService"

test("get_throws_error_for_unknown_resource_name", () => {
  expect(() => {
    provider.get("unregistered")
  }).toThrow()
})

test("registers_existing_module", () => {
  const service = new WeatherApiService()
  provider.provide("weatherService", service)
  const result = provider.get("weatherService")
  expect(result).toEqual(service)
})
