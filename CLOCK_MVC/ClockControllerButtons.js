class ClockControllerButtons {
    constructor(city, link) {
        this.city = city;
        this.link = link;
        this.btnStart = city + `-btnStart`;
        this.btnStop = city + `-btnStop`;
    }

    click() {

        let btnStart = document.getElementById(this.btnStart)
        let btnStop = document.getElementById(this.btnStop)

        btnStart.addEventListener('click', () => {
                this.link.viewTrue()
            }
        )
        btnStop.addEventListener('click', () => this.link.viewFalse())

    }
}

let clockControllerButtonsKabul = new ClockControllerButtons('Kabul', clockKabul);

let clockControllerButtonsMinsk = new ClockControllerButtons('Minsk', clockMinsk);

let clockControllerButtonsNewYork = new ClockControllerButtons('New-York', clockNewYork);

let clockControllerButtonsBerlin = new ClockControllerButtons('Berlin', clockBerlin);

let clockControllerButtonsTokyo = new ClockControllerButtons('Tokyo', clockTokyo);

let clockControllerButtonsLondon = new ClockControllerButtons('London', clockLondon);

