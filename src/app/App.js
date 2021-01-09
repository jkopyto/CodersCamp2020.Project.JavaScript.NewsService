import provider from "../services/Provider"

export const App = () => {
  const router = provider.get("router")
  router.loadContent("homepage")
}
