import provider from "../services/Provider"

export const App = async ({ options }) => {
  const newsApi = provider.get("NewsApi")
  const res = await newsApi.getWorldNews()
  console.log(res)
}
