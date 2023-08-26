import Elysia from "elysia"

function getReqPath(url: string, serverUrl: string) {
  if (url.startsWith("http")) {
    return url.replace("http://" + serverUrl, "")
  }
  return url.replace("https://" + serverUrl, "")
}

export const RequestLogger = (app: Elysia) =>
  app.on("request", (ctx) => {
    if (process.env.NODE_ENV !== "development") return

    console.log(
      `${ctx.request.method} ${getReqPath(
        ctx.request.url,
        app.server?.hostname + ":" + app.server?.port,
      )}`,
    )
  })
