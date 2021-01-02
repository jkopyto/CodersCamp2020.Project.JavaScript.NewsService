import provider from "../services/Provider"

export const App = async () => {
  const newsApi = provider.get("NewsApi")
  const res = await newsApi.getWorldNews()
  return res
}
