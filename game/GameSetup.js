import {range} from "../config.js";

export class GameSetup {
	constructor() {
		this.startingPlayer = '';
		this.algorithm = '';
		this.startingNumber = '';
	}

	setStartingPlayer(player) {
		this.startingPlayer = player;
	}

	setAlgorithm(algorithm) {
		this.algorithm = algorithm;
	}

	setStartingNumber(number) {
		this.startingNumber = number;
	}

	generateNumber() {
		const [max, min] = range;
		const numbers = [];

		// šeit veicam ciklu, līdz tiek atrasti 5 randomizēti skaitļi kas dalās ar 2 un 3
		while(numbers.length < 5) {
			const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min

			if((generatedNumber % 3 === 0) && (generatedNumber % 2 === 0)) {
				numbers.push(generatedNumber);
			}
		}

		return numbers;
	}
}