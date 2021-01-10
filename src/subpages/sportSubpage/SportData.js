import provider from "../../services/Provider"

export const SportApiFunction = async () => {
  const sportApi = provider.get("SportApi")
  const res = await sportApi.getAllTeams("matches?apikey=")
  const data = res.data

  var wrapper = document.querySelector("#italy_matches"),
    container
  for (var match_id in data) {
    container = '<div class="europe_country"></div>'
    wrapper.insertAdjacentHTML("beforeend", container)
    var inside = document.querySelectorAll(".europe_country")
    inside = inside[inside.length - 1]
    inside.insertAdjacentHTML(
      "beforeend",
      '<div class="europe_country__name"><img src="' +
        data[match_id].home_team.logo +
        '" alt="Italian"><span>' +
        data[match_id].home_team.name +
        '</span><span class="score">' +
        data[match_id].stats.home_score +
        "</span>" +
        "</div>"
    )
    inside.insertAdjacentHTML(
      "beforeend",
      '<div class="europe_country__name"><span class="score">' +
        data[match_id].stats.away_score +
        "</span><span>" +
        data[match_id].away_team.name +
        '</span><img src="' +
        data[match_id].away_team.logo +
        '" alt="Italian"></div>'
    )
  }
}
