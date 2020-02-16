// grab what we need
const startBtn = document.querySelector('.btn-success');
const stopBtn = document.querySelector('.btn-danger');
const resetBtn = document.querySelector('.btn-block');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 00;
let isRunning = false;
let interval;


// functions
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  timerTime = 00;
  minutes.innerText = '00';
  seconds.innerText = '00';
}

function incrementTimer() {
  timerTime++;

  const numOfMinutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfMinutes);
  seconds.innerText = pad(numOfSeconds);
}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}

// add listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
