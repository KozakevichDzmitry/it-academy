class ClockViewSVG {
    view = true;

    constructor(city) {
        this.city = city;
    }

    createClock() {
        let clock = document.querySelector('.clock');
        let clockBoardBox = document.createElement('div');
        let clockBoardSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        let clockBoardSvgCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let arrowHour = document.createElement('object');
        let arrowMinute = document.createElement('object');
        let arrowSecond = document.createElement('object');
        let clockMidSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        let clockMid = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
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
        digitalWatch.style.fontSize = clockFontSize + 'px';
        clockBoardBox.setAttribute('class', 'board_svg');
        clockBoardBox.style.width = clockSize + 'px';
        clockBoardBox.style.height = clockSize + 'px';
        clockBoardSvg.setAttribute('class', 'circle');
        clockBoardSvg.setAttribute('width', '100%')
        clockBoardSvg.setAttribute('height', '100%')
        clockBoardSvgCircle.setAttribute('fill', '#FCCA66');
        clockBoardSvgCircle.setAttribute('cx', '50%');
        clockBoardSvgCircle.setAttribute('cy', '50%');
        clockBoardSvgCircle.setAttribute('r', '50%');
        arrowHour.setAttribute('id', `${this.city}-arrow_hour_svg`);
        arrowHour.setAttribute('class', `arrow_hour_svg`);
        arrowHour.setAttribute('type', 'image/svg+xml');
        arrowHour.setAttribute('data', 'hour-arrow.svg');
        arrowMinute.setAttribute('id', `${this.city}-arrow_minute_svg`);
        arrowMinute.setAttribute('class', `arrow_minute_svg`);
        arrowMinute.setAttribute('type', 'image/svg+xml');
        arrowMinute.setAttribute('data', 'minute-arrow.svg');
        arrowSecond.setAttribute('id', `${this.city}-arrow_second_svg`);
        arrowSecond.setAttribute('class', `arrow_second_svg`);
        arrowSecond.setAttribute('type', 'image/svg+xml');
        arrowSecond.setAttribute('data', 'second-arrow.svg');
        clockMidSvg.setAttribute('class', 'mid_svg');
        clockMid.setAttribute('fill', '#AC2729');
        clockMid.setAttribute('cx', '50%');
        clockMid.setAttribute('cy', '50%');
        clockMid.setAttribute('r', '50%');
        digitalWatch.setAttribute('id', `${this.city}-digital_watch`);
        digitalWatch.setAttribute('class', `digital_watch`);
        start.textContent = 'Start';
        stop.textContent = 'Stop';
        spanCity.textContent = `${this.city}`;
        divControl.appendChild(start);
        divControl.appendChild(stop);
        divControl.appendChild(spanCity);
        clockBoardSvg.appendChild(clockBoardSvgCircle);
        clockBoardBox.appendChild(clockBoardSvg);
        clockBoardBox.appendChild(arrowHour);
        clockBoardBox.appendChild(arrowMinute);
        clockBoardBox.appendChild(arrowSecond);
        clockMidSvg.appendChild(clockMid);
        clockBoardBox.appendChild(clockMidSvg);
        clockBoardBox.appendChild(digitalWatch);
        clockBox.appendChild(divControl);
        clockBox.appendChild(clockBoardBox);
        for (let i = 1; i <= numeralSum; i++) { //создает циферблат от 1 до 12
            let clockBoardSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            let clockBoardSvgCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let clockBoardSvgNumber = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            let stepInDegree = 360 / numeralSum; // угол между цифрами
            clockBoardSvgCircle.setAttribute('fill', '#48B382');
            clockBoardSvgCircle.setAttribute('cx', '50%');
            clockBoardSvgCircle.setAttribute('cy', '50%');
            clockBoardSvgCircle.setAttribute('r', '50%');
            clockBoardSvg.setAttribute('class', 'clock_face_svg');
            clockBoardSvg.style.transform = `translateX(-50%) rotate(${stepInDegree * i}deg)`;
            clockBoardSvgNumber.setAttribute('fill', '#333');
            clockBoardSvgNumber.setAttribute('x', '50%');
            clockBoardSvgNumber.setAttribute('y', '50%');
            clockBoardSvgNumber.setAttribute('text-anchor', 'middle');
            clockBoardSvgNumber.setAttribute('dominant-baseline', 'central');
            clockBoardSvgNumber.setAttribute('font-size', `${clockFontSize}px`)
            clockBoardSvgNumber.setAttribute('transform', `translate(0) rotate(${-stepInDegree * i} ${clockFontSize * 1.11} ${clockFontSize * 1.11})`)
            clockBoardSvgNumber.textContent = i;
            clockBoardSvg.appendChild(clockBoardSvgCircle);
            clockBoardSvg.appendChild(clockBoardSvgNumber);
            clockBoardBox.appendChild(clockBoardSvg);
        }
        clock.appendChild(clockBox);
    }

    viewTime(rotateHour, rotateMinutes, rotateSeconds, time) {
        if (this.view) {
            let digitalWatch = document.querySelector(`#${this.city}-digital_watch`);
            let arrowHour = document.querySelector(`#${this.city}-arrow_hour_svg`);
            let arrowMinutes = document.querySelector(`#${this.city}-arrow_minute_svg`);
            let arrowSecond = document.querySelector(`#${this.city}-arrow_second_svg`);
            arrowHour.style.transform = `translateX(-50%) rotate(${rotateHour}deg)`;
            arrowMinutes.style.transform = `translateX(-50%) rotate(${rotateMinutes}deg)`;
            arrowSecond.style.transform = `translateX(-50%) rotate(${rotateSeconds + 45}deg)`;
            digitalWatch.textContent = time;
        }
    }
}

let clockViewSVGNewYork = new ClockViewSVG('New-York');
clockViewSVGNewYork.createClock()

let clockViewSVGBerlin = new ClockViewSVG('Berlin');
clockViewSVGBerlin.createClock()