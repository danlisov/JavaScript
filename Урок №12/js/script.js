$(document).ready(function(){

		$('.main_btna, .contact, a[href ^= "#sh"]').on('click', function Animate(){
			$('.modal:first').slideDown('slow');

			$('.overlay').fadeIn('slow');

			$('.close:first').on('click', ()=>{
					$('.modal:first').slideUp('fast');
					$('.overlay').fadeOut('fast');
			});

				
		});

		$('a[href ^= "#sh"]').on('click', function(){
				Animate();
		});

		$('.main_btn').on('click', function(){
				Animate();
		});

});