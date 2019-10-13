//-------------------------------------Filter op 'alles'.

//Variabele voor de buttons om te filteren
var buttonAlles = document.querySelector('.button-alles');
var buttonMbo = document.querySelector('.button-mbo');
var buttonHavo = document.querySelector('.button-havo');
var buttonVwo = document.querySelector('.button-vwo');
var buttonAnders = document.querySelector('.button-anders');

//Variabelen opleidingen
var alles = document.querySelectorAll('.alles')
var mbo = document.querySelectorAll('.mbo');
var havo = document.querySelectorAll('.havo');
var vwo = document.querySelectorAll('.vwo');
var anders = document.querySelectorAll('.anders');


//-------------------------------------Filter op 'mbo'.

//Verberg alle andere categorieën
function hideForMbo() {
    for (var hideMbo of mbo) {
        hideMbo.classList.remove('hide-mbo');
    }

    for (var hideHavo of havo) {
        hideHavo.classList.add('hide-havo');
    }

    for (var hideVwo of vwo) {
        hideVwo.classList.add('hide-vwo');
    }

    for (var hideAnders of anders) {
        hideAnders.classList.add('hide-anders');
    }
}

//Mbo button
buttonMbo.addEventListener('click', hideForMbo);


//-------------------------------------Filter op 'havo'.

//Verberg alle andere categorieën
function hideForHavo() {
    for (var showHavo of havo) {
        showHavo.classList.remove('hide-havo');
    }

    for (var hideMbo of mbo) {
        hideMbo.classList.add('hide-mbo');
    }

    for (var hideVwo of vwo) {
        hideVwo.classList.add('hide-vwo');
    }

    for (var hideAnders of anders) {
        hideAnders.classList.add('hide-anders');
    }
}

//Havo button
buttonHavo.addEventListener('click', hideForHavo);


//-------------------------------------Filter op 'vwo'.

//Verberg alle andere categorieën
function hideForVwo() {
    for (var showVwo of vwo) {
        showVwo.classList.remove('hide-vwo');
    }

    for (var hideMbo of mbo) {
        hideMbo.classList.add('hide-mbo');
    }

    for (var hideHavo of havo) {
        hideHavo.classList.add('hide-havo');
    }

    for (var hideAnders of anders) {
        hideAnders.classList.add('hide-anders');
    }
}

//Vwo button
buttonVwo.addEventListener('click', hideForVwo);

//-------------------------------------Filter op 'anders'.

//Verberg alle andere categorieën
function hideForAnders() {
    for (var showAnders of anders) {
        showAnders.classList.remove('hide-anders');
    }

    for (var hideMbo of mbo) {
        hideMbo.classList.add('hide-mbo');
    }

    for (var hideHavo of havo) {
        hideHavo.classList.add('hide-havo');
    }

    for (var hideVwo of vwo) {
        hideVwo.classList.add('hide-vwo');
    }
}

//Anders button
buttonAnders.addEventListener('click', hideForAnders);
