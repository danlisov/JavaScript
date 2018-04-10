class Options {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = '500px';
		this.width = '500px';
		this.bg = 'darkred';
		this.fontSize = '50px';
		this.textAlign = 'center'
	}


	createElement(){
		let div = document.createElement('div');

		div.innerHTML = "Hello world!";

		div.style.cssText = `height:${this.height}; width:${this.width}; background:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;

		document.body.appendChild(div);
	}

}

let Style = new Options;

Style.createElement();
 
