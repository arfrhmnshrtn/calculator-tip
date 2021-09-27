let inputUsd = document.querySelector('.input .input-usd input');
let inputPeople = document.querySelector('#people');
let buttonTip = document.querySelectorAll('.wrapp-button-persen button');
let buttonSubmit = document.querySelector('.btn-submit button');
let jumlahTotal = document.querySelector('#jumlah-total');
let jumlahTip = document.querySelector('#jumlah-tip');
let customTip = document.querySelector('#custom-button');
let btnReset = document.querySelector('#btn-reset');

let isiUsd = 0;
let isiPeople = 0;
let isiCustom = 0;
let isiButtonTip = 0;


for (let i = 0; i < buttonTip.length; i++){
     buttonTip[i].addEventListener('click', function(){
        isiButtonTip = buttonTip[i].value;
        jumlah();
    });
}

customTip.addEventListener('input', ()=> {
    isiCustom = customTip.value;
    jumlah();
});

inputUsd.addEventListener('input', ()=> {
    isiUsd = inputUsd.value;
    jumlah();
});

inputPeople.addEventListener('input', ()=> {
    isiPeople = inputPeople.value;
    jumlah();
});

function jumlah(){
    if (inputUsd.value == '' || inputPeople.value == ''){
        return '';
    }else{
        jumlahTotal.textContent = (isiUsd / isiPeople) + (isiUsd / isiPeople) / 100 * isiCustom;
        jumlahTip.textContent = (isiUsd / isiPeople) / 100 * isiCustom;
    }

    if (customTip.value == ''){
        jumlahTotal.textContent = (isiUsd / isiPeople) + (isiUsd / isiPeople) / 100 * isiButtonTip;
        jumlahTip.textContent = (isiUsd / isiPeople) / 100 * isiButtonTip;
    }
}

btnReset.addEventListener('click', ()=> {
    jumlahTotal.textContent = 0;
    jumlahTip.textContent = 0;
});







