{
	var num=33721;
	num=(num / 10000) + ((num % 10000)/1000) + ((num % 1000)/100) + ((num % 100)/10);
	num=Math.floor(num);
	console.log(num);
	num = Math.pow(num,3);
	alert(num);
}