//1
const btnUSD = document.getElementById('btnUSD');
const inputUSD = document.getElementById('inputUSD');
const EUR_result = document.getElementById('EUR_RESULT');

const EUR_PRICE = 0.918417;
const UAN_PRICE = 7.31; 
const AZN_PRICE = 1.7;

btnUSD.onclick = () => {
    let inputValue = inputUSD.value;

    let choice = document.querySelector('input[name="q1"]:checked').value;

    // if (choice === "EUR") {
    //     let EUR = inputValue * EUR_PRICE;
    //     EUR_result.textContent = `Из ${inputValue} USD получилось ${EUR.toFixed(2)} EUR`;
    // }
    // else if (choice === "UAN") {
    //     let UAN = inputValue * UAN_PRICE;
    //     EUR_result.textContent = `Из ${inputValue} USD получилось ${UAN.toFixed(2)} UAN`;
    // }
    // else if (choice === "AZN") {
    //     let AZN = inputValue * AZN_PRICE;
    //     EUR_result.textContent = `Из ${inputValue} USD получилось ${AZN.toFixed(2)} AZN`;
    // }

    //switch

    switch (choice) {
        case "EUR":
            let EUR = inputValue * EUR_PRICE;
            EUR_result.textContent = `Из ${inputValue} USD получилось ${EUR.toFixed(2)} EUR`;
            break;
        case "UAN":
            let UAN = inputValue * UAN_PRICE;
            EUR_result.textContent = `Из ${inputValue} USD получилось ${UAN.toFixed(2)} UAN`;
            break;
        case "AZN":
            let AZN = inputValue * AZN_PRICE;
            EUR_result.textContent = `Из ${inputValue} USD получилось ${AZN.toFixed(2)} AZN`;
            break;
        default:
            console.log("Произошла какая то ошибка...");
            break;
    }
};

//2
const btnDate = document.getElementById('btnDate');
const labelDate = document.getElementById('labelDate');

const inputDayz = document.getElementById('inputDayz');
const inputMonthz = document.getElementById('inputMonthz');
const inputYearz = document.getElementById('inputYearz');

btnDate.onclick = () => {
    let day = inputDayz.value;
    let month = inputMonthz.value;
    let year = inputYearz.value;
    
    let flag = false;

    inputDayz.value = null;
    inputDayz.placeholder = day;
    inputMonthz.value = null;
    inputMonthz.placeholder = month;
    inputYearz.value = null;
    inputYearz.placeholder = year;

    if (month >= 1){
        month--;
        flag = true;
    }
    let currentDate = new Date(year, month, day);

    //Прибавляем +1 день
    currentDate.setDate(currentDate.getDate() + 1);

    let nextDay = currentDate.getDate();

    let nextMonth;
    if (flag) {
        nextMonth = currentDate.getMonth() + 1;
    }
    else {
        nextMonth = currentDate.getMonth();
    }
    
    let nextYear = currentDate.getFullYear();

    if (nextDay < 10) {
        nextDay = `0${nextDay}`;
    }
    if (nextMonth < 10) {
        nextMonth = `0${nextMonth}`;
    }

    labelDate.textContent = `Завтра будет: ${nextDay}.${nextMonth}.${nextYear} число`;
    console.log(`Завтра будет: ${nextDay}.${nextMonth}.${nextYear}`);
};