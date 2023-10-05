let rgbAns = document.getElementById("ans");
let input = document.getElementById("userinput");
let inputValue = document.getElementById("userinput").value;
let button = document.getElementById("converterBtn");
let color = document.getElementById("color");

// 1. Convertion from RGB to HEX 

function convertNumberToLetter(answer){
	if (answer === 10) {
		return "A"
	} else if (answer === 11) {
		return "B"
	} else if (answer === 12) {
		return "C"
	} else if (answer === 13) {
		return "D"
	} else if (answer === 14) {
		return "E"
	} else if (answer === 15) {
		return "F"
	} else {
		return answer
	}
}

function trunc(number){
	answer = Math.trunc(number/16);
	return convertNumberToLetter(answer)
}

function modulo(number){
	answer = number%16
	return convertNumberToLetter(answer)
}

function RGBtoHEX(entry){
    let input = entry.replace(/\s/g, '').replace(/[a-zA-Z()]/g, '').split(',');
	number1 = Number(input[0]);
	number2 = Number(input[1]);
	number3 = Number(input[2]);
	return "#"+trunc(number1)+modulo(number1)+trunc(number2)+modulo(number2)+trunc(number3)+modulo(number3);;
}

// 2. Convertion from HEX to RGB

function convertLetterToNumber(answer){
	if (answer === "0") {
		return 0
	} else if (answer === "1") {
		return 1
	} else if (answer === "2") {
		return 2
	} else if (answer === "3") {
		return 3
	} else if (answer === "4") {
		return 4
	} else if (answer === "5") {
		return 5
	} else if (answer === "6") {
		return 6
	} else if (answer === "7") {
		return 7
	} else if (answer === "8") {
		return 8
	} else if (answer === "9") {
		return 9
	} else if (answer === "A") {
		return 10
	} else if (answer === "B") {
		return 11
	} else if (answer === "C") {
		return 12
	} else if (answer === "D") {
		return 13
	} else if (answer === "E") {
		return 14
	} else if (answer === "F") {
		return 15
	}
}

function HEXtoRGB(hexCode){
	rgb1 = convertLetterToNumber(hexCode[1]);
	rgb2 = convertLetterToNumber(hexCode[2]);
	rgb3 = convertLetterToNumber(hexCode[3]);
	rgb4 = convertLetterToNumber(hexCode[4]);
	rgb5 = convertLetterToNumber(hexCode[5]);
	rgb6 = convertLetterToNumber(hexCode[6]);
	rgbCode1 = rgb1*16+rgb2;
	rgbCode2 = rgb3*16+rgb4;
	rgbCode3 = rgb5*16+rgb6;
	return "RGB ("+rgbCode1+","+rgbCode2+","+rgbCode3+")"; 
}

// 3. General convertion function 

function colorConverter(colorCode){
	if (colorCode.startsWith("#")) {
		return HEXtoRGB(colorCode);
	} else {
		return RGBtoHEX(colorCode);
	}
}

function convertAfterKeypress(event) {
	if (input.value.length > 4 && event.keyCode === 13) {
		colorConverter(input.value);  
        ans.textContent = colorConverter(input.value);
        if (input.value.startsWith("#")){
            let color = input.value.toString();
            ans.style.border = "0.3em solid" + color;
            ans.style.borderRadius = "0.5em";
            ans.style.backgroundColor = "white";
            // background.style.background = color;
        } else {
            let color = colorConverter(input.value).toString();
            ans.style.border = "0.3em solid" + color;
            ans.style.borderRadius = "0.5em";
            ans.style.backgroundColor = "white";
        } 
	}
};

function convertAfterClick() { 
    if (input.value.length > 4) {
        colorConverter(input.value);
        ans.textContent = colorConverter(input.value);
        if (input.value.startsWith("#")){
            let color = input.value.toString();
            ans.style.border = "0.3em solid" + color;
            ans.style.borderRadius = "0.5em";
            ans.style.backgroundColor = "white";
        } else {
            let color = colorConverter(input.value).toString();
            ans.style.border = "0.3em solid" + color;
            ans.style.borderRadius = "0.5em";
            ans.style.backgroundColor = "white";
        }        
    }
};


button.addEventListener("click", convertAfterClick);
input.addEventListener("keypress", convertAfterKeypress);

