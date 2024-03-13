const stopwatchLabel = document.getElementById('stopwatch-label');
const datePicker = document.getElementById('date-picker');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let timerInterval;
let timeInSeconds = 0;
let isRunning = false;

datePicker.valueAsDate=new Date();
datePicker.addEventListener("focus", function () {
    this.blur();
  });

function updateTimeDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    stopwatchLabel.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

async function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;

        while (isRunning) {
            await new Promise(resolve => {
                timerInterval = setInterval(() => {
                    timeInSeconds++;
                    updateTimeDisplay();
                }, 1000);

                stopButton.addEventListener('click', function stop() {
                    clearInterval(timerInterval);
                    isRunning = false;
                    startButton.disabled = false;
                    stopButton.disabled = true;
                    resolve(); 
                });
            });
        }
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateTimeDisplay();
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
