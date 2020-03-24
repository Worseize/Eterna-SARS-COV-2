class Coddon{
	constructor(x, y, id, coddon, size){
		this.position = createVector(x, y);
		this.id = id;
		this.coddon = coddon; 
		this.size = size;
	}
	show(){
		if(this.coddon === "A") {
			fill(120, 0, 0);
		}else if(this.coddon === "R") {
			fill(255, 0, 0);
		}else if(this.coddon === "N") {
			fill(0, 120, 0);
		}else if(this.coddon === "D") {
			fill(0, 255, 0);
		}else if(this.coddon === "C") {
			fill(0, 0, 120);
		}else if(this.coddon === "E") {
			fill(0, 0, 255);
		}else if(this.coddon === "Q") {
			fill(120, 120, 0);
		}else if(this.coddon === "G") {
			fill(0, 255, 0);
		}else if(this.coddon === "H") {
			fill(0, 120, 120);
		}else if(this.coddon === "I") {
			fill(255, 255, 0);
		}else if(this.coddon === "L") {
			fill(255, 0, 255);
		}else if(this.coddon === "K") {
			fill(0, 255, 255);
		}else if(this.coddon === "<") {
			fill(123, 231, 32);
		}else if(this.coddon === "F") {
			fill(0, 255, 120);
		}else if(this.coddon === "P") {
			fill(120, 0, 255);
		}else if(this.coddon === "S") {
			fill(155, 255, 0);
		}else if(this.coddon === "T") {
			fill(255, 0, 120);
		}else if(this.coddon === "W") {
			fill(255, 120, 0);
		}else if(this.coddon === "Y") {
			fill(133, 133, 133);
		}else if(this.coddon === "V") {
			fill(0, 120, 255);
		}else if(this.coddon === ">") {
			fill(0, 21, 152);
		}else if(this.coddon === "?") {
			fill(255, 255, 152);
		}
		ellipse(this.position.x + offsetX, this.position.y, this.size, this.size);
		fill(0);
		textSize(this.size);
		if(this.coddon === "A") {
			text("A", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "R") {
			text("R", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "N") {
			text("N", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "D") {
			text("D", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "C") {
			text("C", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "E") {
			text("E", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "Q") {
			text("Q", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "G") {
			text("G", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "H") {
			text("H", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "I") {
			text("I", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "L") {
			text("L", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "K") {
			text("K", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "<") {
			text("<", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "F") {
			text("F", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "P") {
			text("P", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "S") {
			text("S", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "T") {
			text("T", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "W") {
			text("W", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "Y") {
			text("Y", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "V") {
			text("V", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === ">") {
			text(">", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}else if(this.coddon === "?") {
			text("?", this.position.x - this.size * debugKoof + offsetX, this.position.y + this.size * debugKoof);
		}
	}
}