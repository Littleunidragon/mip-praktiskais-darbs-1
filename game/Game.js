import {GameSetup} from "./GameSetup.js";
import {GameTree} from "./GameTree.js";

export class Game extends GameSetup {
	constructor() {
		super();
		this.tree = null;
		this.current = null;
		this.history = [];
	}

	startGame() {
		this.tree = new GameTree(this.startingNumber, this.startingPlayer);
		this.current = this.tree.root;

		// ja spēli sāk dators, tad tas uzreiz dara gājienu
		if (this.startingPlayer === 'computer') {
			this.computerMove();
		}
	}

	humanMove(move) {
		// Atrodi bērnu mezglu ar šo gājienu
		const m = move === 2 ? '/2' : '/3';
		const next = this.current.children.find(c => c.move === m);

		// todo: šeit jāuztaisa funkcionalitāte, lai bloķētu pogu, lai nav nemaz iespēja izvēlēties nederīgu gājienu
		if (!next) {
			console.log('Nederīgs gājiens!');
			return false;
		}

		this.current = next;
		this.history.unshift(`Cilvēks dala ar ${move}. Rezultāts: Cilvēks: ${this.current.humanScore}, Dators: ${this.current.computerScore}. (skaitlis: ${this.current.number})`);
		return true;
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


	getWinner() {
		const { humanScore, computerScore } = this.current;
		if (computerScore > humanScore)    return 'AI uzvar!';
		if (humanScore > computerScore)    return 'Cilvēks uzvar!';
		return 'Neizšķirts!';
	}

	isOver() {
		return this.current.isGameEnd();
	}
}