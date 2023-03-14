const main = document.querySelector('main');
const sectionBg = document.querySelector('#background-color');
const sectionFontColor = document.querySelector('#font-color');
const sectionFontSize = document.querySelector('#font-size');
const sectionLineHeight = document.querySelector('#line-height');
const sectionFontFamily = document.querySelector('#font-family');

const sectionBgTitle = sectionBg.firstElementChild;
const btnWhite = sectionBgTitle.nextElementSibling;
const btnBlack = btnWhite.nextElementSibling;
const btnGreen = btnBlack.nextElementSibling;
const btnBlue = btnGreen.nextElementSibling;
const btnYellow = btnBlue.nextElementSibling;

const setBackgroundColor = () => {
    sectionBg.addEventListener('click', (event) => {
        if (event.target.innerHTML !== 'Cor de fundo') {
            main.style.backgroundColor = event.target.innerHTML;
            localStorage.setItem('background-color', event.target.innerHTML)
        };
    });
};

setBackgroundColor();

if (localStorage.getItem('background-color') != null) {
    main.style.backgroundColor = localStorage.getItem('background-color');
}

// COR DA FONTE

const setFontColor = () => {
    sectionFontColor.addEventListener('click', (event) => {
        if (event.target.innerHTML !== 'Cor da fonte') {
            main.style.color = event.target.innerHTML;
            localStorage.setItem('font-color', event.target.innerHTML)
        };
    }
    )
};

setFontColor();

if (localStorage.getItem('font-color') != null) {
    main.style.color = localStorage.getItem('font-color');
}

// TAMANHO DA FONTE

const setFontSize = () => {
    sectionFontSize.addEventListener('click', (event) => {
        if (event.target.innerHTML !== 'Tamanho da fonte') {
            main.style.fontSize = event.target.innerHTML;
            localStorage.setItem('font-size', event.target.innerHTML)
        };
    }
    )
};

setFontSize();

if (localStorage.getItem('font-size') != null) {
    main.style.fontSize = localStorage.getItem('font-size');
}

// ESPAÇAMENTO ENTRE AS LINHAS

const setLineHeight = () => {
    sectionLineHeight.addEventListener('click', (event) => {
        if (event.target.innerHTML !== 'Espaçamento entre as linhas') {
            main.style.lineHeight = event.target.innerHTML;
            localStorage.setItem('line-height', event.target.innerHTML)
        };
    }
    )
};

if (localStorage.getItem('line-height') != null) {
    main.style.lineHeight = localStorage.getItem('line-height');
}

setLineHeight();

// TIPO DE FONTE

const setFontFamily = () => {
    sectionFontFamily.addEventListener('click', (event) => {
        if (event.target.innerHTML !== 'Tipo da fonte') {
            console.log(event.target);
            main.style.fontFamily = event.target.innerHTML;
            localStorage.setItem('font-family', event.target.innerHTML)
        };
    }
    )
};

if (localStorage.getItem('font-family') != null) {
    main.style.fontFamily = localStorage.getItem('font-family');
}

setFontFamily();