const cardValues = document.querySelectorAll('.card-value')

const date = new Date()
const targetDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() + 8,
  date.getHours() + 23,
  date.getMinutes() + 55,
  date.getSeconds() + 43,
  date.getMilliseconds()
)

function getTimeDifference(start, end) {
  let difference = end - start

  const days = Math.floor(difference / (24 * 60 * 60 * 1000))
  difference %= 24 * 60 * 60 * 1000

  const hours = Math.floor(difference / (60 * 60 * 1000))
  difference %= 60 * 60 * 1000

  const minutes = Math.floor(difference / (60 * 1000))
  difference %= 60 * 1000

  const seconds = Math.floor(difference / 1000)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

function calculateDate() {
  const now = new Date()
  const timeDifference = getTimeDifference(now, targetDate)

  const isInPast = Object.values(timeDifference).every(value => value < 0)
  if (isInPast) return

  cardValues.forEach(element => {
    element.textContent = String(timeDifference[element.id] ?? 0).padStart(2, '0')
  })
}

calculateDate()
setInterval(calculateDate, 1000)
