function getIconUrl(iconCode) {
  return `http://openweathermap.org/img/w/${iconCode}.png`
}

function getQualityIndex(pollutionType, amount) {
  let res
  switch (pollutionType) {
    case "co":
      if (amount <= 3) {
        res = "very-good"
      } else if (amount > 3 && amount <= 7) {
        res = "good"
      } else if (amount > 7 && amount <= 11) {
        res = "moderate"
      } else if (amount > 11 && amount <= 16) {
        res = "sufficient"
      } else if (amount > 16 && amount <= 21) {
        res = "bad"
      } else if (amount > 21) {
        res = "very-bad"
      }
      return res

    case "pm10":
      if (amount <= 20) {
        res = "very-good"
      } else if (amount > 20 && amount <= 50) {
        res = "good"
      } else if (amount > 50 && amount <= 80) {
        res = "moderate"
      } else if (amount > 80 && amount <= 110) {
        res = "sufficient"
      } else if (amount > 110 && amount <= 150) {
        res = "bad"
      } else if (amount > 150) {
        res = "very-bad"
      }
      return res

    case "pm2_5":
      if (amount <= 13) {
        res = "very-good"
      } else if (amount > 13 && amount <= 35) {
        res = "good"
      } else if (amount > 35 && amount <= 55) {
        res = "moderate"
      } else if (amount > 55 && amount <= 75) {
        res = "sufficient"
      } else if (amount > 75 && amount <= 110) {
        res = "bad"
      } else if (amount > 110) {
        res = "very-bad"
      }
      return res

    case "o3":
      if (amount <= 70) {
        res = "very-good"
      } else if (amount > 70 && amount <= 120) {
        res = "good"
      } else if (amount > 120 && amount <= 150) {
        res = "moderate"
      } else if (amount > 150 && amount <= 180) {
        res = "sufficient"
      } else if (amount > 180 && amount <= 240) {
        res = "bad"
      } else if (amount > 240) {
        res = "very-bad"
      }
      return res

    case "no2":
      if (amount <= 40) {
        res = "very-good"
      } else if (amount > 40 && amount <= 100) {
        res = "good"
      } else if (amount > 100 && amount <= 150) {
        res = "moderate"
      } else if (amount > 150 && amount <= 200) {
        res = "sufficient"
      } else if (amount > 200 && amount <= 400) {
        res = "bad"
      } else if (amount > 400) {
        res = "very-bad"
      }
      return res

    case "so2":
      if (amount <= 50) {
        res = "very-good"
      } else if (amount > 50 && amount <= 100) {
        res = "good"
      } else if (amount > 100 && amount <= 200) {
        res = "moderate"
      } else if (amount > 200 && amount <= 350) {
        res = "sufficient"
      } else if (amount > 350 && amount <= 500) {
        res = "bad"
      } else if (amount > 500) {
        res = "very-bad"
      }
      return res
  }
}

function getHours(hoursToAdd = 0) {
  const time = new Date().getHours() + hoursToAdd
  let res = time >= 24 ? time - 24 : time
  res =
    res > 12
      ? String(res.toFixed(1) - 12) + " PM"
      : String(res.toFixed(1)) + " AM"
  return res
}

function getDateAndDayOfWeek(numberOfDaysToAdd = 0) {
  let date = new Date()
  date.setDate(date.getDate() + numberOfDaysToAdd)
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const dayOfWeek = weekday[date.getDay()]
  const yyyy = date.getFullYear()
  date = mm + "/" + dd + "/" + yyyy

  return [date, dayOfWeek]
}

export { getDateAndDayOfWeek, getHours, getQualityIndex, getIconUrl }
