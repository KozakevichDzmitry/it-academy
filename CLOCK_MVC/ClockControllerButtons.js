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

        btnStart.addEventListener('click', () => this.link.viewTrue())
        btnStop.addEventListener('click', () => this.link.viewFalse())

    }
}



