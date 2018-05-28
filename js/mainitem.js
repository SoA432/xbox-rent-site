var storage = window.sessionStorage;
var slider = document.getElementsByClassName('slider');
var item = document.getElementsByClassName('item');
var elem = document.getElementsByClassName('elem');
var title = document.getElementsByClassName('title');
var pricePerWeek = document.getElementsByClassName('pricePerWeek');
var pricePerMonth = document.getElementsByClassName('pricePerMonth');

slider[0].addEventListener('click', addToStorage);

for (var i = 0; i <= window.catalog.length-1; i++) {
	item[i].data = window.catalog[i].data;
	console.log(item[i].data);
	item[i].addEventListener('click', addToStorage);
}

function addToStorage(){
	storage.title = window.catalog[this.data].title;
	storage.pricePerWeek = window.catalog[this.data].pricePerWeek;
	storage.pricePerMonth = window.catalog[this.data].pricePerMonth;
	storage.data = window.catalog[this.data].data;
	storage.background = window.catalog[this.data].background;
	storage.description = window.catalog[this.data].description;
	console.log(storage);
}

console.log(storage);

for (var i = 0; i <= elem.length-1; i++) {
	elem[i].style.background = window.catalog[i].background;
	title[i].innerHTML = window.catalog[i].title;
	pricePerWeek[i].innerHTML = window.catalog[i].pricePerWeek + " $ / " + (parseFloat(window.catalog[i].pricePerWeek)*25).toFixed(2) + ' грн';
	pricePerMonth[i].innerHTML = window.catalog[i].pricePerMonth + " $ / " + (parseFloat(window.catalog[i].pricePerMonth)*25).toFixed(2) + ' грн';
}