let menu = document.getElementsByClassName('menu');
				menuLi = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    ad = document.getElementsByClassName('adv');

document.body.style.background = 'url(img/apple_true.jpg)';

title.innerHTML = "Мы продаем только подлинную технику Apple";

menuLi[1].innerHTML = "Второй пункт";
menuLi[2].innerHTML = "Третий пункт";

 // let LI = document.createElement('li');

 // LI.classList.add('menu-item');

 // LI.innerHTML = "Пятый пункт";

 // menu.appendChild(LI);

ad[0].remove();

let text = document.getElementById('prompt');

let otv=prompt ('Как вы относитесь к продуктам Apple?');

text.innerHTML = otv;
