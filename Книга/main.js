const start_1 = document.getElementById(`1`);
const start_2 = document.getElementById(`2`);
const start_3 = document.getElementById(`3`);
const start_4 = document.getElementById(`4`);
const start_5 = document.getElementById(`5`);

const input = document.getElementById('input');

function string_input(str) {
    let char = 0;
    let str_new = '';
    let func = setInterval(IntervalFunc, 10)
    function IntervalFunc() {
        str_new = str_new + str[char] + ''
        console.log(str_new);
        input.textContent = str_new
        char++;
        if (char === str.length) clearInterval(func);
    }
}

start_1.onclick = () => {
    let str = 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.'
    string_input(str);
}

start_2.onclick = () => {
    
}

function timer(sec) {
    while (sec > 0) {
        millis = sec * 1000
        setTimeout('console.log(`-Sec`)', millis);
        sec--;
    }
}
// timer(5)


var id = setInterval(IntervalFunc,100);
var counter = 0;
function IntervalFunc(){
    if(counter == 10){
        clearInterval(id);
        return;
    }
    counter++;
    console.log("Прошла милис");
}