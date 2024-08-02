let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
    running = false;
    lapCounter = 0;
}

function recordLap() {
    if (running) {
        lapCounter++;
        const lapTime = display.innerHTML;
        const lapElement = document.createElement('div');
        lapElement.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
        laps.appendChild(lapElement);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}