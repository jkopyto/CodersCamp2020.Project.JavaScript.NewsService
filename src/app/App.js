import provider from "../services/Provider"

class IndexView {
  constructor() {
    window.onhashchange = (event) => this.onRouteChange(event)
  }

  onRouteChange(event) {
    console.log(event)
  }
}

export const App = ({ options }) => {
  // const testErrorReport = () => {
  //   provider.get("errorReporting").report({
  //     error: new Error("Coś się popsuło i nie było mnie słychać"),
  //     errorInfo: `It is a brand new error ${options}`,
  //   })
  // }

  // testErrorReport()
  // provider.get("wtf")

  new IndexView()
}
