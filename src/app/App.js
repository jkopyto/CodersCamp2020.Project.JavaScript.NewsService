import provider from "../services/Provider"

export const App = ({ options }) => {
  const testErrorReport = () => {
    provider.get("errorReporting").report({
      error: new Error("Coś się popsuło i nie było mnie słychać"),
      errorInfo: `It is a brand new error ${options}`,
    })
  }

  testErrorReport()
  provider.get("wtf")
}

class IndexView {
  constructor() {
    window.addEventListener("haschange", (event) => this.onRouteChane(event))
  }
  onRouteChange(event) {
    console.log(event)
  }
}

new IndexView()
