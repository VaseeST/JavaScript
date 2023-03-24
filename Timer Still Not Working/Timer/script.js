(function(){

    let startButton = document.querySelector("startButton");
    let stopButton = document.querySelector("stopButton");
    let pauseButton = document.querySelector("pauseButton");
    let setTimerButton = document.querySelector("setTimerButton");
    let body = document.querySelector("body");
    toggleMode = true;

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
})();