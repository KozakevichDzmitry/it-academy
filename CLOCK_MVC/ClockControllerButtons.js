class ClockControllerButtons {
    constructor(city, link) {
        this.city= city;
        this.link= link;
        this.btnStart = city +`-btnStart`;
        this.btnStop = city+`-btnStop`;
    }

    click(){

        let btnStart = document.getElementById(this.btnStart)
        let btnStop = document.getElementById(this.btnStop)

        btnStart.addEventListener('click',()=>this.link.view=true)
        btnStop.addEventListener('click',()=>this.link.view=false)

    }
};
let clockControllerButtonsKabul = new ClockControllerButtons('Kabul',clockViewDOMKabul);
clockControllerButtonsKabul.click();
let clockControllerButtonsMinsk = new ClockControllerButtons('Minsk',clockViewDOMMinsk);
clockControllerButtonsMinsk.click();
let clockControllerButtonsNewYork = new ClockControllerButtons('New-York',clockViewSVGNewYork);
clockControllerButtonsNewYork.click();
let clockControllerButtonsBerlin = new ClockControllerButtons('Berlin',clockViewSVGBerlin);
clockControllerButtonsBerlin.click();
let clockControllerButtonsTokyo = new ClockControllerButtons('Tokyo',clockViewCanvasTokyo);
clockControllerButtonsTokyo.click();
let clockControllerButtonsLondon = new ClockControllerButtons('London',clockViewCanvasLondon);
clockControllerButtonsLondon.click();