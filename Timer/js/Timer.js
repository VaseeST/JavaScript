export default class Timer{
    constructor(root){ 
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timerPartMinutes"),
            seconds: root.querySelector(".timerPartSeconds"),
            control: root.querySelector(".timerButtonControl"),
            stop: root.querySelector(".timerButtonStop"),
            reset: root.querySelector(".timerButtonReset")
        };

        
        this.interval = null;
        this.remainingSeconds = 300;
        this.updateInterfaceTime();

        this.el.control.addEventListener("click", () => {
            if (this.interval === null){
                this.start();
            }
            else{
                this.pause();
            }
        });

        this.el.stop.addEventListener("click", () => {
                this.stop();
                this.remainingSeconds = this.savedTime * 60;
                this.updateInterfaceTime();
        });

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:");
            this.savedTime = inputMinutes;
            if(inputMinutes < 60){
                this.pause();
                this.remainingSeconds = this.savedTime * 60;
                this.updateInterfaceTime();
            }
        });
       }

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }

    updateInterfaceControls(){
        if(this.interval === null){
            this.el.control.innerHTML = `<span class="material-symbols-outlined">play_arrow</span>`
            this.el.control.classList.add("timerButtonStart");
            this.el.control.classList.remove("timerButtonPause");
        }
        else{
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`
            this.el.control.classList.add("timerButtonPause");
            this.el.control.classList.remove("timerButtonStart");
        }
    }

    start(){
        if(this.remainingSeconds === 0) return;

        this.interval = setInterval(() =>{
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if(this.remainingSeconds === 0){
                this.pause();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    pause(){
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    stop(){
        clearInterval(this.interval);

        this.interval = null;
        
        this.updateInterfaceControls();
    }

    static getHTML(){
        return `
        <span class="timerPart timerPartMinutes">00</span>
        <span class="timerPart ">:</span>
        <span class="timerPart timerPartSeconds">00</span>
        <button type="button" class="timerButton timerButtonControl timerButtonStart">
            <span class="material-symbols-outlined">
                play_arrow
                </span>
        </button>
        <button type="button" class="timerButton timerButtonStop">
        <span class="material-symbols-outlined">
            stop
            </span>
    </button>
        <button type="button" class="timerButton timerButtonReset">
            <span class="material-symbols-outlined">
                timer
                </span>
        </button>
        `;
    }

}