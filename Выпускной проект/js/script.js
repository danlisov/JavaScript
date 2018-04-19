window.addEventListener('DOMContentLoaded', () => {

//Popup

let btn = document.getElementById('popup-btn'),
				overlay = document.querySelector('.overlay'),
				main = document.querySelector('.main'),
				mainCards = document.querySelector('.main-cards'),
				custom = document.querySelector('.custom'),
				custom_info = document.querySelector('.custom-info');
				custom_char = document.querySelector('.custom-char');
				custom_style = document.querySelector('.custom-style');


btn.addEventListener('click', function Customizer(event){

	if (event.target){
		overlay.style.display = 'none';
	 main.style.display = 'none';
		custom.style.display = 'flex';
		custom_info.style.display = 'block';
		custom_char.style.display = 'block';
		custom_style.style.display = 'block';
	};



		
});

//Создание кандидата 

	let customName = document.getElementById('name'),
					customAge = document.getElementById('age'),
					fimale = document.getElementById('male'),
					male = document.getElementById('fimale'),
					policy = document.getElementById('select'),
					biography = document.getElementById('bio'),
					Views = document.getElementsByClassName('views')[0],
					preview = document.getElementsByClassName('preview')[0],
					custom_btn = document.getElementById('ready');

	custom_btn.addEventListener('click', (event)=>{

		let mainCardItem = document.createElement("div"),
						candidateBlock = document.createElement('div'),
						newphoto = document.createElement('div'),
						result = document.createElement('div'),
						result_count = document.createElement('div'),
						progress = document.createElement('div'),
						progress_bar = document.createElement('div'),
						name = document.createElement('div'),
						age = document.createElement('div'),
						sex = document.createElement('div'),
						views = document.createElement('div'),
						biogr = document.createElement('div');

						mainCardItem.className = 'main-cards-item';
						candidateBlock.className = 'candidate-block';
						newphoto.className = 'photo';
						result.className = 'result';
						result_count.className = 'result-count';
						progress.className = 'progress';
						progress_bar.className = 'progress-bar';
						progress_bar.classList.add('progress-bar-3');
						name.className = 'name';
						age.className = 'age';
						sex.className = 'sex';
						views.className = 'views';
						biogr.className = 'bio';

								newphoto.textContent = preview;
								name.innerHTML = customName;
								age.innerHTML = customAge;
								if (fimale == true){
									sex.innerHTML = fimale.value;
								} else if(male == true){
									sex.innerHTML = male.value;
								};

									//views.innerHTML = this.options[this.selectedIndex].value;

						biogr.innerHTML = biography;

						mainCards.appendChild(mainCardItem);
						mainCardItem.appendChild(candidateBlock);
						candidateBlock.appendChild(newphoto);
						candidateBlock.appendChild(result);
						mainCardItem.appendChild(name);
						mainCardItem.appendChild(age);
						mainCardItem.appendChild(sex);
						mainCardItem.appendChild(views);
						mainCardItem.appendChild(biogr);

						result.appendChild(result_count);
						result.appendChild(progress);

						progress.appendChild(progress_bar);
		    

		
			custom.style.display = 'none';
			main.style.display = 'block';

			//Обнуление

			let progress_bar_1 = document.getElementsByClassName('progress-bar-1')[0],
							progress_bar_2 = document.getElementsByClassName('progress-bar-2')[0],
							progress_bar_3 = document.getElementsByClassName('progress-bar-3')[0],
							resultCount = document.getElementsByClassName('result-count');

			result_count.innerHTML = '0%';			
			resultCount[0].innerHTML = "0%";
			resultCount[1].innerHTML = "0%";
							
			if (event.target){

				progress_bar_1.style.height = '0%';
				progress_bar_2.style.height = '0%';
				progress_bar_3.style.height = '0%';

   };

   //Сброс результатов

			let reset = document.getElementById('reset');

			reset.addEventListener('click', ()=>{
				if (event.target){
				mainCardItem.remove();
				 main.style.display = 'none';
					custom.style.display = 'flex';
					custom_info.style.display = 'block';
					custom_char.style.display = 'block';
					custom_style.style.display = 'block';
				};
			})

			//Честное голосование

			let vot = document.getElementById('voting');

			vot.addEventListener('click', ()=>{
					result_count.innerHTML = '45%';
					resultCount[0].innerHTML = "20%";
					resultCount[1].innerHTML = "35%";

					if (event.target){

						progress_bar_1.style.height = '20%';
						progress_bar_2.style.height = '35%';
						progress_bar_3.style.height = '45%';

   		};

   		//Вмешаться в голосование

			let crime = document.getElementById('crime');

			crime.addEventListener('click', ()=>{
				if (vot.click){
				
					result_count.innerHTML = '70%';
					resultCount[0].innerHTML = "10%";
					resultCount[1].innerHTML = "20%";

					if (event.target){

						progress_bar_1.style.height = '10%';
						progress_bar_2.style.height = '20%';
						progress_bar_3.style.height = '70%';
				};
			};
			});

			
			});

	});

});				