let
nucleoArray = [],
nucleoLastId,
nucleoSize,
nucleoText;
function preload() {

}

function setup() {
	myCanvas = createCanvas((innerWidth), parseInt(innerHeight) - 45);
	nucleoSize = innerWidth / 150;
	nucleoLastId = 0;
	nucleoArray = [];
	nucleoText = userInput.value;
	for(let i = 0; i < nucleoText.length; i++) {
		nucleoArray.push(
			new Nucleo(
				nucleoSize + nucleoSize * i, nucleoSize * 2, nucleoLastId, nucleoText.charAt(i), nucleoSize
			)
		);
		nucleoLastId++;
	}
}

function draw() {
	background(0);
	for(let i = 0; i < nucleoArray.length; i++) {
		nucleoArray[i].show();
	}

}

function resizeBody() {
	setup();
}
function mouseClicked() {
	for(let i = 0; i < nucleoArray.length; i++) {
		if(
			mouseX > (nucleoArray[i].position.x - nucleoArray[i].size / 2) &&
			mouseX < (nucleoArray[i].position.x + nucleoArray[i].size / 2) &&
			mouseY > (nucleoArray[i].position.y - nucleoArray[i].size / 2) &&
			mouseY < (nucleoArray[i].position.y + nucleoArray[i].size / 2)
		) {
			nucleoArray[i].changeLetter();
			changeUserInput();
			break;
		}
	}

}

/** DOM **/
let userInput = document.getElementById('userNucleoInput');
userInput.addEventListener('change', userChangedRNA);
function userChangedRNA(e) {
	nucleoArray = [];
	nucleoText = userInput.value;
	for(let i = 0; i < nucleoText.length; i++) {
		nucleoArray.push(
			new Nucleo(
				nucleoSize + nucleoSize * i, nucleoSize * 2, nucleoLastId, nucleoText.charAt(i), nucleoSize
			)
		);
		nucleoLastId++;
	}
}

function changeUserInput() {
	let localText = "";
	for(let i = 0; i < nucleoArray.length; i++) {
		localText += nucleoArray[i].letter;
	}
	userInput.value = localText;
	nucleoText = localText;
}