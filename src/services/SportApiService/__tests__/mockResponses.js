/* eslint-disable camelcase */
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

const leagueResponse = {
  team_id: 4798,
  position: 1,
  points: 43,
  status: "Promotion",
  result: "Champions League",
  overall: {
    games_played: 18,
    won: 13,
    draw: 4,
    lost: 1,
    goals_diff: 20,
    goals_scored: 39,
    goals_against: 19,
  },
  home: {
    games_played: 9,
    won: 5,
    draw: 3,
    lost: 1,
    goals_diff: 8,
    goals_scored: 20,
    goals_against: 12,
  },
  away: {
    games_played: 9,
    won: 8,
    draw: 1,
    lost: 0,
    goals_diff: 12,
    goals_scored: 19,
    goals_against: 7,
  },
}

module.exports = {
  matchResponse,
  leagueResponse,
}
