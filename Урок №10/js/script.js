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

let deadline = '2018-04-8';

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

});