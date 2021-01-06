import WeatherSubpage from "../subpages/weatherdataSubpage/WeatherSubpage"

export const App = async () => {
  const weatherSubpage = new WeatherSubpage()
  weatherSubpage.render()
}
