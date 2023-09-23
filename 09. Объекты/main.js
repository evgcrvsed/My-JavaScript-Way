alert('Первое задание сделал через class (из книги), третье уже через объект.')
alert('В первом задании не сделал проверку на null и поэтому существуют баги (просто не нужно оставлять пустые поля).');

function string_input(str, label) {
    let char = 0;
    let str_new = '';
    let func = setInterval(IntervalFunc, 20)
    function IntervalFunc() {
        str_new = str_new + str[char] + ''
        label.innerHTML = str_new
        char++;
        if (char === str.length) clearInterval(func);
    }
}

//1
const btnCarCreate = document.getElementById('btnCarCreate');
const labelCars = document.getElementById('cars');
const select_car = document.getElementById('car_select');

const inputCar_name = document.getElementById('car_name');
const inputCar_dev = document.getElementById('car_dev');
const inputCar_model = document.getElementById('car_model');
const inputCar_year = document.getElementById('car_year');
const inputCar_speed = document.getElementById('car_speed');

let cars = [];

btnCarCreate.onclick = () => {
    let car_name = inputCar_name.value;
    let car_dev = inputCar_dev.value;
    let car_model = inputCar_model.value;
    let car_year = inputCar_year.value;
    let car_speed = inputCar_speed.value;

    class Car {
        constructor(car_name, car_model, car_dev, car_year, car_speed) {
            this.name = car_name;
            this.model = car_model;
            this.developer = car_dev;
            this.year = car_year;
            this.speed = car_speed
            let newOption = document.createElement('option');
            newOption.value = this.name;
            newOption.text = this.name;
            select_car.appendChild(newOption);
            select_car.style.display = 'inline';
            cars.push(this);
        }
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].name === car_name) {
            console.log(`Такая машина уже есть!`)
            return
        }
    }
    new Car(car_name, car_model, car_dev, car_year, car_speed)

    let cars_amount = ``;
    for (let i = 0; i < cars.length; i++) {
        cars_amount = cars_amount + '<span style="color: red;">' + cars[i].name + '</span>' + ', '
    }

    string_input(`Ваши машины: ` + cars_amount, labelCars)
    console.log(cars)
}

const btnCarInfo = document.getElementById('btnCarInfo')
const labelCarInfo = document.getElementById(`car_info`)

btnCarInfo.onclick = () => {
    let carName = select_car.value;
    let car_class = cars.find(car => car.name === carName);

    if (car_class) {
        string_input(`Название машины ${car_class.name},<br>
        Модель: ${car_class.model},<br>
        Разработчик: ${car_class.developer}, <br>
        Год выпуска: ${car_class.year}, <br>
        Средняя скорость: ${car_class.speed}.
        `, labelCarInfo);
    }
    else {
        console.log(`Машина не найдена.. Непредвиненная ошибка.`);
    }
}

const btnCarSpeed = document.getElementById('btnCarSpeed');
const inputCarRange = document.getElementById('car_range');

btnCarSpeed.onclick = () => {
    let range = parseFloat(inputCarRange.value);
    const rang = range;
    if (isNaN(range)) return alert('Укажите Км');

    let carName = select_car.value;
    let car_class = cars.find(car => car.name === carName);
    if (!car_class) return alert('Машины нет');
    
    let hours = 0;
    let sleep = 0;
    let sleepTime = 0;
    while (range > 0) {
        hours++;
        sleep++;
        
        if (sleep < 4) {
            range = range - car_class.speed;
        }
        else {
            sleep = 0;
            sleepTime++;
        }
    }
    console.log(hours)
    
    string_input(labelCarInfo.innerHTML + `<br>Машина проедет ${rang} км за ${hours} часов с учётом ${sleepTime} остановок на час.`, labelCarInfo);
}

//3
const btnTimeStat = document.getElementById('btnTimeStat');

const inputTime_h = document.getElementById('inputHours');
const inputTime_m = document.getElementById('inputMins');
const inputTime_s = document.getElementById('inputSecs');

const labelTime = document.getElementById('labelTime');

function recalcTime(time) {
    while (time.seconds >= 60) {
        time.seconds -= 60;
        time.mins++;
    }
    while (time.mins >= 60) {
        time.mins -= 60;
        time.hours++;
    }
    return time;
}

function getTime () {
    h = parseFloat(inputTime_h.value);
    m = parseFloat(inputTime_m.value);
    s = parseFloat(inputTime_s.value);

    if (isNaN(h)) h = 0;
    if (isNaN(m)) m = 0;
    if (isNaN(s)) s = 0;

    let time = {
        hours: h,
        mins: m,
        seconds: s,
    }

    recalcTime(time);

    return time;
}

btnTimeStat.onclick = () => {
    let time = getTime();

    console.log(time);

    

    let total_seconds = (time.hours * 60 * 60) + (time.mins * 60) + time.seconds;
    console.log(total_seconds);

    string_input(`Время: ${time.hours}:${time.mins}:${time.seconds},<br>
    Всего секунд: ${total_seconds}
    `, labelTime)
}

const btnAddSecs = document.getElementById('btnAddSecs')
const btnAddMins = document.getElementById('btnAddMins')
const btnAddHours = document.getElementById('btnAddHours')

const inputAddSecs = document.getElementById('inputAddSecs')
const inputAddMins = document.getElementById('inputAddMins')
const inputAddHours = document.getElementById('inputAddHours')

const timeResult = document.getElementById('timeResult')

btnAddSecs.onclick = () => {
    let time = getTime();
    let secsToAdd = parseFloat(inputAddSecs.value);
    if (isNaN(secsToAdd)) return;

    time.seconds += secsToAdd;
    time = recalcTime(time);

    string_input(`Если к вашему времени прибавить ${secsToAdd} секунд то получится <br> ${time.hours}:${time.mins}:${time.seconds}`, timeResult)
}
btnAddMins.onclick = () => {
    let time = getTime();
    let minsToAdd = parseFloat(inputAddMins.value);
    if (isNaN(minsToAdd)) return;

    time.mins += minsToAdd;
    time = recalcTime(time);

    string_input(`Если к вашему времени прибавить ${minsToAdd} минут то получится <br> ${time.hours}:${time.mins}:${time.seconds}`, timeResult)
}
btnAddHours.onclick = () => {
    let time = getTime();
    let hoursToAdd = parseFloat(inputAddHours.value);
    if (isNaN(hoursToAdd)) return;

    time.hours += hoursToAdd;
    time = recalcTime(time);

    string_input(`Если к вашему времени прибавить ${hoursToAdd} часов то получится <br> ${time.hours}:${time.mins}:${time.seconds}`, timeResult)
}