window.addEventListener('DOMContentLoaded', () => {

//Popup

let btn = document.getElementById('popup-btn'),
				overlay = document.querySelector('.overlay'),
				main = document.querySelector('.main'),
				custom = document.querySelector('.custom'),
				custom_info = document.querySelector('.custom-info');
				custom_char = document.querySelector('.custom-char');
				custom_style = document.querySelector('.custom-style');


btn.addEventListener('click', function(event){

	if (event.target){
		overlay.style.display = 'none';
	 main.style.display = 'block';
		// custom.style.display = 'flex';
		// custom_info.style.display = 'block';
		// custom_char.style.display = 'block';
		// custom_style.style.display = 'block';
	};

	let mainCard = document.createElement("div"),
					candidateBlock = document.createElement('div'),
					photo = document.createElement('div'),
					result = document.createElement('div'),
					result_count = document.createElement('div'),
					progress = document.createElement('div'),
					progress_bar = document.createElement('div'),
					name = document.createElement('div'),
					age = document.createElement('div'),
					sex = document.createElement('div'),
					views = document.createElement('div'),
					bio = document.createElement('div');

					mainCard.className = 'main-cards-item';
					candidateBlock.className = 'candidate-block';
					photo.className = 'photo';
					result.className = 'result';
					result_count.className = 'result-count';
					progress.className = 'progress';
					progress_bar.className = 'progress-bar';
					name.className = 'name';
					age.className = 'age';
					sex.className = 'sex';
					views.className = 'views';
					bio.className = 'bio';

					mainCard.appendChild(candidateBlock);
					mainCard.appendChild(photo);
					mainCard.appendChild(result);
					mainCard.appendChild(name);
					mainCard.appendChild(age);
					mainCard.appendChild(sex);
					mainCard.appendChild(views);
					mainCard.appendChild(bio);

					result.appendChild(result_count);
					result.appendChild(progress);

					progress.appendChild(progress_bar);
     

		
});

//Customizer 

	let field = document.getElementsByTagName('input'),
					policy = document.getElementsByTagName('option'),
					biography = document.getElementById('bio'),
					name = document.getElementsByClassName('name'),
					age = document.getElementsByClassName('age'),
					sex = document.getElementsByClassName('sex'),
					views = document.getElementsByClassName('views');

	field[0].addEventListener('change', ()=>{
			field[0].innerHTML = name;
	});

	field[1].addEventListener('change', ()=>{
			field[1].innerHTML = age;
	});

	field[2].addEventListener('change', ()=>{
			field[2].innerHTML = sex;
	});
	
	for (let i = 0; i<=2; i++){

		policy[i].addEventListener('change', ()=>{
				policy[i].innerHTML = views; 

		})
	};

	biography.addEventListener('change', (event)=>{
			biography.innerHTML = document.getElementsByClassName('bio');

			if (event.target){
			 main.style.display = 'block';
				custom.style.display = 'none';
			};

	});


});				