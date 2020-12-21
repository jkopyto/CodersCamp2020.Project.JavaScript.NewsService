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
