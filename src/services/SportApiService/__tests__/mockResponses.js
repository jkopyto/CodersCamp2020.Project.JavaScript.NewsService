const matchResponse = {
  match_id: 141399,
  status_code: 3,
  status: "finished",
  match_start: "2020-09-19 16:00:00",
  match_start_iso: "2020-09-19T16:00:00+00:00",
  minute: null,
  league_id: 392,
  season_id: 619,
  stage: {
    stage_id: 1,
    name: "Regular Season",
  },
  group: {
    group_id: 217,
    group_name: "Serie A",
  },
  round: {
    round_id: 19262,
    name: "1",
    is_current: null,
  },
  referee_id: 875,
  home_team: {
    team_id: 4795,
    name: "ACF Fiorentina",
    short_code: "FIO",
    common_name: "",
    logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/389.png",
    country: {
      country_id: 62,
      name: "Italy",
      country_code: "it",
      continent: "Europe",
    },
  },
  away_team: {
    team_id: 4800,
    name: "FC Torino",
    short_code: "TOR",
    common_name: "",
    logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/393.png",
    country: {
      country_id: 62,
      name: "Italy",
      country_code: "it",
      continent: "Europe",
    },
  },
  stats: {
    home_score: 1,
    away_score: 0,
    ht_score: "0-0",
    ft_score: "1-0",
    et_score: null,
    ps_score: null,
  },
  venue: {
    venue_id: 2274,
    name: "Stadio Artemio Franchi",
    capacity: 47300,
    city: "Florence",
    country_id: 62,
  },
}

module.exports = {
  matchResponse,
}
