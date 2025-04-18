// -------------StopWatch------------------

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const resStopwatch = document.querySelector(".count-stopwatch");

let stopwatchTime = 0;
let stopwatchInterval = null;

const startStopWatch = () => {
  stopwatchInterval = setInterval(() => {
    stopwatchTime += 1;
    resStopwatch.innerText = stopwatchTime;
  }, 1000);
};
const stopWatchEnd = () => {
  resStopwatch.innerText = stopwatchTime;
  clearInterval(stopwatchInterval);
};
const resetStopWatch = () => {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  resStopwatch.innerText = 0;
};
startButton.addEventListener("click", () => {
  startStopWatch();
  resStopwatch.innerText = stopwatchTime;
});
stopButton.addEventListener("click", () => {
  stopWatchEnd();
});
resetButton.addEventListener("click", () => {
  resetStopWatch();
});

// --------------Timer------------------

const input = document.querySelector(".text");
const resTimer = document.querySelector(".count-timer");
let stopTimerInterval;

const startTimer = () => {
  clearInterval(stopTimerInterval);
  resTimer.textContent = input.value;

  stopTimerInterval = setInterval(() => {
    input.value -= 1;
    resTimer.textContent = input.value;
    if (input.value <= 0) {
      clearInterval(stopTimerInterval);
    }
  }, 1000);
};

input.addEventListener("keydown", (event) => {
  if ((event.key = "Enter")) {
    startTimer();
  }
});
