import provider from "../services/Provider"

export const App = ({ options }) => {
  //To remove
  const testErrorReport = () => {
    provider.get("errorReporting").report({
      error: new Error("Coś się popsuło i nie było mnie słychać"),
      errorInfo: "It is a brand new error",
    })
  }

  testErrorReport()
  provider.get("wtf")
}
