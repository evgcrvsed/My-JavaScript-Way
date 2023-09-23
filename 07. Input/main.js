let card_number = document.getElementById('card_number');
let card_name = document.getElementById('card_name');
let card_1 = document.getElementById(`card_1`);
let card_2 = document.getElementById(`card_2`);
let card_3 = document.getElementById(`card_3`);





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // включительно min и max
}

//Генерируем массив
let array = [];
length = 100;
let min = 0
for (let i = 0; i < length; i++) {
    array.push(getRandomInt(min, 100));
}

//Уникальность символов
let temp_array = [];
for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let add_flag = true;
    for (let j = 0; j < temp_array.length; j++) {
        if (number === temp_array[j]) {
            add_flag = false;
        }
    }
    if (add_flag) {
        temp_array.push(number)
        add_flag = true;
    }
}

console.log('Основной');
console.log(array);

console.log('Уникальный');
console.log(temp_array);

//В порядке возрастания
result = [];
while (temp_array.length > 0) {
    let number_min = Math.min(...temp_array);
    temp_array.splice(temp_array.indexOf(number_min), 1);
    result.push(number_min)
}

console.log('Возрастание');
console.log(result);