/** DOM **/

let userInput = document.getElementById('userNucleoInput');
let userOutput = document.getElementById('userCoddonOutput');
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
	findCoddons();
}

function resizeBody() {
	nucleoSize = innerWidth / 150;
	coddonSize = nucleoSize * 3;
	setup();
}
//** DATABASE **//
var coddonsDatabase = {
	"A": ["GCU", "GCC", "GCA", "GCG"],
	"R": ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
	"N": ["AAU", "AAC"],
	"D": ["GAU", "GAC"],
	"C": ["UGU", "UGC"],
	"E": ["GAA", "GAG"],
	"Q": ["CAA", "CAG"],
	"G": ["GGU", "GGC", "GGA", "GGG"],
	"H": ["CAU", "CAC"],
	"I": ["AUU", "AUC", "AUA"],
	"L": ["CUU", "CUC", "CUA", "CUG", "UUA", "UUG"],
	"K": ["AAA", "AAG"],
	"<": ["AUG"],
	"F": ["UUU", "UUC"],
	"P": ["CCU", "CCC", "CCA", "CCG"],
	"S": ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
	"T": ["ACU", "ACC", "ACA", "ACG"],
	"W": ["UGG"],
	"Y": ["UAU", "UAC"],
	"V": ["GUU", "GUC", "GUA", "GUG"],
	">": ["UAA", "UAG", "UGA"]
}

/** P5.JS **/
let
nucleoArray = [],
coddonArray = [],
targetCoddonArray = [],
errors = [],
nucleoLastId,
coddonLastId,
targetCoddonLastId,
nucleoSize = innerWidth / 150,
coddonSize = nucleoSize * 3,
nucleoText,
coddonText,
targetCoddonText = "<GGSGGSGYQPYRVVVLGGSGGSPYRVVVLSFGGSGGSLSPRWYFYY>",
memOffset;

function setup() {
	myCanvas = createCanvas((innerWidth), parseInt(innerHeight) - 90);
	nucleoLastId = 0;
	coddonLastId = 0;
	targetCoddonLastId = 0;
	nucleoArray = [];
	coddonArray = [];
	targetCoddonArray = [];
	nucleoText = userInput.value;
	for(let i = 0; i < nucleoText.length; i++) {
		nucleoArray.push(
			new Nucleo(
				nucleoSize + nucleoSize * i, nucleoSize * 2, nucleoLastId, nucleoText.charAt(i), nucleoSize
			)
		);
		nucleoLastId++;
	}
	findCoddons();
	for(let i = 0; i < targetCoddonText.length; i++) {
		targetCoddonArray.push(
			new Coddon(
				nucleoSize * 2 + coddonSize * i, nucleoSize * 2 +  coddonSize * 4 , coddonLastId, targetCoddonText.charAt(i), coddonSize
			)
		);
		targetCoddonLastId++;
	}

}

function draw() {
	background(0);
	for(let i = 0; i < nucleoArray.length; i++) {
		nucleoArray[i].show();
	}
	for(let i = 0; i < coddonArray.length; i++) {
		coddonArray[i].show();
	}
	textSize(coddonSize);
	fill(255);
	text("TARGET CODDONS :", width / 2 , nucleoSize * 2 +  coddonSize * 3);
	for(let i = 0; i < targetCoddonArray.length; i++) {
		targetCoddonArray[i].show();
	}
	checkErrors();
	showErrors();
}

/** ERRORS **/
function checkErrors() {
	if(!(nucleoArray.length%3)) {
		errors[0] = 0;
	}else{
		errors[0] = 1;
	}
}

function showErrors() {
	if(errors[0] === 1){
		fill(255, 0, 0);
		textSize(20);
		text("Amount of nucleos can`t be devided by 3" , width / 2, height / 2);
	}
}

/** MOUSE ITERATIONS **/

function mouseClicked() {
	for(let i = 0; i < nucleoArray.length; i++) {
		if(
			mouseX - offsetX > (nucleoArray[i].position.x - nucleoArray[i].size / 2) &&
			mouseX - offsetX < (nucleoArray[i].position.x + nucleoArray[i].size / 2) &&
			mouseY > (nucleoArray[i].position.y - nucleoArray[i].size / 2) &&
			mouseY < (nucleoArray[i].position.y + nucleoArray[i].size / 2)
		) {
			nucleoArray[i].changeLetter();
			changeUserInput();
			break;
		}
	}

}

function mouseWheel(event) {
	if(nucleoSize - event.delta / 10 > innerWidth / 200) {
		nucleoSize -= event.delta / 10;
		coddonSize = nucleoSize * 3;
	}
	setup();
}
function mousePressed() {
	memOffset = mouseX - offsetX;
}
function mouseDragged() {
	offsetX = mouseX - memOffset;
}
// Algorithm
function findCoddons() {
	coddonText = "";
	coddonArray = [];
	for(let j = 0; j < nucleoText.length; j+=3) { // ENTER USER INPUTS
		let flag = false;
		for (var key of Object.keys(coddonsDatabase)) {
			for(let i = 0; i < coddonsDatabase[key].length; i++) {
				if(
					coddonsDatabase[key][i].charAt(0) === nucleoText[j] &&
					coddonsDatabase[key][i].charAt(1) === nucleoText[j + 1] &&
					coddonsDatabase[key][i].charAt(2) === nucleoText[j + 2]
				) {
					coddonText += key;
					flag = true;
					break;
				}
			}
		}
		if(flag === false) {
			coddonText += "?";
		}
	}
	for(let i = 0; i < coddonText.length; i++) {
		coddonArray.push(
			new Coddon(
				nucleoSize * 2 + coddonSize * i, nucleoSize * 2 +  coddonSize  , coddonLastId, coddonText.charAt(i), coddonSize
			)
		)
	}
}
