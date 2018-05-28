var main = document.getElementsByTagName('main');
for (var i = 0; i <= window.catalog.length-1; i++) {
	main[0].innerHTML+= '<a href="item.html"><div class="item"><div class="elem"></div><div class="title"></div><div>Цена в неделю: <span class="pricePerWeek"></span></div><div>Цена в месяц: <span class="pricePerMonth"></span></div></div></a>';
}