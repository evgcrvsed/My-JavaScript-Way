//1
const btnDegree = document.getElementById('btnDegree');
const inputDegree = document.getElementById('inputDegree');

btnDegree.onclick = () => {
    let inputValue = inputDegree.value;

    let result = inputValue * inputValue;

    inputDegree.value = result;
};

//2
const btnAverage = document.getElementById('btnAverage');
const inputAverage_1 = document.getElementById('inputAverage_1');
const inputAverage_2 = document.getElementById('inputAverage_2');

const brElement = document.getElementById("brAverage");

btnAverage.onclick = () => {
    let inputValue_1 = inputAverage_1.value;
    let inputValue_2 = inputAverage_2.value;

    let result = (parseFloat(inputValue_1) + parseFloat(inputValue_2)) / 2;

    inputAverage_2.remove();
    brElement.remove();

    inputAverage_1.value = result;
};

//3
const btnLength = document.getElementById('btnLength');
const inputLength = document.getElementById('inputLength');

btnLength.onclick = () => {
    let inputValue = inputLength.value;

    let result = inputValue * inputValue;

    inputLength.value = result;
};

//4
const btnConv = document.getElementById('btnConv');
const inputConv = document.getElementById('inputConv');

const UNTITLED_VALUE = 0.621371;

btnConv.onclick = () => {
    let inputValue = inputConv.value;

    let result = inputValue * UNTITLED_VALUE;

    inputConv.value = result.toFixed(2);
};

//5
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnDevide = document.getElementById('btnDevide');
const btnTimes = document.getElementById('btnTimes');

const inputCalc_1 = document.getElementById('inputCalc_1');
const inputCalc_2 = document.getElementById('inputCalc_2');
const inputResult = document.getElementById('CalcRes');

btnPlus.onclick = () => {
    let inputValue_1 = inputCalc_1.value;
    let inputValue_2 = inputCalc_2.value;

    let result = parseFloat(inputValue_1) + parseFloat(inputValue_2);

    inputResult.value = result.toFixed(2);
};

btnMinus.onclick = () => {
    let inputValue_1 = inputCalc_1.value;
    let inputValue_2 = inputCalc_2.value;

    let result = inputValue_1 - inputValue_2;

    inputResult.value = result.toFixed(2);
};

btnDevide.onclick = () => {
    let inputValue_1 = inputCalc_1.value;
    let inputValue_2 = inputCalc_2.value;

    let result = inputValue_1 / inputValue_2;

    inputResult.value = result.toFixed(2);
};

btnTimes.onclick = () => {
    let inputValue_1 = inputCalc_1.value;
    let inputValue_2 = inputCalc_2.value;

    let result = inputValue_1 * inputValue_2;

    inputResult.value = result.toFixed(2);
};

//6
const btnFormula = document.getElementById('btnFormula');
const inputFormula_1 = document.getElementById('inputFormula_1');
const inputFormula_2 = document.getElementById('inputFormula_2');

const labelFormula = document.getElementById('labelFormula');
const brFormula = document.getElementById("brFormula");

btnFormula.onclick = () => {
    let inputValue_1 = inputFormula_1.value;
    let inputValue_2 = inputFormula_2.value;

    let result = -inputValue_2 / inputValue_1;

    inputFormula_2.remove();
    brFormula.remove();

    labelFormula.textContent = `6. Формула: ${inputValue_1} * x + ${inputValue_2} = 0`;
    inputFormula_1.value = result;
};

//7
const btnTime = document.getElementById('btnTime');
const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const labelTime = document.getElementById('labelTime');

const SECONDS_IN_DAY = 24 * 60 * 60;

btnTime.onclick = () => {
    hours = parseInt(inputHours.value);
    minutes = parseInt(inputMinutes.value);

    let seconds_in_hours = hours * 60 * 60;
    let seconds_in_minutes = minutes * 60;

    let seconds_total = seconds_in_hours + seconds_in_minutes;

    let remaining_seconds = SECONDS_IN_DAY - seconds_total;

    let remaining_hours = Math.floor(remaining_seconds / 3600);
    let remaining_minutes = Math.floor((remaining_seconds - remaining_hours * 3600) / 60);

    labelTime.textContent = (`7. Осталось ${remaining_hours} часов ${remaining_minutes} минут`);
    console.log(`Осталось ${remaining_hours} часов ${remaining_minutes} минут`);
};

//8
const btnStr = document.getElementById('btnStr');
const inputStr = document.getElementById('inputStr');

btnStr.onclick = () => {
    let inputValue = inputStr.value;

    let result = inputValue[1];

    inputStr.value = result;
};

//9
const btnStrLast = document.getElementById('btnStrLast');
const inputStrLast = document.getElementById('inputStrLast');

btnStrLast.onclick = () => {
    let inputValue = inputStrLast.value;

    let last_char = inputValue[parseFloat(inputValue.length) - 1];

    let res = last_char + inputValue;
    let result = res.slice(0, -1);

    inputStrLast.value = result;
};

//10
const btnSold = document.getElementById('btnSold');
const inputSold = document.getElementById('inputSold');

const PERCENT = 10;
const SALARY = 250;

btnSold.onclick = () => {
    let inputValue = inputSold.value;

    let result = 250 + (inputValue / PERCENT);

    inputSold.value = result + '$';
};
