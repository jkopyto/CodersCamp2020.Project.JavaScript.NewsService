import ErrorReporting from "./ErrorReporting"
import * as Sentry from "@sentry/browser/esm"
import { Severity } from "@sentry/browser/esm"

class SentryReporting extends ErrorReporting {
  constructor(dsn, gitCommit = undefined) {
    super()

    this.gitCommit = gitCommit

    Sentry.init({
      dsn,
      release: gitCommit,
      integrations: [
        new Sentry.Integrations.UserAgent(),
        new Sentry.Integrations.FunctionToString(),
      ],
    })
  }

  report({ error, errorInfo }) {
    try {
      Sentry.withScope((scope) => {
        scope.setExtra("errorInfo", errorInfo)
        scope.setTag("gitCommit", this.gitCommit || "")
        const errorSerialised =
          typeof error === "object"
            ? JSON.stringify(error, Object.getOwnPropertyNames(error))
            : error
        scope.setExtra("error", errorSerialised)
        try {
          scope.setExtra("stack", new Error().stack)
        } catch (e) {
          scope.setExtra("stack", "Unable to get stack")
        }
        const toReport =
          error instanceof Error ? error : new Error(JSON.stringify(error))
        Sentry.captureException(toReport)
      })
    } catch (e) {
      Sentry.captureException(e)
    }
  }
  registerEvent(eventType, message) {
    const msg = {
      category: "event",
      data: message,
      level: Severity.Info,
    }
    Sentry.addBreadcrumb(msg)
    // somehow sentry sometimes doesn"t include last breadcrumb before exception
    // so set it as extra
    Sentry.configureScope((scope) => {
      scope.setExtra("lastBreadcrumb", msg)
    })
  }
}

export default SentryReporting
