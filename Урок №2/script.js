{
	var budGet = prompt('Ваш бюджет?');
	var nameShop = prompt('Название вашего магазин?');
	let time = 19;
	
	var mainList = {
		budget: budGet,
		nameshop: nameShop,
		shopGoods: [],
		employers: {},
		open: false
	}; 

	
	for (let i = 0; i < 5; i++){

		let a = prompt('Какой тип товаров будем продавать?');

		if ( (typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ) {
			console.log('Все верно!');

			mainList.shopGoods[i] = a;
		} else {
			mainList.shopGoods[i] = a;
		}
	}

	// let i=1;

	// while (i < 5){
	// 	let a = prompt('Какой тип товаров будем продавать?');
	// 	if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50) {
	// 		console.log('Все верно!')
	// 		mainList.shopGoods[i] = a;
	// 	}
	// 	else {
	// 		mainList.shopGoods[i] = a;
	// 	}
	// 	i++;
	// }

	// let i=1;

	// do {
	// 	let a = prompt('Какой тип товаров будем продавать?');
	// 	if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50) {
	// 		console.log('Все верно!')
	// 		mainList.shopGoods[i] = a;
	// 	}
	// 	else {
	// 		mainList.shopGoods[i] = a;
	// 	}
	// 	i++;
	// }
	// while (i < 5);


	if (time < 0){
		console.log('Tакого просто не может быть')
	} else if (time > 8 && time < 20){
		console.log('Время работать!')
		} else if (time < 24){
			console.log('Уже слишком поздно!')
			}


	
	alert (mainList.budget/30);
	console.log(mainList);
}