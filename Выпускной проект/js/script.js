window.addEventListener('DOMContentLoaded', () => {

//Popup

let btn = document.getElementById('popup-btn'),
				overlay = document.querySelector('.overlay'),
				main = document.querySelector('.main'),
				custom = document.querySelector('.custom'),
				custom_info = document.querySelector('.custom-info');

btn.addEventListener('click', function(event){
	if (event.target){
		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		custom_info.style.display = 'block';
	};
		
});

});				