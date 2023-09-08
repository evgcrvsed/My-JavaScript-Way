//1
const btnNumber = document.getElementById('btnNumber');
const inputNumber = document.getElementById('inputNumber');
const otvNumber = document.getElementById('otvNumber');

btnNumber.onclick = () => {
    let inputValue = parseFloat(inputNumber.value);

    if (inputValue > 0){
        console.log('Положительное число');
        otvNumber.textContent = `Ответ: Число положительное.`;
    }
    else if (inputValue < 0){
        console.log('Отрицательное число');
        otvNumber.textContent = `Ответ: Число отрицательное`;
    }
    else {
        console.log('Ноль');
        otvNumber.textContent = `Ответ: Ноль`;
    }
};

//2
const btnOld = document.getElementById('btnOld');
const inputOld = document.getElementById('inputOld');
const otvOld = document.getElementById('otvOld');

btnOld.onclick = () => {
    let inputValue = parseFloat(inputOld.value);

    if (inputValue <= 0){
        console.log('Не может');
        otvOld.textContent = `Ответ: Вам не может быть <=0 лет.`;
    }
    else if (inputValue > 0 && inputValue <= 120){
        console.log('Может');
        otvOld.textContent = `Ответ: Вам может быть ${inputValue} лет.`;
    }
    else if (inputValue > 120){
        console.log('Не может');
        otvOld.textContent = `Ответ: Вам не может быть более 120 лет.`;
    }
};

//3
const btnModul = document.getElementById('btnModul');
const inputModul = document.getElementById('inputModul');
const otvModul = document.getElementById('otvModul');

btnModul.onclick = () => {
    let inputValue = parseFloat(inputModul.value);

    if (inputValue < 0){
        console.log('Не может');
        otvModul.textContent = `Ответ: Модуль числа ${inputValue} равен ${-inputValue}.`;
    }
    else{
        console.log('Может');
        otvModul.textContent = `Ответ: Модуль числа ${inputValue} равен ${inputValue}.`;
    }
};

//4
const btnTime = document.getElementById('btnTime');

const inputHoursz = document.getElementById('inputHoursz');
const inputMinsz = document.getElementById('inputMinsz');
const inputSecsz = document.getElementById('inputSecsz');

const otvTime = document.getElementById('otvTime');

btnTime.onclick = () => {
    let h = parseFloat(inputHoursz.value);
    let m = parseFloat(inputMinsz.value);
    let s = parseFloat(inputSecsz.value);

    let otv = `Ответ: `;

    if (h >= 0 && h <= 24) {
        otv = otv + `Hours+ `
    }
    else{
        otv = otv + `Hours- `
    }

    if (m >= 0 && m <= 60) {
        otv = otv + `Mins+ `
    }
    else{
        otv = otv + `Mins- `
    }

    if (s >= 0 && s <= 60) {
        otv = otv + `Secs+ `
    }
    else{
        otv = otv + `Secs- `
    }

    otvTime.textContent = otv;
};

//5
const btnXY = document.getElementById('btnXY');

const inputX = document.getElementById('inputX');
const inputY = document.getElementById('inputY');

const otvXY = document.getElementById('otvXY');

btnXY.onclick = () => {
    let x = parseFloat(inputX.value);
    let y = parseFloat(inputY.value);

    let otv = `Ответ: `;

    if (x > 0){
        otv = otv + `Правая `
    }
    else if (x < 0){
        otv = otv + `Левая `
    }
    else{
        otv = otv + `Середина, `
    }

    if (y > 0){
        otv = otv + `верхняя часть.`
    }
    else if (y < 0){
        otv = otv + `нижняя часть.`
    }
    else{
        otv = otv + `в середине.`
    }

    otvXY.textContent = otv;
};

//6
const btnMonth = document.getElementById('btnMonth');
const inputMonth = document.getElementById('inputMonth');
const otvMonth = document.getElementById('otvMonth');

btnMonth.onclick = () => {
    let inputValue = parseFloat(inputMonth.value);

    switch (inputValue){
        case 1:
            console.log('Январь');
            otvMonth.textContent = `Ответ: Январь`;
            break;
        case 2:
            console.log('Февраль');
            otvMonth.textContent = `Ответ: Февраль`;
            break;
        case 3:
            console.log('Март');
            otvMonth.textContent = `Ответ: Март`;
            break;
        case 4:
            console.log('Апрель');
            otvMonth.textContent = `Ответ: Апрель`;
            break;
        case 5:
            console.log('Май');
            otvMonth.textContent = `Ответ: Май`;
            break;
        case 6:
            console.log('Июнь');
            otvMonth.textContent = `Ответ: Июнь`;
            break;
        case 7:
            console.log('Июль');
            otvMonth.textContent = `Ответ: Июль`;
            break;
        case 8:
            console.log('Август');
            otvMonth.textContent = `Ответ: Август`;
            break;
        case 9:
            console.log('Сентябрь');
            otvMonth.textContent = `Ответ: Сентябрь`;
            break;
        case 10:
            console.log('Октябрь');
            otvMonth.textContent = `Ответ: Октябрь`;
            break;
        case 11:
            console.log('Ноябрь');
            otvMonth.textContent = `Ответ: Ноябрь`;
            break;
        case 12:
            console.log('Декабрь');
            otvMonth.textContent = `Ответ: Декабрь`;
            break;
        default:
            console.log('Такого месяца не существует');
            otvMonth.textContent = `Ответ: Такого месяца не существует`;
    }
};

//7
const btnCalc = document.getElementById('btnCalc');

const inputNumber_1 = document.getElementById('inputNumber_1');
const inputZnak = document.getElementById('inputZnak');
const inputNumber_2 = document.getElementById('inputNumber_2');

const otvCalc = document.getElementById('otvCalc');

btnCalc.onclick = () => {
    let num1 = parseFloat(inputNumber_1.value);
    let znak = inputZnak.value;
    let num2 = parseFloat(inputNumber_2.value);

    let result;
    switch (znak){
        case '+':
            result = num1 + num2;
            otvCalc.textContent = `Ответ: ${result}`;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            otvCalc.textContent = `Ответ: ${result}`;
            break;
        case '*':
            result = num1 * num2;
            otvCalc.textContent = `Ответ: ${result}`;
            break;
        case '/':
            result = num1 / num2;
            otvCalc.textContent = `Ответ: ${result.toFixed(2)}`;
            break;
        default:
            otvCalc.textContent = `Ответ: Неизвестная операция.`;
    }

    let otv = `Ответ: ${result}`;
    otvCalc.textContent = otv;
};