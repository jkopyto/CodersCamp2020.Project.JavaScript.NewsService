/* eslint-disable camelcase */
const cityResponse = {
  base: "stations",
  clouds: {
    all: 0,
  },
  cod: 200,
  coord: {
    lat: 49.9841,
    lon: 20.0423,
  },
  dt: 1610382638,
  id: 7533001,
  main: {
    feels_like: -6.29,
    humidity: 62,
    pressure: 1008,
    temp: -2.44,
    temp_max: -1.67,
    temp_min: -2.78,
  },
  name: "Wieliczka",
  sys: {
    country: "PL",
    id: 2017012,
    sunrise: 1610346897,
    sunset: 1610377209,
    type: 3,
  },
  timezone: 3600,
  visibility: 10000,
  weather: [
    {
      description: "clear sky",
      icon: "01n",
      id: 800,
      main: "Clear",
    },
  ],
  wind: {
    deg: 131,
    speed: 1.28,
  },
}

module.exports = {
  cityResponse,
}
