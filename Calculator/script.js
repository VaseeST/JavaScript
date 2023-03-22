(function(){

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    let mode = document.querySelector(".btn-mode");
    let calculator = document.querySelector(".calculator");
    let body = document.querySelector("body");
    toggleMode = true;

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(e){
        if(screen.value === ""){
            screen.value = "0";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener("click", function(e){
        screen.value = "0";
    })

    mode.addEventListener("click", function(e){
        if(toggleMode){
            body.style.background = "white";
            mode.style.background = "rgba(0, 0, 0)";
            mode.style.color = "rgba(255, 255, 255)";
            mode.firstChild.data = "Dark Mode";
            calculator.style.background = "lightgray";
            screen.style.color = "black";
            screen.style.background = "white";
            toggleMode = false;
        }
        else{
            body.style.background = "black";
            mode.style.background = "rgba(255, 255, 255)";
            mode.style.color = "rgba(0, 0, 0)";
            mode.firstChild.data = "Light Mode";
            calculator.style.background = "rgb(15, 14, 14)";
            screen.style.color = "white";
            screen.style.background = "rgb(10, 10, 10)";
            toggleMode = true;
        }
    })

})();