const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const pauseButton = document.querySelector("#pauseButton");
const setTimerButton = document.querySelector("#setTimerButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervbalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervbalId = setInterval(updateTime, 1000);
    }

});
stopButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervbalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});
pauseButton.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervbalId);
    }
});
setTimerButton.addEventListener("click", () => {});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}