const otvets = {
    answ_1: 'a',
    answ_2: 'c',
    answ_3: 'b',
    answ_4: 'c',
    answ_5: 'b'
}

const btn = document.getElementById('button');
const score_text = document.getElementById('score');

btn.onclick = () => {
    let user_input = {};
    let color_yellow = {};

    let all_answs = document.querySelectorAll('.answ');
    // console.log(all_answs); // Все дивы

    for (let i = 0; i < all_answs.length; i++) {

        if (document.querySelector(`input[name="q${i + 1}"]:checked`) !== null) {
            // console.log(`В ${j + 1} ответ `);
            user_input[`answ_${i + 1}`] = document.querySelector(`input[name="q${i + 1}"]:checked`).value;
            color_yellow[`${i + 1}`] = 'transparent';
        }
        else {
            color_yellow[`${i + 1}`] = 'yellow';
        }   
    }

    //Красим не выбранные ответы
    let yellow = 0;
    let stop_flag = false;
    for (let key in color_yellow) {
        if (color_yellow[key] == 'yellow') {
            all_answs[yellow].style.background = 'yellow';
            all_answs[yellow].style.color ='black';
            stop_flag = true;
        }
        else {
            all_answs[yellow].style.background = 'transparent';
            all_answs[yellow].style.color = 'black';
        }
        yellow++;
    }

    if (stop_flag) {
        score_text.textContent = `Пройдите тест до конца!`;
        return;
    }

    //Сравниваем ответы
    let result = {};
    let score = 0;
    let i_1 = 0;
    
    for (let key in user_input) {
        // console.log(`${user_input[key]} = ${otvets[key]}`);
        if (user_input[key] == otvets[key]) {
            score += 20;

            let fake_1 = all_answs[i_1].querySelector(`input[value="a"]`);
            let textElement_1 = fake_1.nextElementSibling;
            textElement_1.style.color = 'black';

            let fake_2 = all_answs[i_1].querySelector(`input[value="b"]`);
            let textElement_2 = fake_2.nextElementSibling;
            textElement_2.style.color = 'black';

            let fake_3 = all_answs[i_1].querySelector(`input[value="c"]`);
            let textElement_3 = fake_3.nextElementSibling;
            textElement_3.style.color = 'black';
            
            let right_otv = all_answs[i_1].querySelector(`input[value="${otvets[key]}"]`);
            let textElement = right_otv.nextElementSibling;
            textElement.style.color = 'green';
        }
        else {
            all_answs[i_1].style.color ='red';
        }
        i_1++;
    }

    score_text.textContent = `Вы прошли тест на ${score + '%'}`;
}
