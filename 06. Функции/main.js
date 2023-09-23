//1
const btnContrast = document.getElementById('btnContrast');
const inputContrast_1 = document.getElementById('inputContrast_1');
const inputContrast_2 = document.getElementById('inputContrast_2');
const parContrast = document.getElementById('parContrast');

btnContrast.onclick = () => {
    let inputValue_1 = parseFloat(inputContrast_1.value);
    let inputValue_2 = parseFloat(inputContrast_2.value);

    //Функция принимающая два аргумента, возвращающая результат
    function Contrast(value_1, value_2) {
        if (value_1 < value_2) {
            return -1
        }
        else if (value_1 > value_2) {
            return 1
        }
        else {
            return 0
        }
    }
    
    let result = Contrast(inputValue_1, inputValue_2);
    
    switch(result) {
        case -1:
            parContrast.innerHTML = `<span>${result}</span> - Первое число ${inputValue_1} меньше чем ${inputValue_2}`
            console.log(`<span>${result}</span> - Первое число ${inputValue_1} меньше чем ${inputValue_2}`)
            break
        case 1:
            parContrast.innerHTML = `<span>${result}</span> - Первое число ${inputValue_1} больше чем ${inputValue_2}`
            console.log(`<span>${result}</span> - Первое число ${inputValue_1} меньше чем ${inputValue_2}`)
            break
        case 0:
            parContrast.innerHTML = `<span>${result}</span> - Числа равны`
            console.log(`<span>${result}</span> - Числа равны`)
            break
    }
};

//2
const btnFactorial = document.getElementById('btnFactorial');
const inputFactorial = document.getElementById('inputFactorial');
const parFactorial = document.getElementById('parFactorial');

btnFactorial.onclick = () => {
    let inputValue = parseFloat(inputFactorial.value);

    function factorial(value) {
        let i = 1;
        let result = inputValue;
        while (i < inputValue) {
            result = result * i;

            i++;
        }
        return result;
    }

    let result = factorial(inputValue);

    console.log(`Факториал числа ${inputValue} равен: ${result}`);
    parFactorial.innerHTML = `Факториал числа ${inputValue} равен: ${result}`;
}

//3
const btnNumbers = document.getElementById('btnNumbers');
const inputNumbers_1 = document.getElementById('inputNumbers_1');
const inputNumbers_2 = document.getElementById('inputNumbers_2');
const inputNumbers_3 = document.getElementById('inputNumbers_3');
const parNumbers = document.getElementById('parNumbers');

btnNumbers.onclick = () => {
    let number_1 = inputNumbers_1.value;
    let number_2 = inputNumbers_2.value;
    let number_3 = inputNumbers_3.value;

    function Numbers(number_1, number_2, number_3) {
        let result = number_1 + number_2 + number_3;

        return result;
    }
    let result = Numbers(number_1, number_2, number_3);
    console.log(`Числа <span>${number_1}</span>, <span>${number_2}</span>, <span>${number_3}</span> образуют число: <span>${result}</span>`);
    parNumbers.innerHTML = `Числа <span>${number_1}</span>, <span>${number_2}</span>, <span>${number_3}</span> образуют число: <span>${result}</span>`;
}

//4
const btnSquare = document.getElementById('btnSquare');
const inputSquare_1 = document.getElementById('inputSquare_1');
const inputSquare_2 = document.getElementById('inputSquare_2');
const parSquare = document.getElementById('parSquare');

btnSquare.onclick = () => {
    let lenth = parseFloat(inputSquare_1.value);
    let width = parseFloat(inputSquare_2.value);

    if (isNaN(lenth)) return;

    function Square(lenth, width) {
        if (isNaN(width)) {
            return 'Вы указали только длинну, площадь квадрата:' + (lenth * lenth)
        }
        else {
            return `Площадь прямоугольника с длинной ${lenth} и шириной ${width}: ` + (lenth * width);
        }
        
    }

    let result = Square(lenth, width);

    console.log(result);
    parSquare.innerHTML = result;
}

//5
const btnPerfectly = document.getElementById('btnPerfectly');
const inputPerfectly = document.getElementById('inputPerfectly');
const parPerfectly = document.getElementById('parPerfectly');

btnPerfectly.onclick = () => {
    let number = parseFloat(inputPerfectly.value);

    if (isNaN(number)) return;

    function Perfectly(number) {
        if (number <= 1) {
            return `Число не простое.`
        } 
        else {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return `Число не простое.`
                }   
            }
            return 'Число простое.'
        }
    }

    let result = Perfectly(number);

    console.log(result);
    parPerfectly.innerHTML = result;
}

//6
const btnPerfectlyMinMax = document.getElementById('btnPerfectlyMinMax');
const inputPerfectlyMin = document.getElementById('inputPerfectlyMin');
const inputPerfectlyMax = document.getElementById('inputPerfectlyMax');
const parPerfectlyMinMax = document.getElementById('parPerfectlyMinMax');

btnPerfectlyMinMax.onclick = () => {
    let min = parseFloat(inputPerfectlyMin.value);
    let max = parseFloat(inputPerfectlyMax.value);

    if (isNaN(min) || isNaN(max)) return;

    function Perfectly(number) {
        if (number <= 1) {
            return `Число не простое.`
        } 
        else {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return `Число не простое.`
                }   
            }
            res.push(number);
            return 'Число простое.'
        }
    }

    let res = [];
    while (min <= max) {
        Perfectly(min);
        min++;
    }
    
    let result = '';
    for (let item in res) {
        result = result + res[item] + ' '
    }

    console.log(result);
    parPerfectlyMinMax.innerHTML = result;
}

//7
const btnTime = document.getElementById('btnTime');
const inputTime_h = document.getElementById('inputTime_h');
const inputTime_m = document.getElementById('inputTime_m');
const inputTime_s = document.getElementById('inputTime_s');
const parTime = document.getElementById('parTime');

btnTime.onclick = () => {
    h = parseFloat(inputTime_h.value);
    m = parseFloat(inputTime_m.value);
    s = parseFloat(inputTime_s.value);

    if (isNaN(h)) h = 0;
    if (isNaN(m)) m = 0;
    if (isNaN(s)) s = 0;

    function Time(h, m, s) {
        
        if (s > 60) {
            while (s > 60) {
                m++;
                s-= 60;
            }
        }

        if (m > 60) {
            while (m > 60) {
                h++;
                m-= 60;
            }
        }

        return `${h}h:${m}m:${s}s`;

    }

    let result = Time(h, m, s);

    console.log(result);
    parTime.innerHTML = result;
}

//8
const btnSec = document.getElementById('btnSec');
const inputSec_h = document.getElementById('inputSec_h');
const inputSec_m = document.getElementById('inputSec_m');
const inputSec_s = document.getElementById('inputSec_s');
const parSec = document.getElementById('parSec');

btnSec.onclick = () => {
    h = parseFloat(inputSec_h.value);
    m = parseFloat(inputSec_m.value);
    s = parseFloat(inputSec_s.value);

    if (isNaN(h)) h = 0;
    if (isNaN(m)) m = 0;
    if (isNaN(s)) s = 0;

    function Time(h, m, s) {
        if (h > 0) {
            m += h * 60;
        }
        if (m > 0) {
            s += m * 60;
        }
        return s;
    }

    let result = Time(h, m, s);

    console.log(result);
    parSec.innerHTML = result;
}

//9
const btnHours = document.getElementById('btnHours');
const inputHours_s = document.getElementById('inputHours_s');
const parHours = document.getElementById('parSec');

btnHours.onclick = () => {
    s = parseFloat(inputHours_s.value);

    if (isNaN(s)) s = 0;

    function Time(s) {
        while (s > 0) {
            

            s--;
        }

        return `${h}h:${m}m:${s}s`;
    }

    let result = Time(s);

    console.log(result);
    parHours.innerHTML = result;
}