//1
const btnGrid = document.getElementById('btnGrid');
const inputGrid = document.getElementById('inputGrid');
const parGrid = document.getElementById('parGrid');

btnGrid.onclick = () => {
    let inputValue = inputGrid.value;

    let charArray = Array.from(inputValue);

    let i = 0;
    let result = 0;
    while (charArray.length > i) {
        if (charArray[i] === '#') {
            result++;
        }
        i++;
    }
    
    console.log(`Повторений символа #: ${result}`);
    parGrid.textContent = `Повторений символа #: ${result}`;
};

//1.1
const btnGriid = document.getElementById('btnGriid');
const inputGriid = document.getElementById('inputGriid');
const parGriid = document.getElementById('parGriid');

btnGriid.onclick = () => {
    let inputValue = inputGriid.value;

    let result = '';
    let trying = 0;
    while (inputValue > 0) {
        result = result + '#' + ' '
        inputValue--;
        trying++;
    }
    
    console.log(`Пишу <span>${trying} #</span>:</p> ${result}`);
    parGriid.innerHTML = `Пишу <span>${trying} #</span>:</p> ${result}`;
};

//2
const btnNumbers = document.getElementById('btnNumbers');
const inputNumbers = document.getElementById('inputNumbers');
const parNumbers = document.getElementById('parNumbers');

btnNumbers.onclick = () => {
    let inputValue = inputNumbers.value;

    let result = '';
    result = inputValue;

    while (inputValue > 0) {
        console.log(`Число ${inputValue}`);

        inputValue--;

        result = result.toString() + '-' + inputValue.toString();
    }

    console.log(`Числа: ${result}`);
    parNumbers.textContent = `Числа: ${result}`;
};

//3
const btnNumbersSquare = document.getElementById('btnNumbersSquare');

const inputNumbersNum = document.getElementById('inputNumbersNum');
const inputNumbersSquare = document.getElementById('inputNumbersSquare');

const parNumbersSquare = document.getElementById('parNumbersSquare');

btnNumbersSquare.onclick = () => {
    let number = inputNumbersNum.value;
    let square = inputNumbersSquare.value;

    //Самое простое решение
    // let result = Math.pow(number, square);

    let result = 1;
    while (square > 0) {
        result = result * number;

        // console.log(square);
        square--;
    }

    console.log(`Ответ: ${result}`);
    parNumbersSquare.textContent = `Ответ: ${result}`;
};

//5
const btnFuck = document.getElementById('btnFuck');
const inputFuck = document.getElementById('inputFuck');
const parFuck = document.getElementById('parFuck');

btnFuck.onclick = () => {
    let inputValue = inputFuck.value;

    let i = 1;
    let result = inputValue;
    while (i < inputValue) {
        result = result * i;

        i++;
    }
    
    console.log(`Факториал числа ${inputValue} равен: ${result}`);
    parFuck.textContent = `Факториал числа ${inputValue} равен: ${result}`;
};

//2.1
const inputNumberX = document.getElementById('inputNumberX');
const inputNumberY = document.getElementById('inputNumberY');
const inputNumberZ = document.getElementById('inputNumberZ');

const formulaSymb = document.querySelectorAll('#formulaSymb'); // Заменил '#formulaSymb' на '.formulaSymb' если у вас это классы
const inputOtvet = document.getElementById('inputOtvet');
const formulaLabel = document.getElementById('formulaLabel');
inputOtvet.style.display = 'none';

const parXYZ = document.getElementById('parXYZ');
const btnXYZ = document.getElementById('btnXYZ');


btnXYZ.onclick = () => {
    let x = parseFloat(inputNumberX.value);
    let y = parseFloat(inputNumberY.value);
    let z = parseFloat(inputNumberZ.value);

    let res = 0;

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        console.log('Ошибка');
        return;
    }

    res = x + y * z;
    inputOtvet.style.display = 'inline';
    inputNumberX.style.display = 'none';
    inputNumberY.style.display = 'none';
    inputNumberZ.style.display = 'none';
    for (let item of formulaSymb) {
        item.style.display = 'none';
    }

    btnXYZ.textContent = 'Решил?';
    formulaLabel.textContent = `1. А теперь решай его)`;
    parXYZ.innerHTML = `Решай: <span style="color: red; font-weight: bold; font-size: 1.2em;">${x}</span> + <span style="color: red; font-weight: bold; font-size: 1.2em;">${y}</span> * <span style="color: red; font-weight: bold; font-size: 1.2em;">${z}</span>`;

    if (parseFloat(inputOtvet.value) === res){
        res = 0;
        console.log('Решил ура');

        inputOtvet.style.display = 'none';
        inputOtvet.value = null;

        inputNumberX.style.display = 'inline';
        inputNumberY.style.display = 'inline';
        inputNumberZ.style.display = 'inline';

        inputNumberX.value = null;
        inputNumberY.value = null;
        inputNumberZ.value = null;

        for (let item of formulaSymb) {
            item.style.display = 'inline';
        }
        btnXYZ.textContent = 'Сгенерировать?';
        formulaLabel.innerHTML = `1. Создай пример <span style="color: red; font-weight: bold; font-size: 1.2em;">x</span> + <span style="color: red; font-weight: bold; font-size: 1.2em;">y</span> * <span style="color: red; font-weight: bold; font-size: 1.2em;">z</span>`;

        parXYZ.textContent = `Молодец, правильно решил, не хочешь ещё раз?`;
    }
    else {
        console.log('Не решил '+ res);
    }
}

//2.2
const btnDivide = document.getElementById('btnDivide');
const inputDivide = document.getElementById('inputDivide');
const parDivide = document.getElementById('parDivide');

btnDivide.onclick = () => {
    let inputValue = inputDivide.value;

    let trying = 0;
    let res = inputValue;
    while (res > 50) {
        res = res / 2;
        console.log(res);

        trying++;
    }
    
    console.log(`Вы поделили число ${inputValue} ${trying} раз и получили остаток ${res}`);
    parDivide.innerHTML = `Вы поделили число <span>${inputValue} ${trying}</span> раз и получили остаток <span>${res}</span>`;
};

//3.1
const btnDivid1e = document.getElementById('btnDivide1');
const inputDivide1 = document.getElementById('inputDivide1');
const parDivide1 = document.getElementById('parDivide1');

btnDivid1e.onclick = () => {
    let inputValue = parseFloat(inputDivide1.value);

    let result = [];
    let res;
    for (let i = 0; i <= 100; i++) {
        if (i % inputValue === 0) {
            result.push(i);
        }
        console.log(i);
    }
    
    let str_res = '';
    for (let item of result) {
        str_res = str_res + item + ' ';
    }
    
    console.log(`Числа от <span>0</span> до <span>100</span> кратные <span>${inputValue}</span>: ${str_res}`);
    parDivide1.innerHTML = `Числа от <span>0</span> до <span>100</span> кратные <span>${inputValue}</span>: ${str_res}`;
};

//3.2
const btnMinMax = document.getElementById('btnMinMax');

const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');

const parMinMax = document.getElementById('parMinMax');

btnMinMax.onclick = () => {
    let min = parseFloat(inputMin.value);
    let max = parseFloat(inputMax.value);

    let result = [];
    let trying = 0;
    for (let i = min; i <= max; i++)
     {
        trying++;
        if (trying == 4){
            trying = 0;
            result.push(i);
        }
        
    }

    let str_res = '';
    for (let item of result) {
        str_res = str_res + item + ' ';
    }
    
    console.log(str_res);
    parMinMax.innerHTML = `Каждое 4 число от <span>${min}</span> до <span>${max}</span>: ${str_res}`;
};

//3.3
const btnSimple = document.getElementById('btnSimple');
const inputSimple = document.getElementById('inputSimple');
const parSimple = document.getElementById('parSimple');

btnSimple.onclick = () => {
    let inputValue = parseFloat(inputSimple.value);

    let isPrime = true;

    if (inputValue <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(inputValue); i++) {
            if (inputValue % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`Число ${inputValue} - простое.`);
        parSimple.innerHTML = `Число ${inputValue} - простое.`;
    } else {
        console.log(`Число ${inputValue} - не простое.`);
        parSimple.innerHTML = `Число ${inputValue} - не простое.`;
    }
};

// //3
// const btnLength = document.getElementById('btnLength');
// const inputLength = document.getElementById('inputLength');

// btnLength.onclick = () => {
//     let inputValue = inputLength.value;

//     let result = inputValue * inputValue;

//     inputLength.value = result;
// };

// //4
// const btnConv = document.getElementById('btnConv');
// const inputConv = document.getElementById('inputConv');

// const UNTITLED_VALUE = 0.621371;

// btnConv.onclick = () => {
//     let inputValue = inputConv.value;

//     let result = inputValue * UNTITLED_VALUE;

//     inputConv.value = result.toFixed(2);
// };

// //5
// const btnPlus = document.getElementById('btnPlus');
// const btnMinus = document.getElementById('btnMinus');
// const btnDevide = document.getElementById('btnDevide');
// const btnTimes = document.getElementById('btnTimes');

// const inputCalc_1 = document.getElementById('inputCalc_1');
// const inputCalc_2 = document.getElementById('inputCalc_2');
// const inputResult = document.getElementById('CalcRes');

// btnPlus.onclick = () => {
//     let inputValue_1 = inputCalc_1.value;
//     let inputValue_2 = inputCalc_2.value;

//     let result = parseFloat(inputValue_1) + parseFloat(inputValue_2);

//     inputResult.value = result.toFixed(2);
// };

// btnMinus.onclick = () => {
//     let inputValue_1 = inputCalc_1.value;
//     let inputValue_2 = inputCalc_2.value;

//     let result = inputValue_1 - inputValue_2;

//     inputResult.value = result.toFixed(2);
// };

// btnDevide.onclick = () => {
//     let inputValue_1 = inputCalc_1.value;
//     let inputValue_2 = inputCalc_2.value;

//     let result = inputValue_1 / inputValue_2;

//     inputResult.value = result.toFixed(2);
// };

// btnTimes.onclick = () => {
//     let inputValue_1 = inputCalc_1.value;
//     let inputValue_2 = inputCalc_2.value;

//     let result = inputValue_1 * inputValue_2;

//     inputResult.value = result.toFixed(2);
// };

// //6
// const btnFormula = document.getElementById('btnFormula');
// const inputFormula_1 = document.getElementById('inputFormula_1');
// const inputFormula_2 = document.getElementById('inputFormula_2');

// const labelFormula = document.getElementById('labelFormula');
// const brFormula = document.getElementById("brFormula");

// btnFormula.onclick = () => {
//     let inputValue_1 = inputFormula_1.value;
//     let inputValue_2 = inputFormula_2.value;

//     let result = -inputValue_2 / inputValue_1;

//     inputFormula_2.remove();
//     brFormula.remove();

//     labelFormula.textContent = `6. Формула: ${inputValue_1} * x + ${inputValue_2} = 0`;
//     inputFormula_1.value = result;
// };

// //7
// const btnTime = document.getElementById('btnTime');
// const inputHours = document.getElementById('inputHours');
// const inputMinutes = document.getElementById('inputMinutes');
// const labelTime = document.getElementById('labelTime');

// const SECONDS_IN_DAY = 24 * 60 * 60;

// btnTime.onclick = () => {
//     hours = parseInt(inputHours.value);
//     minutes = parseInt(inputMinutes.value);

//     let seconds_in_hours = hours * 60 * 60;
//     let seconds_in_minutes = minutes * 60;

//     let seconds_total = seconds_in_hours + seconds_in_minutes;

//     let remaining_seconds = SECONDS_IN_DAY - seconds_total;

//     let remaining_hours = Math.floor(remaining_seconds / 3600);
//     let remaining_minutes = Math.floor((remaining_seconds - remaining_hours * 3600) / 60);

//     labelTime.textContent = (`7. Осталось ${remaining_hours} часов ${remaining_minutes} минут`);
//     console.log(`Осталось ${remaining_hours} часов ${remaining_minutes} минут`);
// };

// //8
// const btnStr = document.getElementById('btnStr');
// const inputStr = document.getElementById('inputStr');

// btnStr.onclick = () => {
//     let inputValue = inputStr.value;

//     let result = inputValue[1];

//     inputStr.value = result;
// };

// //9
// const btnStrLast = document.getElementById('btnStrLast');
// const inputStrLast = document.getElementById('inputStrLast');

// btnStrLast.onclick = () => {
//     let inputValue = inputStrLast.value;

//     let last_char = inputValue[parseFloat(inputValue.length) - 1];

//     let res = last_char + inputValue;
//     let result = res.slice(0, -1);

//     inputStrLast.value = result;
// };

// //10
// const btnSold = document.getElementById('btnSold');
// const inputSold = document.getElementById('inputSold');

// const PERCENT = 10;
// const SALARY = 250;

// btnSold.onclick = () => {
//     let inputValue = inputSold.value;

//     let result = 250 + (inputValue / PERCENT);

//     inputSold.value = result + '$';
// };
