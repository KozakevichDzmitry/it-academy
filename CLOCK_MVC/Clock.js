class Clock {
    timeZone = {
        Moscow: 3,
        London: 0,
        'New-York': -5,
        Berlin: 1,
        Minsk: 3,
        Tokyo: 9,
        Vladivostok: 10,
        Kabul: 4.30,
    }
    view = true;

    constructor(city) {
        this.city = city;
    }

    viewFalse() {
        this.view = false;
    }

    viewTrue() {
        this.view = true;
    }

    update(clockView) {
        let gmtH = (this.timeZone[this.city].toFixed()) * 60 * 60 * 1000; // GMT(часы)
        let gmtM = (this.timeZone[this.city] - this.timeZone[this.city].toFixed()).toFixed(2) * 100 * 60 * 1000;//GMT (минуты)
        let date = new Date();// дата в текущем часосов поясе
        let timeTimezone = +date + date.getTimezoneOffset() * 60 * 1000 + gmtH + gmtM; //время в миллисекундах в
        let dateTimezone = new Date(timeTimezone); // date in timeZone
        let hour = dateTimezone.getHours();
        let minutes = dateTimezone.getMinutes();
        let seconds = dateTimezone.getSeconds();
        let numeralSum = 12; // количество цифр на циферблате
        let rotateHour = 360 / numeralSum * hour + 360 / numeralSum * (minutes / 60); // угол часовой стрелки с учетом минут
        let rotateMinutes = 360 / 60 * minutes; // угол минутной стрелки
        let rotateSeconds = 360 / 60 * seconds; // угол секундной стрелки
        let digitalWatch = `${str0l(hour, 2)}:${str0l(minutes, 2)}:${str0l(seconds, 2)}`;
        let delayMilliseconds = 1020 - new Date().getMilliseconds();//задержки в миллесекундах +20 миллисекунд погрешность setTimeout
        function str0l(val, len) {
            let strVal = val.toString();
            while (strVal.length < len)
                strVal = '0' + strVal;
            return strVal;
        }

        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
        this.numeralSum = numeralSum; // количество цифр на циферблате
        this.rotateHour = rotateHour;// угол часовой стрелки с учетом минут
        this.rotateMinutes = rotateMinutes; // угол минутной стрелки
        this.rotateSeconds = rotateSeconds; // угол секундной стрелки
        this.digitalWatch = digitalWatch; //электронные часы

        if (this.view) clockView.viewTime(this.rotateHour, this.rotateMinutes, this.rotateSeconds, this.digitalWatch);//запускает отображение часов

        setTimeout(this.update.bind(this, clockView), delayMilliseconds); //выполняет функцию с учетом задержки в миллесекундах
    }
}


















