class ClockViewDOM {
    view = true;

    constructor(city) {
        this.city = city;
    }

    createClock() {
        let clock = document.querySelector('.clock');
        let clockBoard = document.createElement('div');
        let arrowHour = document.createElement('div');
        let arrowMinute = document.createElement('div');
        let arrowSecond = document.createElement('div');
        let clockMid = document.createElement('div');
        let digitalWatch = document.createElement('div');
        let clockSize = 300; // диаметр часов
        let clockFontSize = clockSize * 6 / 100; //размер шрифта 6% от диаметра часов
        let numeralSum = 12; // количество цифр на циферблате
        let divControl = document.createElement('div');
        let start = document.createElement('button');
        let stop = document.createElement('button');
        let spanCity = document.createElement('span');
        let clockBox = document.createElement('div');
        divControl.setAttribute('class', `control`);
        start.setAttribute('id', `${this.city}-btnStart`);
        stop.setAttribute('id', `${this.city}-btnStop`);
        clockBox.classList.add(`Clock-${this.city}`);
        clockBoard.setAttribute('class', `board`);
        clockBoard.style.width = clockSize + 'px';
        clockBoard.style.height = clockSize + 'px';
        arrowHour.setAttribute('id', `${this.city}-arrow_hour`);
        arrowHour.setAttribute('class', `arrow_hour`);
        arrowMinute.setAttribute('id', `${this.city}-arrow_minute`);
        arrowMinute.setAttribute('class', `arrow_minute`);
        arrowSecond.setAttribute('id', `${this.city}-arrow_second`);
        arrowSecond.setAttribute('class', `arrow_second`);
        clockMid.setAttribute('id', 'mid');
        digitalWatch.setAttribute('id', `${this.city}-digital_watch`);
        digitalWatch.setAttribute('class', `digital_watch`);
        digitalWatch.style.fontSize = clockFontSize + 'px';
        start.textContent = 'Start'
        stop.textContent = 'Stop'
        spanCity.textContent = `${this.city}`
        divControl.appendChild(start);
        divControl.appendChild(stop);
        divControl.appendChild(spanCity);
        clockBoard.appendChild(arrowHour);
        clockBoard.appendChild(arrowMinute);
        clockBoard.appendChild(arrowSecond);
        clockBoard.appendChild(clockMid);
        clockBoard.appendChild(digitalWatch);
        clockBox.appendChild(divControl);
        clockBox.appendChild(clockBoard);
        for (let i = 1; i <= numeralSum; i++) { //создает циферблат от 1 до 12
            let clockFace = document.createElement('div');
            let clockFaceNumber = document.createElement('span');
            let stepInDegree = 360 / numeralSum; // угол между цифрами
            clockFace.setAttribute('class', 'clock_face');
            clockFace.style.transform = `translateX(-50%) rotate(${stepInDegree * i}deg)`;
            clockFaceNumber.textContent = i;
            clockFaceNumber.style.transform = `translate(-50%, -50%) rotate(-${stepInDegree * i}deg)`;
            clockFaceNumber.style.fontSize = clockFontSize + 'px';
            clockFace.appendChild(clockFaceNumber);
            clockBoard.appendChild(clockFace);
        }
        clock.appendChild(clockBox);

    }

    viewTime(rotateHour, rotateMinutes, rotateSeconds, time) {
        let digitalWatch = document.querySelector(`#${this.city}-digital_watch`);
        let arrowHour = document.querySelector(`#${this.city}-arrow_hour`);
        let arrowMinutes = document.querySelector(`#${this.city}-arrow_minute`);
        let arrowSecond = document.querySelector(`#${this.city}-arrow_second`);
        arrowHour.style.transform = `translateX(-50%) rotate(${rotateHour}deg)`;
        arrowMinutes.style.transform = `translateX(-50%) rotate(${rotateMinutes}deg)`;
        arrowSecond.style.transform = `translateX(-50%) rotate(${rotateSeconds}deg)`;
        digitalWatch.textContent = time;

    }
}

let clockViewDOMKabul = new ClockViewDOM('Kabul');
clockViewDOMKabul.createClock()

let clockViewDOMMinsk = new ClockViewDOM('Minsk');
clockViewDOMMinsk.createClock()










