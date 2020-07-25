const timeToString = (time) => {
  let diffInHrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMins = (diffInHrs - hh) * 60
  let mm = Math.floor(diffInMins)

  let diffInSec = (diffInMins - mm) * 60
  let ss = Math.floor(diffInSec)

  let formattedHH = hh.toString().padStart(2, "0")
  let formattedMM = mm.toString().padStart(2, "0")
  let formattedSS = ss.toString().padStart(2, "0")

  return `${formattedHH}:${formattedMM}:${formattedSS}`
}

const start = () => {
  console.log("start was clicked")
}

const pause = () => {
  console.log("pause clicked")
}

const reset = () => {
  console.log("reset clicked")
}

let playButton = document.getElementById("playButton")
let pauseButton = document.getElementById("pauseButton")
let resetButton = document.getElementById("resetButton")

playButton.addEventListener("click", start)
pauseButton.addEventListener("click", pause)
resetButton.addEventListener("click", reset)
