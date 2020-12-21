const responseToJson = (response) =>
  response
    ? {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText,
        type: response.type,
        redirected: response.redirected,
        headers: Array.from(response.headers),
      }
    : {
        undefined: "Response is undefined",
      }

export default responseToJson
