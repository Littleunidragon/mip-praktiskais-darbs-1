export class GameNode {
	constructor(number, humanScore, computerScore, turn, move, children) {
		this.number = number;
		this.humanScore = humanScore;
		this.computerScore = computerScore;
		this.turn = turn;
		this.move = null;
		this.children = [];
	}

	isGameEnd() {
		return this.children.length <= 0 || this.number <= 10;
	}

	isLeaf() {
		return this.number <= 10;
	}
}