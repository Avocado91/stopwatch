const timeToString = (time) => {
  let diffInHrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMins = (diffInHrs - hh) * 60
  let mm = Math.floor(diffInMins)

  let diffInSec = (diffInMins - mm) * 60
  let ss = Math.floor(diffInSec)

  let diffInMs = (diffInSec - ss) * 100
  let ms = Math.floor(diffInMs)

  let formattedMM = mm.toString().padStart(2, "0")
  let formattedSS = ss.toString().padStart(2, "0")
  let formattedMS = ms.toString().padStart(2, "0")

  return `${formattedMM}:${formattedSS}:${formattedMS}`
}

let startTime
let elapsedTime = 0
let timerInterval

const showButton = (buttonKey) => {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton
  buttonToShow.style.display = "block"
  buttonToHide.style.display = "none"
}

const print = (txt) => {
  document.getElementById("display").innerHTML = txt
}

const start = () => {
  startTime = Date.now() - elapsedTime
  timerInterval = setInterval(
    (printTime = () => {
      elapsedTime = Date.now() - startTime
      print(timeToString(elapsedTime))
    }),
    10
  )
  showButton("PAUSE")
  console.log("start")
}

const pause = () => {
  clearInterval(timerInterval)
  showButton("PLAY")
  console.log("pause clicked")
}

const reset = () => {
  clearInterval(timerInterval)
  print("00:00:00")
  elapsedTime = 0
  showButton("PLAY")
  console.log("reset clicked")
}

let playButton = document.getElementById("playButton")
let pauseButton = document.getElementById("pauseButton")
let resetButton = document.getElementById("resetButton")

playButton.addEventListener("click", start)
pauseButton.addEventListener("click", pause)
resetButton.addEventListener("click", reset)
