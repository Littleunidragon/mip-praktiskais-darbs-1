import {GameSetup} from "./GameSetup.js";

export class Game extends GameSetup {
	constructor() {
		super();
		this.tree = null;
		this.current = null;
		this.history = [];
	}


	}

	}

	computerMove() {
		if(this.algorithm === 'minmax') {
			this.current = this.#getBestMove(this.current);
			this.history.unshift(`Dators dala ar ${this.current.move}. Rezultāts: Cilvēks: ${this.current.humanScore}, Dators: ${this.current.computerScore}. (skaitlis: ${this.current.number})`);
		}

		if(this.algorithm === 'alfabeta') {

		}
	}

	#getBestMove(node) {
		let bestScore = -Infinity;
		let bestChild = null;

		for (const child of node.children) {
			const score = this.#minimax(child);
			if (score > bestScore) {
				bestScore = score;
				bestChild = child;
			}
		}

		return bestChild;
	}

	#minimax(node) {
		if (node.children.length === 0) {
			return node.computerScore - node.humanScore;
		}

		if (node.turn === 'computer') {
			return Math.max(...node.children.map(c => this.#minimax(c)));
		} else {
			return Math.min(...node.children.map(c => this.#minimax(c)));
		}
	}
	}
}