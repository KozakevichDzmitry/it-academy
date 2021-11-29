class ClockControllerButtons {
    constructor(city, link) {
        this.city = city;
        this.link = link;
        this.btnStart = city + `-btnStart`;
        this.btnStop = city + `-btnStop`;
        this.init()
    }

    init() {

        let btnStart = document.getElementById(this.btnStart)
        let btnStop = document.getElementById(this.btnStop)

        btnStart.addEventListener('click', () => this.link.stopFalse())
        btnStop.addEventListener('click', () => this.link.stopTrue())

    }
}



