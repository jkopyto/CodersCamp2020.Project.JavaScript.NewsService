import WeatherSubpage from "../subpages/weatherdataSubpage/WeatherSubpage"

export const App = async ({ options }) => {
  const weatherSubpage = new WeatherSubpage()
  weatherSubpage.render()
  // testErrorReport()
  // provider.get("wtf")
}
