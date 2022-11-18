function strToDate(date) {
  // Check if the date format is valid
  if(!/([0-9]{2}\/){2}[0-9]{4}/.test(date))
    return false

  // Return new date
  let date_arr = date.split('/')
  return new Date(date_arr[2], date_arr[1], date_arr[0])
}

function timeDifference(first_date, last_date) {
  first_date = strToDate(first_date)
  last_date = strToDate(last_date)

  // If the dates are not correct, return false
  if (!(first_date && last_date) || first_date.getTime() > last_date.getTime())
    return false

  // Get the difference of years, months and days
  let years = last_date.getFullYear() - first_date.getFullYear()
  let months = last_date.getMonth() - first_date.getMonth()
  let days = last_date.getDate() - first_date.getDate()

  // Correct negative values in days and months
  while (days < 0) {
    days += 30
    months--
  }
  while (months < 0) {
    months += 12
    years--
  }

  return `${days} days, ${months} months and ${years} years`
}
