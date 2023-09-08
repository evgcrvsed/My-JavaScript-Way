//1
alert("Я вначале не так сделал 10 задание и оно идёт 11\nВсё ли правильно работает?");

const btnPlusser = document.getElementById('btnPlusser');

const inputPlusserMin = document.getElementById('inputPlusserMin');
const inputPlusserMax = document.getElementById('inputPlusserMax');

const parPlusser = document.getElementById('parPlusser');

btnPlusser.onclick = () => {
    let min = parseFloat(inputPlusserMin.value);
    let max = parseFloat(inputPlusserMax.value);

    let result = 0;
    while (min < max) {
        result = result + min;
        // console.log(result + ' ' + min + ' ' + max);
        min++;
    }
    
    console.log(`Ответ: ${result}`);
    parPlusser.textContent = `Ответ: ${result}`;
    inputPlusserMin.value = null;
    inputPlusserMax.value = null;
};

//2
const btnDivider = document.getElementById('btnDivider');

const inputDivider_1 = document.getElementById('inputDivider_1');
const inputDivider_2 = document.getElementById('inputDivider_2');

const parDivider = document.getElementById('parDivider');

btnDivider.onclick = () => {
    let number_1 = parseFloat(inputDivider_1.value);
    let number_2 = parseFloat(inputDivider_2.value);

    if (number_1 <= 0 || isNaN(number_1) && number_2 <= 0 || isNaN(number_2)) {
        console.log("Введите положительные числа!");
        return;
    }

    let res_1 = [];
    // console.log(`Делители числа ${number_1}:`);
    for (let i = 1; i <= number_1; i++) {
        if (number_1 % i === 0) {
            console.log(i);
            res_1.push(i);
        }
    }

    let res_2 = [];
    // console.log(`Делители числа ${number_2}:`);
    for (let i = 1; i <= number_2; i++) {
        if (number_2 % i === 0) {
            console.log(i);
            res_2.push(i);
        }
    }

    let trying = 0;
    while (res_1.length > 0 || res_2.length > 0) {

        //Находим макс число в res_1
        let res_1_max = Math.max(...res_1);
        let res_2_max = Math.max(...res_2);

        if (res_1_max === res_2_max) {
            console.log(`Ответ: ${res_1_max} - ${res_2_max}`);
            parDivider.textContent = `Ответ: ${res_1_max} - ${res_2_max}`
            inputDivider_1.value = null;
            inputDivider_2.value = null;
            break;
        }
        else if (res_1_max > res_2_max) {
            res_1.splice(res_1.indexOf(res_1_max), 1);
        }
        else{
            res_2.splice(res_2.indexOf(res_2_max), 1);
        }

        trying++;
        if (trying > 100000) {
            console.log("Ошибка!");
            return;
        }
    }
    
    // console.log(`Ответ: ${res_1_max} - ${res_2_max}`);
    // parDivider.textContent = `Ответ: ${res_1_max} - ${res_2_max}`;
};

//3
const btnDivider1 = document.getElementById('btnDivider1');

const inputDivider1 = document.getElementById('inputDivider1');

const parDivider1 = document.getElementById('parDivider1');

btnDivider1.onclick = () => {
    let number = parseFloat(inputDivider1.value);

    if (number <= 0 || isNaN(number)) {
        console.log("Введите положительное число!");
        return;
    }

    let res = [];
    console.log(`Делители числа ${number}:`);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
            res.push(i);
        }
    }
    
    let result = '';
    for (let item in res) {
        result = result + res[item] + ' ';
    }
    
    console.log(`Ответ: ${result}`);
    inputDivider1.value = null;
    parDivider1.innerHTML = `Ответ: делители числа <span>${number}</span>: ${result}`;
};

//4
const btnNumberValue = document.getElementById('btnNumberValue');
const inputNumberValue = document.getElementById('inputNumberValue');
const parNumberValue = document.getElementById('parNumberValue');

btnNumberValue.onclick = () => {
    let number = (inputNumberValue.value).toString();
    //Лол без решения вхвыхвхф
    
    console.log(`Ответ: в вашем числе <span>${number}</span> ровно <span>${number.length}</span> цифр`);
    parNumberValue.innerHTML = `Ответ: в вашем числе <span>${number}</span> ровно <span>${number.length}</span> цифр`;
    inputNumberValue.value = null;
};

//5
const btnNumberAnal = document.getElementById('btnNumberAnal');
const btnNumberAnalGenerator = document.getElementById('btnNumberAnalGenerator');

const inputNumberAnal = document.querySelectorAll('.Anal-Numbers');
const parNumberAnal = document.getElementById('parNumberAnal');

const inputs = document.querySelectorAll('.Anal-Numbers input');

btnNumberAnalGenerator.onclick = () => {
    //Получаем все значения в полях input и генерируем рандомно если они не записаны
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0) {
            let min = -30;
            let max = 30;
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            inputs[i].value = randomNumber;
        }
    }
}


btnNumberAnal.onclick = () => {
    let numbers = [];

    //Получаем все значения в полях input
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length > 0) {
            numbers.push(parseFloat(inputs[i].value));
        }
    }

    //Запись в массив по ключам
    let result = {
        min: 0,
        max: 0,
        zeros: 0,

        positive: 0,
        negative: 0,

        sum: 0,
        avg: 0
    }
    let positive = [];
    let negative = [];

    //Обработка значений
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        //min/max/zeros
        if (number < result.min) {
            result.min = number;
        }
        else if (number > result.max) {
            result.max = number;
        }
        else if (number === 0) {
            result.zeros++;
        }

        //positive/negative/
        if (number < 0) {
            result.negative++;
            negative.push(number);
        }
        else if (number > 0) {
            result.positive++;
            positive.push(number);
        }
        else if (number > 0) {
            zeros.positive++;
        }

        //sum/avg
        result.sum = result.sum + number;
        result.avg = result.sum / numbers.length;

        // inputs[i].value = null;
    }

    console.log(`Ответ: Пришли результаты анализа! \n
        Максимальное значение: <span>${result.max}</span> \n
        Минимальное значение: <span>${result.min}</span> \n
        Количество 0: <span>${result.zeros}</span> \n
        Количество положительных: <span>${result.positive}</span> \n
        Количество отрицательных: <span>${result.negative}</span> \n
        Сумма: <span>${result.sum}</span> \n
        Среднее значение: <span>${result.avg}</span>`);
    
        parNumberAnal.innerHTML = `Ответ: Пришли результаты анализа! <br>
        Максимальное значение: <span>${result.max}</span> <br>
        Минимальное значение: <span>${result.min}</span> <br>
        Количество 0: <span>${result.zeros}</span> <br><br>
        Количество положительных: <span>${result.positive}</span> (${positive})<br>
        Количество отрицательных: <span>${result.negative}</span> (${negative})<br><br>
        Сумма: <span>${result.sum}</span> (${inputs[0].value}+${inputs[1].value}+${inputs[2].value}+${inputs[3].value}+${inputs[4].value}+${inputs[5].value}+${inputs[6].value}+${inputs[7].value}+${inputs[8].value}+${inputs[9].value}) <br>
        Среднее значение: <span>${result.avg}</span> (${result.sum} / ${numbers.length})`;
    
    for (let i = 0; i < numbers.length; i++) {
        inputs[i].value = null;
    }
    
    // console.log(`Ответ: в вашем числе <span>${number}</span> ровно <span>${number.length}</span> цифр`);
    // parNumberAnal.innerHTML = `Ответ: в вашем числе <span>${number}</span> ровно <span>${number.length}</span> цифр`;
    // inputNumberAnal.value = null;
};

//6
const btnCalc = document.getElementById('btnCalc');
btnCalc.onclick = () => {
    while (true) {
        let operation = prompt("Выберите операцию: +, -, *, / \nНичего не пишите для закрытия!");
        if (operation === ''){
            console.log('Закрываюсь');
            break;
        }

        let num1 = parseFloat(prompt("Введите первое число:"));
        if (isNaN(num1)) num1 = 0;

        let num2 = parseFloat(prompt("Введите второе число:"));
        if (isNaN(num2)) num2 = 0;

        switch (operation) {
            case '+':
                console.log(num1 + num2);
                alert(num1 + num2);
                break;
            case '-':
                console.log(num1 - num2);
                alert(num1 - num2);
                break;
            case '*':
                console.log(num1 * num2);
                alert(num1 * num2);
                break;
            case '/':
                console.log(num1 / num2);
                alert(num1 / num2);
                break;
            default:
                console.log('Неизвестная операция');
                break;
        }
    }
}

//7
const btnMove = document.getElementById('btnMove');

const inputMove_1 = document.getElementById('inputMove_1');
const inputMove_2 = document.getElementById('inputMove_2');

const parMove = document.getElementById('parMove');

btnMove.onclick = () => {
    let str = inputMove_1.value;
    let move_range = parseFloat(inputMove_2.value);
    
    let symbols = [...str];
    for (let i = 0; i < move_range; i++) {
        symbols.push(symbols[i])
        symbols[i] = '';
    }

    let result = '';
    for (let i = 0; i < symbols.length; i++) {
        result = result + symbols[i];
    }
    console.log(result);
    parMove.innerHTML = `Ответ: <span>${result}</span>`;
}

//8
const btnDays = document.getElementById('btnDays');
btnDays.onclick = () => {

    let trying = 1;
    while (true) {
        answ = confirm('Продолжаем?');
        if (!answ) break;
        switch (trying) {
            case 1:
                alert('Понедельник - день-бездельник');
                trying++;
                break;
            case 2:
                alert('Вторник - повторник');
                trying++;
                break;
            case 3:
                alert('Среда - тамада');
                trying++;
                break;
            case 4:
                alert('Четверг - все заботы я отверг');
                trying++;
                break;
            case 5:
                alert('Пятница - пьяница');
                trying++;
                break;
            case 6:
                alert('Суббота - не работа');
                trying++;
                break;
            case 7:
                alert('Воскресенье - день веселья');
                trying++;
                break;
            default:
                alert('Жаль, что в неделе всего семь дней. ©Леонид Каневский.')
                trying = 1;
                break;
        }
    }
}

//9
const btnMult = document.getElementById('btnMult');
const inputMult = document.getElementById('inputMult');
const parMult = document.getElementById('parMult');

btnMult.onclick = () => {
    let number = parseFloat(inputMult.value);

    let result = [];
    for (let i = 1; i <= 10; i++) {
        let res = number * i;

        let res_str = number + ' * ' + i + ' = ' + '<span>' + res + '</span>';
        result.push(res_str);
    }

    let result_str = '';
    for (let item in result) {
        result_str = result_str + result[item] + '<br>';
    }

    parMult.innerHTML = `Ответ: <br>${result_str}`;
}

//10
const btnGame = document.getElementById('btnGame');

const btnTry = document.getElementById('btnTry');
const inputTry = document.getElementById('inputTry');

const inputGame_1 = document.getElementById('inputGame_1');
const inputGame_2 = document.getElementById('inputGame_2');

const parGame = document.getElementById('parGame');
const labelGame = document.getElementById('labelGame'); //Описание

const labelGameMinus = document.getElementById('labelGame-'); //Полосочка


let flag_game_started = false;
let randomNumber = 0;
btnGame.onclick = () => {
    
    if (!flag_game_started) {
        let min = parseFloat(inputGame_1.value);
        let max = parseFloat(inputGame_2.value);

        if (isNaN(min) || isNaN(max)) return;

        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        inputGame_1.style.display = 'none';
        inputGame_2.style.display = 'none';
        inputGame_1.value = null;
        inputGame_2.value = null;
        labelGameMinus.style.display = 'none';

        btnTry.style.display = 'inline';
        inputTry.style.display = 'inline';
        btnGame.style.display = 'none';

        labelGame.innerHTML = `10. Удачи)`;
        parGame.innerHTML = `Число между <span>${min}</span> и <span>${max}</span> сгенерировано`

        console.log(randomNumber);

        flag_game_started = true;  
    }
}
btnTry.onclick = () => {
    let userTry = parseFloat(inputTry.value);
    if (isNaN(userTry)) {
        console.log('Возвращаемся');
        return;
    }

    if (userTry < randomNumber) {
        console.log('Больше')
        labelGame.innerHTML = `Число больше ${userTry}`;
    }
    else if (userTry > randomNumber) {
        console.log('Меньше');
        labelGame.innerHTML = `Число меньше ${userTry}`;
    }
    else{
        console.log('Угадал');
        flag_game_started = false;

        inputGame_1.style.display = 'inline';
        inputGame_2.style.display = 'inline';
        inputGame_1.value = null;
        inputGame_2.value = null;
        labelGameMinus.style.display = 'inline';

        btnTry.style.display = 'none';
        inputTry.style.display = 'none';
        btnGame.style.display = 'inline';

        labelGame.innerHTML = `10. Ещё раз?`;
        parGame.innerHTML = `Попробуй ещё нижнюю версию!`
    }
}

//11
const btnGamee = document.getElementById('btnGamee');
const inputGamee = document.getElementById('inputGamee');
const parGamee = document.getElementById('parGamee');
const labelGamee = document.getElementById('labelGamee'); 

const btnHigher = document.getElementById('inputHigher');
const btnWin = document.getElementById('inputWin');
const btnLower = document.getElementById('inputLower');
const btnBot = document.getElementById('btnBot');

let inputValue = 0;
let min = 0;
let now = 50;
let max = 100;
let gpt_value = 50;
btnGamee.onclick = () => {
    inputValue = parseFloat(inputGamee.value);
    
    if (isNaN(inputValue)) return;

    if (inputValue > max) max = inputValue;
    
    if (inputValue < min) return;

    btnGamee.style.display = 'none';
    inputGamee.style.display = 'none';

    inputHigher.style.display = 'inline';
    inputWin.style.display = 'inline';
    inputLower.style.display = 'inline';
    btnBot.style.display = 'inline';

    parGamee.innerHTML = `11. Удачи 😁`;

    labelGamee.innerHTML = `Число ${gpt_value}?`;

    console.log(`Угадываю число ${inputValue}`);
}

btnLower.onclick = () => {
    lower();
}
function lower(){
    if (inputValue === gpt_value) return;
    max = gpt_value - 1;
    console.log(`Меньше чем ${gpt_value}`);
    let number = +max + +min
    gpt_value = Math.floor(number / 2);
    labelGamee.innerHTML = `Число ${gpt_value}?`;
}

btnHigher.onclick = () => {
    higher();
}
function higher() {
    if (inputValue === gpt_value) return;
    min = gpt_value + 1;
    console.log(`Больше чем ${gpt_value}`);
    let number = +max + +min
    gpt_value = Math.floor(number / 2);
    labelGamee.innerHTML = `Число ${gpt_value}?`;
}

btnBot.onclick = () => {
    while (inputValue != gpt_value) {
        if (inputValue > gpt_value) {
            higher();
        }
        else {
            lower();
        }
    }
}
function won() {
    console.log('Вы угадали!')
    btnGamee.style.display = 'inline';
    inputGamee.style.display = 'inline';
    inputGamee.value = null;
    parGamee.innerHTML = `Лол спасибо за игру вхахвхы`;

    inputHigher.style.display = 'none';
    inputWin.style.display = 'none';
    inputLower.style.display = 'none';
    btnBot.style.display = 'none';
    labelGamee.innerHTML = `11. Укажи число которое я буду угадывать.`;

}

btnWin.onclick = () => {
    console.log('Поздравляю с победой!')
    won();
}


// //1.1
// const btnGriid = document.getElementById('btnGriid');
// const inputGriid = document.getElementById('inputGriid');
// const parGriid = document.getElementById('parGriid');

// btnGriid.onclick = () => {
//     let inputValue = inputGriid.value;

//     let result = '';
//     let trying = 0;
//     while (inputValue > 0) {
//         result = result + '#' + ' '
//         inputValue--;
//         trying++;
//     }
    
//     console.log(`Пишу <span>${trying} #</span>:</p> ${result}`);
//     parGriid.innerHTML = `Пишу <span>${trying} #</span>:</p> ${result}`;
// };

// //2
// const btnNumbers = document.getElementById('btnNumbers');
// const inputNumbers = document.getElementById('inputNumbers');
// const parNumbers = document.getElementById('parNumbers');

// btnNumbers.onclick = () => {
//     let inputValue = inputNumbers.value;

//     let result = '';
//     result = inputValue;

//     while (inputValue > 0) {
//         console.log(`Число ${inputValue}`);

//         inputValue--;

//         result = result.toString() + '-' + inputValue.toString();
//     }

//     console.log(`Числа: ${result}`);
//     parNumbers.textContent = `Числа: ${result}`;
// };

// //3
// const btnNumbersSquare = document.getElementById('btnNumbersSquare');

// const inputNumbersNum = document.getElementById('inputNumbersNum');
// const inputNumbersSquare = document.getElementById('inputNumbersSquare');

// const parNumbersSquare = document.getElementById('parNumbersSquare');

// btnNumbersSquare.onclick = () => {
//     let number = inputNumbersNum.value;
//     let square = inputNumbersSquare.value;

//     //Самое простое решение
//     // let result = Math.pow(number, square);

//     let result = 1;
//     while (square > 0) {
//         result = result * number;

//         // console.log(square);
//         square--;
//     }

//     console.log(`Ответ: ${result}`);
//     parNumbersSquare.textContent = `Ответ: ${result}`;
// };

// //5
// const btnFuck = document.getElementById('btnFuck');
// const inputFuck = document.getElementById('inputFuck');
// const parFuck = document.getElementById('parFuck');

// btnFuck.onclick = () => {
//     let inputValue = inputFuck.value;

//     let i = 1;
//     let result = inputValue;
//     while (i < inputValue) {
//         result = result * i;

//         i++;
//     }
    
//     console.log(`Факториал числа ${inputValue} равен: ${result}`);
//     parFuck.textContent = `Факториал числа ${inputValue} равен: ${result}`;
// };

// //2.1
// const inputNumberX = document.getElementById('inputNumberX');
// const inputNumberY = document.getElementById('inputNumberY');
// const inputNumberZ = document.getElementById('inputNumberZ');

// const formulaSymb = document.querySelectorAll('#formulaSymb'); // Заменил '#formulaSymb' на '.formulaSymb' если у вас это классы
// const inputOtvet = document.getElementById('inputOtvet');
// const formulaLabel = document.getElementById('formulaLabel');
// inputOtvet.style.display = 'none';

// const parXYZ = document.getElementById('parXYZ');
// const btnXYZ = document.getElementById('btnXYZ');


// btnXYZ.onclick = () => {
//     let x = parseFloat(inputNumberX.value);
//     let y = parseFloat(inputNumberY.value);
//     let z = parseFloat(inputNumberZ.value);

//     let res = 0;

//     if (isNaN(x) || isNaN(y) || isNaN(z)) {
//         console.log('Ошибка');
//         return;
//     }

//     res = x + y * z;
//     inputOtvet.style.display = 'inline';
//     inputNumberX.style.display = 'none';
//     inputNumberY.style.display = 'none';
//     inputNumberZ.style.display = 'none';
//     for (let item of formulaSymb) {
//         item.style.display = 'none';
//     }

//     btnXYZ.textContent = 'Решил?';
//     formulaLabel.textContent = `1. А теперь решай его)`;
//     parXYZ.innerHTML = `Решай: <span style="color: red; font-weight: bold; font-size: 1.2em;">${x}</span> + <span style="color: red; font-weight: bold; font-size: 1.2em;">${y}</span> * <span style="color: red; font-weight: bold; font-size: 1.2em;">${z}</span>`;

//     if (parseFloat(inputOtvet.value) === res){
//         res = 0;
//         console.log('Решил ура');

//         inputOtvet.style.display = 'none';
//         inputOtvet.value = null;

//         inputNumberX.style.display = 'inline';
//         inputNumberY.style.display = 'inline';
//         inputNumberZ.style.display = 'inline';

//         inputNumberX.value = null;
//         inputNumberY.value = null;
//         inputNumberZ.value = null;

//         for (let item of formulaSymb) {
//             item.style.display = 'inline';
//         }
//         btnXYZ.textContent = 'Сгенерировать?';
//         formulaLabel.innerHTML = `1. Создай пример <span style="color: red; font-weight: bold; font-size: 1.2em;">x</span> + <span style="color: red; font-weight: bold; font-size: 1.2em;">y</span> * <span style="color: red; font-weight: bold; font-size: 1.2em;">z</span>`;

//         parXYZ.textContent = `Молодец, правильно решил, не хочешь ещё раз?`;
//     }
//     else {
//         console.log('Не решил '+ res);
//     }
// }

// //2.2
// const btnDivide = document.getElementById('btnDivide');
// const inputDivide = document.getElementById('inputDivide');
// const parDivide = document.getElementById('parDivide');

// btnDivide.onclick = () => {
//     let inputValue = inputDivide.value;

//     let trying = 0;
//     let res = inputValue;
//     while (res > 50) {
//         res = res / 2;
//         console.log(res);

//         trying++;
//     }
    
//     console.log(`Вы поделили число ${inputValue} ${trying} раз и получили остаток ${res}`);
//     parDivide.innerHTML = `Вы поделили число <span>${inputValue} ${trying}</span> раз и получили остаток <span>${res}</span>`;
// };

// //3.1
// const btnDivid1e = document.getElementById('btnDivide1');
// const inputDivide1 = document.getElementById('inputDivide1');
// const parDivide1 = document.getElementById('parDivide1');

// btnDivid1e.onclick = () => {
//     let inputValue = parseFloat(inputDivide1.value);

//     let result = [];
//     let res;
//     for (let i = 0; i <= 100; i++) {
//         if (i % inputValue === 0) {
//             result.push(i);
//         }
//         console.log(i);
//     }
    
//     let str_res = '';
//     for (let item of result) {
//         str_res = str_res + item + ' ';
//     }
    
//     console.log(`Числа от <span>0</span> до <span>100</span> кратные <span>${inputValue}</span>: ${str_res}`);
//     parDivide1.innerHTML = `Числа от <span>0</span> до <span>100</span> кратные <span>${inputValue}</span>: ${str_res}`;
// };

// //3.2
// const btnMinMax = document.getElementById('btnMinMax');

// const inputMin = document.getElementById('inputMin');
// const inputMax = document.getElementById('inputMax');

// const parMinMax = document.getElementById('parMinMax');

// btnMinMax.onclick = () => {
//     let min = parseFloat(inputMin.value);
//     let max = parseFloat(inputMax.value);

//     let result = [];
//     let trying = 0;
//     for (let i = min; i <= max; i++)
//      {
//         trying++;
//         if (trying == 4){
//             trying = 0;
//             result.push(i);
//         }
        
//     }

//     let str_res = '';
//     for (let item of result) {
//         str_res = str_res + item + ' ';
//     }
    
//     console.log(str_res);
//     parMinMax.innerHTML = `Каждое 4 число от <span>${min}</span> до <span>${max}</span>: ${str_res}`;
// };

// //3.3
// const btnSimple = document.getElementById('btnSimple');
// const inputSimple = document.getElementById('inputSimple');
// const parSimple = document.getElementById('parSimple');

// btnSimple.onclick = () => {
//     let inputValue = parseFloat(inputSimple.value);

//     let isPrime = true;

//     if (inputValue <= 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(inputValue); i++) {
//             if (inputValue % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(`Число ${inputValue} - простое.`);
//         parSimple.innerHTML = `Число ${inputValue} - простое.`;
//     } else {
//         console.log(`Число ${inputValue} - не простое.`);
//         parSimple.innerHTML = `Число ${inputValue} - не простое.`;
//     }
// };

// // //3
// // const btnLength = document.getElementById('btnLength');
// // const inputLength = document.getElementById('inputLength');

// // btnLength.onclick = () => {
// //     let inputValue = inputLength.value;

// //     let result = inputValue * inputValue;

// //     inputLength.value = result;
// // };

// // //4
// // const btnConv = document.getElementById('btnConv');
// // const inputConv = document.getElementById('inputConv');

// // const UNTITLED_VALUE = 0.621371;

// // btnConv.onclick = () => {
// //     let inputValue = inputConv.value;

// //     let result = inputValue * UNTITLED_VALUE;

// //     inputConv.value = result.toFixed(2);
// // };

// // //5
// // const btnPlus = document.getElementById('btnPlus');
// // const btnMinus = document.getElementById('btnMinus');
// // const btnDevide = document.getElementById('btnDevide');
// // const btnTimes = document.getElementById('btnTimes');

// // const inputCalc_1 = document.getElementById('inputCalc_1');
// // const inputCalc_2 = document.getElementById('inputCalc_2');
// // const inputResult = document.getElementById('CalcRes');

// // btnPlus.onclick = () => {
// //     let inputValue_1 = inputCalc_1.value;
// //     let inputValue_2 = inputCalc_2.value;

// //     let result = parseFloat(inputValue_1) + parseFloat(inputValue_2);

// //     inputResult.value = result.toFixed(2);
// // };

// // btnMinus.onclick = () => {
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
