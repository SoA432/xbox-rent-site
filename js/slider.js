var slider = document.getElementsByClassName('slider');
var nextSlide = document.getElementsByClassName('next-slide');
var prevSlide = document.getElementsByClassName('prev-slide');

slider[0].style.background = window.catalog[9].backgroundSlide;
slider[0].data = window.catalog[9].data;

nextSlide[0].addEventListener('click', showNextSlide);
prevSlide[0].addEventListener('click', showPrevSlide);

var timer = setInterval(randomSlide, 5000);


// console.log(window.catalog[0].description == 'Favorite');

function showNextSlide(){
		if (slider[0].data < window.catalog.length-1)
		{
			slider[0].style.background = window.catalog[++slider[0].data].backgroundSlide;
		}
		else
		{
			slider[0].data = 0;
			slider[0].style.background = window.catalog[slider[0].data].backgroundSlide;
		}
		clearInterval(timer);
		timer = setInterval(randomSlide, 5000);
}
		
function showPrevSlide(){
		if (slider[0].data > 0)
		{
			slider[0].style.background = window.catalog[--slider[0].data].backgroundSlide;
		}
		else
		{
			slider[0].data = window.catalog.length-1;
			slider[0].style.background = window.catalog[slider[0].data].backgroundSlide;
		}
		clearInterval(timer);
		timer = setInterval(randomSlide, 5000);
}

function randomSlide(min = 0, max = window.catalog.length-1){
	var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    if (window.catalog[rand].description == 'Favorite') {
	    slider[0].data = window.catalog[rand].data;
	    slider[0].style.background = window.catalog[rand].backgroundSlide;
	    clearInterval(timer);
	    timer = setInterval(randomSlide, 5000);
    }
    else
    {
    	randomSlide();
    }
}