

let array = [];
let array_2 = [];
let LENGTH = 10;

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

function generate_array() {

}

const labelMassiv_1 = document.getElementById('massiv_1');
const gen_array_1 = document.getElementById('gen_array_1');
gen_array_1.onclick = () => {
    array = [];
    length = LENGTH;
    while (length > 0) {
        let random = Math.floor(Math.random() * 31);
        array.push(random);
        length--;
    }
    console.log(array);
    string_input(array.toString(), labelMassiv_1);
}

const labelMassiv_2 = document.getElementById('massiv_2');
const gen_array_2 = document.getElementById('gen_array_2');
gen_array_2.onclick = () => {
    array_2 = [];
    length = LENGTH;
    while (length > 0) {
        let random = Math.floor(Math.random() * 31);
        array_2.push(random);
        length--;
    }
    console.log(array_2);
    string_input(array_2.toString(), labelMassiv_2);
}

//1
const btnAlert = document.getElementById('btnAlert');
btnAlert.onclick = () => {
    alert(array);
}

//2
const btnEven = document.getElementById('btnEven');
const labelEven = document.getElementById(`labelEven`);
btnEven.onclick = () => {
    array_even = [];
    for (i in array) {
        if (!(array[i] % 2)) {
            array_even.push(array[i])
        }
    }
    labelEven.innerHTML = array_even.toString();
    console.log(array_even);
}

//3
const btnSumm = document.getElementById('btnSumm')
const labelSumm = document.getElementById('labelSumm')
btnSumm.onclick = () => {
    let result = 0;
    for (let i in array) {
        result += array[i];
    }
    labelSumm.innerHTML = result;
}

//4
const btnMax = document.getElementById('btnMax')
const labelMax = document.getElementById('labelMax')
btnMax.onclick = () => {
    labelMax.innerHTML = Math.max(...array);
}

//5
const btnAddIndex = document.getElementById('btnAddIndex')
const inputAddIndex_index = document.getElementById(`inputAddIndex_index`);
const inputAddIndex_value = document.getElementById(`inputAddIndex_value`)
const labelAddIndex = document.getElementById('labelAddIndex')
btnAddIndex.onclick = () => {
    let index = parseFloat(inputAddIndex_index.value);
    let value = inputAddIndex_value.value;
    
    let array_new = array.slice();
    array_new.splice(index, 0, value);

    console.log(array_new)
}

//6
const btnDelIndex = document.getElementById('btnDelIndex')
const labelDelIndex = document.getElementById('labelMax')
const inputDelIndex = document.getElementById(`inputDelIndex`);
btnDelIndex.onclick = () => {
    let index = parseFloat(inputDelIndex.value);

    let array_new = array.slice();
    array_new.splice(index, 1);

    console.log(array_new)
}

//NEWNEWNEWNEWNEWNENWENWENWENWENWNEWNENWENWE
//1
//Сортировка по возрастанию
function compareFunc(a,b){
    if( a > b ) return 1;
    else if ( b > a ) return -1;
    else return 0;
}


const btnUnique = document.getElementById('btnUnique')
const labelUnique = document.getElementById('labelUnique')
btnUnique.onclick = () => {
    if (array.length <= 0 || array_2.length <= 0) return;

    let temp = array.slice();

    for (let i in array_2) {
        temp.push(array_2[i]);
    }
    temp.sort(compareFunc);

    let array_unique = [];
    while (temp.length > 0) {
        let value = temp[0];
        temp.splice(0, 1)
        let add_flag = true;
        for (let j in array_unique) {
            if (array_unique[j] === value) add_flag = false;
        }
        if (add_flag) array_unique.push(value); add_flag = true;
    }
    string_input(array_unique.toString(), labelUnique);
    console.log(array_unique)
}

//2
const btnNotUnique = document.getElementById('btnNotUnique')
const labelNotUnique = document.getElementById('labelNotUnique')
btnNotUnique.onclick = () => {
    if (array.length <= 0 || array_2.length <= 0) return;

    let temp = array.slice();

    for (let i in array_2) {
        temp.push(array_2[i]);
    }
    temp.sort(compareFunc);

    console.log(temp)

    let array_doubles = [];

    while (temp.length > 0) {
        let value = temp[0];
        temp.splice(0, 1)
        let add_flag = false;

        for (let i in temp) {
            if (temp[i] === value) {
                add_flag = true;
                temp.splice(i, 1);
            }
        }
        
        if (add_flag) {
            add_flag = false;
            array_doubles.push(value);
        }
    }
    string_input(array_doubles.toString(), labelNotUnique)
    console.log(array_doubles)
}

//3
const btnOneUnique = document.getElementById('btnOneUnique')
const labelOneUnique = document.getElementById('labelOneUnique')
btnOneUnique.onclick = () => {
    if (array.length <= 0 || array_2.length <= 0) return;
    let array_1 = array.slice();
    let arry_2 = array_2.slice();

    let result = [];

    while (array_1.length > 0) {

        let value = array_1[0]
        array_1.splice(0, 1);
        let add_flag = true;

        for (let index in arry_2) {
            if (arry_2[index] === value) {
                add_flag = false;
            }
        }

        if (add_flag) {
            result.push(value);
        } 
    }
    string_input(result.toString(), labelOneUnique);
    console.log(result);
}

//NEWNEWNEWNEWNEWNEWNEWNEWNWE
//1
const array_fruits = [
    'яблоко',
    'банан',
    'апельсин',
    'груша',
    'клубника',
    'манго',
    'вишня',
    'ананас',
    'киви',
    'слива',
    'персик',
    'грейпфрут',
    'лайм',
    'кокос',
    'малина',
    'голубика',
    'черника',
    'арбуз',
    'дыня',
    'помело',
    'лимон',
    'красная смородина',
    'черная смородина',
    'крыжовник',
    'фейхоа',
    'гуава',
    'папайя',
    'персиммон',
    'гранат',
    'шелковица',
    'дуриан',
    'фрукт дракона',
    'мангостин',
    'клементин',
    'мушмула',
    'фрукт пассифлоры',
    'личи',
    'гуарана',
    'камбоджанский фрукт',
    'черимойя',
    'канталуп',
    'маракуйя',
    'тамаринд',
    'курага',
    'фисташка',
    'каштан',
    'кешью',
    'фундук',
    'арахис',
    'фефелия',
    'салак',
    'земляника',
    'цитрон',
    'мандарин',
    'бергамот',
    'шиповник',
    'калина',
    'брусника',
    'облепиха',
    'годжи',
    'кактус',
    'кизил',
    'жимолость',
    'боярышник',
    'арония',
    'шантарель',
    'мацутаке',
    'траметес',
    'грифола',
    'шампиньон',
    'подосиновик',
    'груздь',
    'лесной орех',
    'желудь',
    'кедровый орех',
    'кешуань',
    'макадамия',
    'пекан',
    'вальдорфская салатовая груша',
    'марула',
    'желтый питайя',
    'грецкий орех',
    'хурма',
    'нектарин',
    'какао',
    'джекфрут',
    'памело',
    'китайская груша',
    'пассифлора',
    'инжир',
    'гранадилла',
    'питомник',
    'бамбуковый молодой',
    'тамаринд',
    'фига',
    'смоква',
    'гуарана',
    'гранатовое дерево',
    'каштан',
    'мак',
    'каркаде',
    'гибискус',
    'барбадосская вишня',
    'кешью',
    'африканский огурец',
    'салак',
    'саподилла',
    'дуку',
    'кукуи',
    'каламондин',
    'мандарин каламондин',
    'циклантера',
    'петуния',
    'каркаде'
  ];
  
const btnWriteFruits = document.getElementById('btnWriteFruits');
const labelWriteFruits = document.getElementById('labelWriteFruits');
btnWriteFruits.onclick = () => {
    array_fruits.sort();
    let newList = '<ul>';
    for (const fruit of array_fruits) {
        newList += `<li>${fruit}</li>`;
    }
    newList += '</ul>';

    string_input(newList, labelWriteFruits);
}

//2
const btnFindFruits = document.getElementById('btnFindFruits');
const labelFindFruits = document.getElementById('labelFindFruits');
const inputFindFruits = document.getElementById('inputFindFruits');
btnFindFruits.onclick = () => {
    let search_str = inputFindFruits.value;

    let search_str_new = search_str.toLowerCase();
    
    let find_flag = false;
    for (let index in array_fruits) {
        if (array_fruits[index] === search_str_new) {
            find_flag = true;
        }
    }
    if (find_flag) {
        string_input(`В массиве найден фрукт ${search_str} (${search_str_new}).`, labelFindFruits)
    } 
    else {
        string_input(`Фрукт ${search_str} не найден. -1`, labelFindFruits);
    }
}