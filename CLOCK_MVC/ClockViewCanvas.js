class ClockViewCanvas {

    clockSize = 300;// диаметр часов
    constructor(city) {
        this.city = city;
        this.createClock();
    }

    createClock() {
        let clock = document.querySelector('.clock');
        let clockBox = document.createElement('div');
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let divControl = document.createElement('div');
        let start = document.createElement('button');
        let stop = document.createElement('button');
        let spanCity = document.createElement('span');
        this.ctx = ctx;
        clockBox.classList.add(`Clock-${this.city}`);
        canvas.setAttribute('width', this.clockSize);
        canvas.setAttribute('height', this.clockSize);
        divControl.setAttribute('class', `control`);
        start.setAttribute('id', `${this.city}-btnStart`);
        stop.setAttribute('id', `${this.city}-btnStop`);
        start.textContent = 'Start'
        stop.textContent = 'Stop'
        spanCity.textContent = `${this.city}`
        divControl.appendChild(start);
        divControl.appendChild(stop);
        divControl.appendChild(spanCity);
        clockBox.appendChild(divControl);
        clockBox.appendChild(canvas);
        clock.appendChild(clockBox);
        this.viewTime(0, 90, 180, '12:45:13')
    }

    viewTime(clock) {

            let clockSize = this.clockSize;
            let ctx = this.ctx;
            let midSize = this.clockSize * 0.035;// диаметр центра часов
            let clockFontSize = this.clockSize.value * 6 / 100; //размер шрифта 6% от диаметра часов
            let numeralSum = 12; // количество цифр на циферблате
            let getRadians = function (degrees) {
                return (Math.PI / 180) * degrees;
            }
            ctx.clearRect(0, 0, clockSize, clockSize);
            ctx.fillStyle = '#FCCA66';
            ctx.beginPath();
            ctx.arc(this.clockSize / 2, clockSize / 2, clockSize / 2, 0, getRadians(360));
            ctx.fill();
            ctx.closePath();
            //центр часов
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(clockSize / 2, clockSize / 2, midSize / 2, 0, getRadians(360));
            ctx.fill();
            ctx.closePath();
            for (let i = 1; i <= numeralSum; i++) { //создает циферблат от 1 до 12
                let radiusClockFace = clockSize / 2 * 0.85; //радиус циферблата
                let sizeClockFace = clockSize * 0.05; // размер кругов циферблата
                let step = 360 / 12 * i; //шаг в градусах
                let angleStart = -90; //начальный угол
                let x = clockSize / 2 + (radiusClockFace * Math.cos(getRadians(angleStart + step))); // OX
                let y = clockSize / 2 + (radiusClockFace * Math.sin(getRadians(angleStart + step))); // OY
                //круги циферблата
                ctx.fillStyle = '#48B382';
                ctx.beginPath();
                ctx.arc(x, y, sizeClockFace, 0, getRadians(360));
                ctx.fill();
                ctx.closePath();
                //цифры циферблата
                ctx.fillStyle = "#333";
                ctx.beginPath();
                ctx.font = `${clockFontSize}px arial`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(i.toString(), x, y);
                ctx.closePath();
            }
            let createArrow = (width, height, rotate) => {
                let x = clockSize / 2 + (height * Math.cos(getRadians(rotate-90))); // OX
                let y = clockSize / 2 + (height * Math.sin(getRadians(rotate-90))); // OY


                ctx.fillStyle = '#333333';
                ctx.beginPath();
                ctx.lineWidth = width;
                ctx.lineCap = "round";
                ctx.moveTo(clockSize / 2, clockSize / 2);
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.closePath();
            }

            createArrow(clockSize * 0.02, clockSize * 0.25, clock.rotateHour); //часовая стрелка
            createArrow(clockSize * 0.015, clockSize * 0.35, clock.rotateMinutes); //минутная стрелка
            createArrow(clockSize * 0.01, clockSize * 0.45, clock.rotateSeconds); //секундная стрелка

            // элекронные часы
            ctx.fillStyle = "#333";
            ctx.beginPath();
            ctx.font = `${clockSize * 0.05}px arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(clock.digitalWatch, clockSize * 0.5, clockSize * 0.3);
            ctx.closePath();

        }

}

