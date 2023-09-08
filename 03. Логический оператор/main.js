//1
const btnYear = document.getElementById('btnYear');
const inputYear = document.getElementById('inputYear');

btnYear.onclick = () => {
    let inputValue = parseFloat(inputYear.value);

    if (inputValue >= 0 && inputValue <= 2){
        console.log('Ребёнок');
    }
    else if (inputValue >= 2 && inputValue <= 11) {
        console.log("Ребёно-росток");
    }
    else if (inputValue >= 12 && inputValue <= 18) {
        console.log("Подросток");
    }
    else if (inputValue >= 18 && inputValue <= 60) {
        console.log("Взрослый");
    }
    else if (inputValue >= 60 && inputValue <= 1000) {
        console.log("Пенсионер");
    }
    // inputYear.value = 'Привет, ' + inputValue
};

//2
const btnSymb = document.getElementById('btnSymb');
const inputSymb = document.getElementById('inputSymb');

btnSymb.onclick = () => {
    let inputValue = parseFloat(inputSymb.value);

    switch (inputValue) {
        case 0:
            console.log(')');
            break;
        case 1:
            console.log('!');
            break;
        case 2:
            console.log('@');
            break;
        case 3:
            console.log('#');
            break;
        case 4:
            console.log('$');
            break;
        case 5:
            console.log('%');
            break;
        case 6:
            console.log('^');
            break;
        case 7:
            console.log('&');
            break;
        case 8:
            console.log('*');
            break;
        case 9:
            console.log('(');
            break;
        default:
            console.log('Одно число пж я не хочу разбирать по символам.');
            break;
    }
};

//3
const btnZxc = document.getElementById('btnZxc');
const inputZxc = document.getElementById('inputZxc');

btnZxc.onclick = () => {
    let inputValue = inputZxc.value;

    console.log(inputValue);

    let one = parseFloat(inputValue[0]);
    let two = parseFloat(inputValue[1]);
    let three = parseFloat(inputValue[2]);

    console.log(one);
    console.log(two);
    console.log(three);

    if (one == two && two == three) {
        console.log("Все три числа одинаковы.");
      } 
    else if (one === two) {
        console.log("Первое и второе число повторяются.");
      } 
    else if (one === three) {
        console.log("Первое и третье число повторяются.");
      } 
    else if (two === three) {
        console.log("Второе и третье число повторяются.");
      } 
    else {
        console.log("Нет повторяющихся чисел.");
    }
};

//4
function years(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year + " - високосный год.");
    } else {
        console.log(year + " - не високосный год.");
    }
}
 console.log(years(2004));
 console.log(years(2005));
 console.log(years(2006));
 console.log(years(2007));
 console.log(years(2008));
