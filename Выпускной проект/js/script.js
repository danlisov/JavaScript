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
					policy = document.getElementById('select'),
					biography = document.getElementById('bio'),
					person = document.querySelector('.person'),
					person_easy = document.querySelector('.person-easy'),
					custom_btn = document.getElementById('ready');

	custom_btn.addEventListener('click', (event)=>{

		let mainCardItem = document.createElement("div"),
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
						biogr = document.createElement('div');

						mainCardItem.className = 'main-cards-item';
						candidateBlock.className = 'candidate-block';
						photo.className = 'photo photo-3';
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

						
						mainCards.appendChild(mainCardItem);
						mainCardItem.appendChild(candidateBlock);
						candidateBlock.appendChild(photo);
						candidateBlock.appendChild(result);
						mainCardItem.appendChild(name);
						mainCardItem.appendChild(age);
						mainCardItem.appendChild(sex);
						mainCardItem.appendChild(views);
						mainCardItem.appendChild(biogr);

						result.appendChild(result_count);
						result.appendChild(progress);

						progress.appendChild(progress_bar);

						name.innerHTML = customName.value;
						age.innerHTML = customAge.value + " лет";
						biogr.innerHTML = biography.value;

						let view = document.getElementsByTagName('option');

						

						if (male.checked){
							sex.innerHTML = male.value;
							photo.style.backgroundImage = arrMen[slideIndex - 1];;
							photo.style.backgroundRepeat = 'no-repeat';
							photo.style.backgroundPosition = 'center';
							photo.style.backgroundSize = '85%';
						} else if (female.checked){
							sex.innerHTML = female.value;
							photo.style.backgroundImage = arrWomen[slideIndex - 1];;
							photo.style.backgroundRepeat = 'no-repeat';
							photo.style.backgroundPosition = 'center';
							photo.style.backgroundSize = '75%';
						};	

						if (view[0].selected){
							views.innerHTML = "Либеральные"
						} else if(view[1].selected){
									views.innerHTML = "Левые"
						} else{
									views.innerHTML = "Правые"
						};


						let gender = document.createElement('div'),
										polit = document.createElement('div'),
										biog = document.createElement('div');
								  gender.innerHTML = "Пол:" + "<br>";
								  polit.innerHTML = "Полит. взгляды:" + "<br>";
								  biog.innerHTML = "Биография:";

						mainCardItem.insertBefore(gender, sex);
						mainCardItem.insertBefore(polit, views);
						mainCardItem.insertBefore(biog, biogr);
		
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

//Slider

let preview = document.querySelector('.preview'),
		previewMain = document.querySelector('.person-easy'),
		female = document.getElementById('female'),
		male = document.getElementById('male'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		arrWomen = ["url('./img/construct-1.png')", 
						"url('./img/construct-2.png')",
						"url('./img/construct-3.png')",
						"url('./img/construct-4.png')"],
		arrMen = ["url('./img/construct-5.png')",
					"url('./img/construct-6.png')",
					"url('./img/construct-7.png')",
					"url('./img/construct-8.png')"],
		slideIndex = 1;

		female.addEventListener('click', ()=>{
			preview.style.backgroundImage = arrWomen[0];
			previewMain.style.backgroundImage = arrWomen[0];
				function showBackgroundSlides(n) {
			      if (n > arrWomen.length) {
			        slideIndex = 1;
			      }
			      if (n < 1) {
			        slideIndex = arrWomen.length;
			      }
			      preview.style.backgroundImage = arrWomen[slideIndex - 1],
			      previewMain.style.backgroundImage = arrWomen[slideIndex - 1];
			      return arrWomen[slideIndex - 1];

			    }
			    function plusSlides (n) {
			      showBackgroundSlides(slideIndex += n)
			    }
			    prev.addEventListener('click', function() {
			      plusSlides(-1);
			    });
			    next.addEventListener('click', function() {
			      plusSlides(1);
			    });
		});

		
male.addEventListener('click', ()=>{
	preview.style.backgroundImage = arrMen[0];
	previewMain.style.backgroundImage = arrMen[0];
			function showBackgroundSlides(n) {
		      if (n > arrMen.length) {
		        slideIndex = 1;
		      }
		      if (n < 1) {
		        slideIndex = arrMen.length;
		      }
		      preview.style.backgroundImage = arrMen[slideIndex - 1],
		      previewMain.style.backgroundImage = arrMen[slideIndex - 1];
		      return arrMen[slideIndex - 1];

		    }
		    function plusSlides (n) {
		      showBackgroundSlides(slideIndex += n)
		    }
		    prev.addEventListener('click', function() {
		      plusSlides(-1);
		    });
		    next.addEventListener('click', function() {
		      plusSlides(1);
		    });
});

});							