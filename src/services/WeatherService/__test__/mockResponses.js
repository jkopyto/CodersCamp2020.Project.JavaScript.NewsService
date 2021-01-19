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

const airPollutionResponse = {
  coord: [50, 50],
  list: [
    {
      dt: 1605182400,
      main: {
        aqi: 1,
      },
      components: {
        co: 201.94053649902344,
        no: 0.01877197064459324,
        no2: 0.7711350917816162,
        o3: 68.66455078125,
        so2: 0.6407499313354492,
        pm2_5: 0.5,
        pm10: 0.540438711643219,
        nh3: 0.12369127571582794,
      },
    },
  ],
}

const geoFindMeResponse = {
  coords: {
    latitude: 50,
    longitude: 50,
  },
}

module.exports = {
  cityResponse,
  airPollutionResponse,
  geoFindMeResponse,
}
