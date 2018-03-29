{
	let money,
					name,
					time,
					price = 1000;


	function start () {
			money = prompt('Ваш бюджет?', '');

			while (isNaN(money) || money == "" || money == null){
					money = prompt('Ваш бюджет?', '');
			}

			name = prompt('Название вашего магазин?', '').toUpperCase();
			time = 21;

	}

	// start();
	
	var mainList = {
		budget: money,
		nameshop: name,
		shopGoods: [],
		employers: [],
		open: false,
		discount: false,
		ShopItems: [],


		chooseGoods: function chooseGoods(){
				for (let i = 0; i < 5; i++){

					let a = prompt('Какой тип товаров будем продавать?', '');

					if ( (typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ) {
						console.log('Все верно!');

						mainList.shopGoods[i] = a;

					} else {
								i = i - 1;
					}
					
				}
						mainList.shopGoods.forEach(function(item, i, shopGoods){
						console.log((i+1) + ":" + item + " У нас вы можете купить :" + shopGoods);
					})
		},

		workTime: function workTime(time){
				if (time < 0){
					console.log('Tакого просто не может быть')
				} else if (time > 8 && time < 20){
					console.log('Время работать!')
					} else if (time < 24){
						console.log('Уже слишком поздно!')
						}
		},

		dayBudGet: function dayBudGet() {
		    alert ("Ежедневный бюджет =" + mainList.budget/30);
		},

		checkPrice: function checkPrice(price){
				if (mainList.discount == true){
					price = price * 0.8;
					console.log(price);
				}
		},

		fillEmployers: function fillEmployers(){
			for (let i = 0; i < 4; i++){
				let name = prompt("Имя сотрудника", '');
				mainList.employers[i] =(i+1) + "-" +name;
			}
		},

		
		chooseShopItems: function chooseShopItems(){

			if ( (typeof (name)) === 'string' && (typeof (name)) !== null && a != '' ) {

				let items = prompt("Перечислить через запятую товары", '');

				mainList.ShopItems = items.split(",");
				mainList.ShopItems.push(prompt("Подожди, еще", ''));
				mainList.ShopItems.sort();

			} else {
								i = i - 1;
					}
		}

		keyObjec: function keyObject(){
				for (let key in mainList){
					console.log("Наш магазин вклчает в себя: " + key + " - " + mainList[key]);
			}
		}

	}; 

	for (let key in mainList){
		console.log("Наш магазин вклчает в себя: " + key + " - " + mainList[key]);
	}
	

	console.log(mainList);
}