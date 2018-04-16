function modal(){
	
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

}

module.exports = modal;