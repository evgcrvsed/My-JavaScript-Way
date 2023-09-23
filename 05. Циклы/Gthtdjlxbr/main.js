//1
const btnTranslator = document.getElementById('btnTranslator');
const inputTranslator = document.getElementById('inputTranslator');
const parTranslator = document.getElementById('parTranslator');

function getChar(char) {
    switch (char) {
        case 'Й':
            return 'I';
        case 'Й':
            return 'I';
        case 'Й':
            return 'I';
        case 'Й':
            return 'I';
        case 'Й':
            return 'I';
        case 'Й':
            return 'I';


    }
}
const rus = {
    й: 'q',
    ц: 'w',
    у: 'e',
    к: 'r',
    е: 't',
    н: 'y',
    г: 'u',
    ш: 'i',
    щ: 'o',
    з: 'p',
    х: '[',
    ъ: ']',

    ф: 'a',
    ы: 's',
    в: 'd',
    а: 'f',
    п: 'g',
    р: 'h',
    о: 'j',
    л: 'k',
    д: 'l',
    ж: ';',
    э: `'`,

    я: 'z',
    ч: 'x',
    с: 'c',
    м: 'v',
    и: 'b',
    т: 'n',
    ь: 'm',
    б: ',',
    ю: '.',

    ё: '`'
}

btnTranslator.onclick = () => {
    let text = [];
    text = (inputTranslator.value).split('');
    
    for (let i = 0; i < text.length; i++) {

        if (text[i] === ' '){
            text[i] = ' ';
        }

        //Проверка на большой символ
        if (text[i] === text[i].toUpperCase() && text[i] !== ' ') {
            // console.log('Большой символ');

            let char_up_down = text[i].toLowerCase();
            text[i] = char_up_down
            
            text[i] = rus[text[i]];
            char_up_down = text[i].toUpperCase();

            text[i] = char_up_down;

        }
        else if (text[i] === text[i].toLowerCase()) {
            text[i] = rus[text[i]];
        }
    }
    let result = '';
        for (let item in text){
            if (text[item] !== undefined){
                result = result + text[item];
            }
            else {
                result = result + ' ';
            }
        }

    console.log(result);
    parTranslator.innerHTML = result;
};

