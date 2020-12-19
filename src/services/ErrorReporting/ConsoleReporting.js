/* eslint-disable no-console */
import ErrorReporting from "./ErrorReporting"

class ConsoleReporting extends ErrorReporting {
  report(error) {
    console.error(error)
  }
}

export default ConsoleReporting
