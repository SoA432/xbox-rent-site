var storage = window.sessionStorage;
var item = document.getElementsByClassName('item');
item[0].style.background = storage.background;

title = document.getElementsByClassName('title');
title[0].innerHTML = storage.title;

pricePerWeek = document.getElementsByClassName('pricePerWeek');
pricePerWeek[0].innerHTML = 'Цена за неделю: ' + storage.pricePerWeek + ' $ / ' + (parseFloat(storage.pricePerWeek)*25).toFixed(2) + ' грн';

pricePerMonth = document.getElementsByClassName('pricePerMonth');
pricePerMonth[0].innerHTML = 'Цена за месяц: ' + storage.pricePerMonth + ' $ / ' + (parseFloat(storage.pricePerMonth)*25).toFixed(2) + ' грн';

// description = document.getElementsByClassName('description');
// description[0].innerHTML = 'Описание: </br>' + storage.description;

gameTitle = document.getElementById('gameTitle');
gameTitle.value = storage.title;

gamePricePerWeek = document.getElementById('gamePricePerWeek');
gamePricePerWeek.value = storage.pricePerWeek;

gamePricePerMonth = document.getElementById('gamePricePerMonth');
gamePricePerMonth.value = storage.pricePerMonth;

console.log(gameTitle.value);
console.log(gamePricePerWeek.value);
console.log(gamePricePerMonth.value);