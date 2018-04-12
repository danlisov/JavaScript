window.addEventListener('DOMContentLoaded', () => {

	let tab = document.getElementsByClassName('info-header-tab'),
					tabContent = document.getElementsByClassName('info-tabcontent'),
					info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a)=> {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	let showTabContent = (b)=> {
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}


	info.addEventListener('click', (event)=> {
		let target = event.target;
		if (target.className == "info-header-tab"){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});




//Timer 

let deadline = '2018-05-8';

let getTimeRemaining = (endtime)=> {
	let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
};

let setClock = (id, endtime)=>{

	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

	let updateClock = ()=> {
		let t = getTimeRemaining(endtime);
		hours.innerHTML = t.hours;
		minutes.innerHTML = t.minutes;
		seconds.innerHTML = t.seconds;

		if (t.total <= 0){
			clearInterval(timeInterval);
		}
	};

	updateClock();

	let timeInterval = setInterval(updateClock, 1000);
};

setClock("timer", deadline);


//Modal 

let more = document.querySelector(".more"),
	description = document.querySelector(".description"),
	description_btn = document.querySelector(".description-btn"),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

	more.addEventListener('click', function (){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	description.addEventListener('click', (event)=>{
		if (event.target && event.target.matches('div.description-btn')){
			description_btn.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		};
	});

	close.addEventListener('click', ()=>{
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		description.classList.remove('more-splash');
		document.body.style.overflow = '';
	});


//Form

let message = new Object();
				message.loading = "Загрузка...";
				message.success = "Спасибо! Скоро мы с вами свяжемся";
				message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
				input = form.getElementsByTagName('input'),
				statusMessage = document.createElement('div');
				statusMessage.classList.add('status');
				


				form.addEventListener('submit', function(event){
					event.preventDefault();
					form.appendChild(statusMessage);
				


							//AJAX

							let request = new XMLHttpRequest();
							request.open('POST', 'server.php');

							request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

							let formData = new FormData(form);

							request.send(formData);

							request.onreadystatechange = function(){
								if (request.readyState < 4){

									statusMessage.innerHTML = message.loading;

								} else if(request.readyState === 4){

											if(request.status == 200 && request.status < 300){

														statusMessage.innerHTML = message.success;

											}
											else {
												statusMessage.innerHTML = message.failure;

											}
										}
							}

							for (let i = 0; i < input.length; i++){
								input[i].value = '';
							}


					});

				let subform = document.getElementsByClassName('contact-form')[0],
				subinput = subform.getElementsByTagName('input'),
				statusMes = document.createElement('div');
				statusMes.classList.add('status');

				subform.addEventListener('submit', function(event){
					event.preventDefault();
					subform.appendChild(statusMes);

						//AJAX

							let request = new XMLHttpRequest();
							request.open('POST', 'server.php');

							request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

							let formData = new FormData(subform);

							request.send(formData);

							request.onreadystatechange = function(){
								if (request.readyState < 4){

									statusMes.innerHTML = message.loading;

								} else if(request.readyState === 4){

											if(request.status == 200 && request.status < 300){

														statusMes.innerHTML = message.success;

											}
											else {
												statusMes.innerHTML = message.failure;

											}
										}
							}

							for (let i = 0; i < subinput.length; i++){
								subinput[i].value = '';
							}

				});


	//Slider

	let sliderIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dot = document.getElementsByClassName('dot');

		showSlides(sliderIndex);

		function showSlides(n){

			if (n > slides.length){
				sliderIndex = 1;
			}

			if (n < 1){
				sliderIndex = slides.length;
			}

			for (let i = 0; i < slides.length; i++){
				slides[i].style.display = 'none';
			};

			for (let i = 0; i < dot.length; i++){
				dot[i].classList.remove('dot-active');
			};

			slides[sliderIndex - 1].style.display = 'block';
			dot[sliderIndex - 1].classList.add('dot-active');

		}

		function plusSlides(n){
			showSlides(sliderIndex += n)
		}

		function currentSlide(n){
			showSlides(sliderIndex = n)
		}

		prev.addEventListener('click', ()=>{
			plusSlides(-1);
		});

		next.addEventListener('click', ()=>{
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event){
			for(let i = 0; i < dot.length +1; i++){
				if (event.target.classList.contains('dot') && event.target == dot[i-1]) {
					currentSlide(i);
				}
			}
		})

	//Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personsSum = 0,
	    daysSum = 0,
	    total = 0;

	    totalValue.innerHTML = 0;

	    persons.addEventListener('change', function(){
	    	personsSum = +this.value;
	    	total = (daysSum + personsSum)*4000;
	    	if (restDays.value == ''){
	    		totalValue.innerHTML = 0;
	    	} else {
	    		totalValue.innerHTML = total;
	    	}
	    });

	    restDays.addEventListener('change', function(){
	    	daysSum = +this.value;
	    	total = (daysSum + personsSum)*4000;
	    	if (persons.value == ''){
	    		totalValue.innerHTML = 0;
	    	} else {
	    		totalValue.innerHTML = total;
	    	}
	    });

	    place.addEventListener('change', function(){
	    	if (restDays.value == '' || persons.value == ''){
	    		totalValue.innerHTML = 0;
	    	} else {
	    		let a = total;
	    		totalValue.innerHTML = a * this.options[this.selectedIndex].value;
	    	}

	    });


});