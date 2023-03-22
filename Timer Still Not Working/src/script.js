timerOn = false;

function stopButton(){
    timer(false);
}

function startButton(){
    timer(true);
}


function timer(timerOn){
    if(timerOn){
        const progressBar = document.getElementsByClassName
        ("progress-bar")[0]
        setInterval(() => {
            const computedStyle = getComputedStyle(progressBar)
            const width = parseFloat(computedStyle.getPropertyValue
                ('--width')) || 0
                progressBar.style.setProperty('--width', width + .1)
        }, 5)
    }
    else {
        const progressBar = document.getElementsByClassName
        ("progress-bar")[0]
        const computedStyle = getComputedStyle(progressBar)
        progressBar.style.setProperty('--width', 0)
    }
}