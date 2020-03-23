let debugKoof = 1 / 2.6;
let offsetX = 0;
class Nucleo{
	constructor(x, y, id, letter, size){
		this.position = createVector(x, y);
		this.id = id;
		this.letter = letter; 
		this.size = size;
	}
	show(){
		if(this.letter === "A") {
			fill(255, 255, 0); //YELLOW (ADENINE)
		}else if(this.letter === "U") {
			fill(0, 204, 255); //BLUE (URACIL)
		}else if(this.letter === "G") {
			fill(255, 0, 0); //RED GUANINE
		}else if(this.letter === "C") {
			fill(0, 255, 0);//GREEN CYTOSINE
		}
		ellipse(this.position.x + offsetX, this.position.y, this.size, this.size);
		fill(0);
		textSize(this.size);
		if(this.letter === "A") {
			text("A", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.letter === "U") {
			text("U", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.letter === "G") {
			text("G", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.letter === "C") {
			text("C", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}
	}
	changeLetter(){
		if(this.letter === "A"){
			this.letter = "U";
		}else if(this.letter === "U"){
			this.letter = "G";
		}else if(this.letter === "G"){
			this.letter = "C";
		}else if(this.letter === "C"){
			this.letter = "A";
		}
	}
}