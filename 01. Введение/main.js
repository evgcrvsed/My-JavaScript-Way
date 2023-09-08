//1
const btnName = document.getElementById('btnName');
const inputName = document.getElementById('inputName');

btnName.onclick = () => {
    let inputValue = inputName.value;
    if (inputValue == ''){
        return
    }

    inputName.value = 'Привет, ' + inputValue
    console.log('Привет, ' + inputValue);
};

//2
const YEAR_NOW = 2024
const btnYear = document.getElementById('btnYear');
const inputYear = document.getElementById('inputYear');

btnYear.onclick = () => {
    let inputValue = inputYear.value;
    
    if (!isNaN(inputValue)) {
        let yourYear = YEAR_NOW - inputValue
        inputYear.value = 'Тебе сейчас примерно ' + yourYear + ' лет'
        console.log('Тебе сейчас примерно ' + yourYear + ' лет');
    } else {
        inputYear.value = 'Введено не число!'
        console.log("Введено не число!");
    }
};

//3
const btnSquare = document.getElementById('btnSquare');
const inputSquare = document.getElementById('inputSquare');

btnSquare.onclick = () => {
    let inputValue = inputSquare.value;
    let P = 4 * inputValue
    inputSquare.value = P;
    console.log('Периметр квадрата: ' + P);
};

//4
const π = 3.14;

const btnRad = document.getElementById('btnRad');
const inputRad = document.getElementById('inputRad');

btnRad.onclick = () => {
    let r = inputRad.value;
    let P = 2 * π * r
    inputRad.value = P;
    console.log('Периметр квадрата: ' + P);
};

//5
const btnSpeed = document.getElementById('btnSpeed');
const inputSpeed = document.getElementById('inputSpeed');

btnSpeed.onclick = () => {
    let value = inputSpeed.value;
    let numbers = value.split(" ");

    let distance = parseInt(numbers[0]);
    let time = parseInt(numbers[1]);

    let speed = distance / time;
    inputSpeed.value = 'Нужно двигаться со скоростью ' + speed + 'км/ч';
    console.log(speed);
};

//6
const EXCHANGE_RATE = 0.91782;

const btnDollars = document.getElementById('btnDollars');
const inputDollars = document.getElementById('inputDollars');

btnDollars.onclick = () => {
    let dollars = inputDollars.value;
    let euros = dollars * EXCHANGE_RATE;

    if (isNaN(dollars)) {
        inputDollars.value ='Введите число..'
        return
    }
    let formattedAmountInEuros = euros.toFixed(2);

    inputDollars.value = 'Вы получите ' + formattedAmountInEuros + ' евро!';
    console.log('Вы получите ' + formattedAmountInEuros + ' евро!');
};

//7
const fileSizeInMB = 820;

const btnMB = document.getElementById('btnMB');
const inputMB = document.getElementById('inputMB');

btnMB.onclick = () => {
    let flashDriveSizeInGB = inputMB.value;
    
    if (isNaN(flashDriveSizeInGB)) {
        inputMB.value ='Введите число..'
        return
    }
    //Перевод размера файла в Гб для удобства сравнения с объемом флешки
    let fileSizeInGB = fileSizeInMB / 1024;
    //Округляем
    let numberOfFiles = Math.floor(flashDriveSizeInGB / fileSizeInGB);

    inputMB.value = `На флешку объемом ${flashDriveSizeInGB} Гб поместится ${numberOfFiles} файлов`;
    console.log(`На флешку объемом ${flashDriveSizeInGB} Гб поместится примерно ${numberOfFiles} файлов размером ${fileSizeInMB} Мб.`);
};

// 8
const btnChoco = document.getElementById('btnChoco');
const inputChoco = document.getElementById('inputChoco');

btnChoco.onclick = () => {
    let value = inputChoco.value;
    let items = value.split(" ");

    let price = parseInt(items[0]);
    let money = parseInt(items[1]);

    const chocolatesToBuy = Math.floor(money / price);
    const remainingMoney = money - (chocolatesToBuy * price);

    inputChoco.value = `Вы сможете купить ${chocolatesToBuy} шоколадок и у вас останется ${remainingMoney} рублей.`;
    console.log(`Вы сможете купить ${chocolatesToBuy} шоколадок и у вас останется ${remainingMoney} рублей.`);
};

// 9
const btnRev = document.getElementById('btnRev');
const inputRev = document.getElementById('inputRev');
//Делением сложнее...
btnRev.onclick = () => {
    let value = inputRev.value;
    let rev = value.split('').reverse().join('');

    inputRev.value = rev;
    console.log(rev);
};

// 10
const btnEven = document.getElementById('btnEven');
const inputEven = document.getElementById('inputEven');
btnEven.onclick = () => {
    let value = inputEven.value;

    function isEven(number) {
        return number % 2 === 0;
    }
    
    let state = isEven(value)

    inputEven.value = state;
    console.log(state);
};