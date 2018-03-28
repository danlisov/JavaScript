{
	let money,
					name,
					time,
					price = 1000;


	function start () {
			money = prompt('Ваш бюджет?');

			while (isNaN(money) || money == "" || money == null){
					money = prompt('Ваш бюджет?');
			}

			name = prompt('Название вашего магазин?').toUpperCase();
			time = 21;

	}

	start();
	
	let mainList = {
		budget: money,
		nameshop: name,
		shopGoods: [],
		employers: [],
		open: false,
		discount: false
	}; 

	function chooseGoods(){
				for (let i = 0; i < 5; i++){

					let a = prompt('Какой тип товаров будем продавать?');

					if ( (typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ) {
						console.log('Все верно!');

						mainList.shopGoods[i] = a;
					} else {
								i = i - 1;
					}
				}
}

chooseGoods();

function workTime(time){
				if (time < 0){
					console.log('Tакого просто не может быть')
				} else if (time > 8 && time < 20){
					console.log('Время работать!')
					} else if (time < 24){
						console.log('Уже слишком поздно!')
						}
}

workTime(18);

function checkPrice(price){
	if (mainList.discount = true){
		price = price * 0.8;
		console.log(price);
	}
}
// checkPrice(price);

	function fillEmployers(){

				for (let i = 0; i < 4; i++){

					let a = prompt('Имя вашего сотрудника?');

					if ( (typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ) {

						console.log('Все верно!'); 

										mainList.employers[i] =(i+1) + "-" +a;

								
					} else {
								i = i - 1;
					}
				}
}

// fillEmployers();

	
	alert ("Ежедневный бюджет =" + mainList.budget/30);

	console.log(mainList);
}