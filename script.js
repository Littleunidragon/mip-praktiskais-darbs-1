import {Game} from "./game/Game.js";
import {updateHistory} from "./helpers/updateHistory.js";

const game = new Game();
const currentNumber = document.getElementById('currentNumber');

// konteineri
const firstStepContainer = document.getElementById('firstStep');
const secondStepContainer = document.getElementById('secondStep');
const thirdStepContainer = document.getElementById('thirdStep');
const gameContainer = document.getElementById('gameContainer');

const historyContainer = document.getElementById('history');
const humanPoints = document.getElementById('humanPoints');
const computerPoints = document.getElementById('computerPoints');


// 1. solis, izvēlēties kas sāk spēli
document.getElementById("chooseHuman").addEventListener("click", () => {
	game.setStartingPlayer("human");
	firstStepContainer.classList.add('hidden'); // aizver pirmo soli
	secondStepContainer.classList.remove('hidden'); // atver otro soli
	console.log('game started by human')
});

document.getElementById("chooseComputer").addEventListener("click", () => {
	game.setStartingPlayer("computer");
	firstStepContainer.classList.add('hidden'); // aizver pirmo soli
	secondStepContainer.classList.remove('hidden'); // atver otro soli
	console.log('game started by robot')
});



// 2. solis, izvēlēties datora spēles algoritmu
document.getElementById("chooseMinMax").addEventListener("click", () => {
	game.setAlgorithm("minmax");
	secondStepContainer.classList.add('hidden'); // aizver pirmo soli
	thirdStepContainer.classList.remove('hidden'); // atver trešo soli
	console.log('computer will use min-max algorithm')
});

document.getElementById("chooseAlfaBeta").addEventListener("click", () => {
	game.setAlgorithm("alfabeta");
	secondStepContainer.classList.add('hidden'); // aizver pirmo soli
	thirdStepContainer.classList.remove('hidden'); // atver trešo soli
	console.log('computer will use alfa-beta algorithm')
});



// 3. solis, izvēlēties spēles sākuma skaitli
const numbers = game.generateNumber();
const optionContainer = document.getElementById('options');

numbers.forEach((number) => {
	const button = document.createElement('button');
	button.textContent = number;
	button.classList.add('py-10', 'rounded-lg', 'bg-sky-500', 'hover:bg-sky-600', 'duration-200', 'cursor-pointer')

	button.addEventListener('click', () => {
		game.setStartingNumber(number);
		thirdStepContainer.classList.add('hidden'); // aizver trešo soli
		gameContainer.classList.remove('hidden'); // atver spēles konteineru
		currentNumber.innerText = number;
		game.startGame();
		updateState();
	});

	optionContainer.append(button);
});

document.getElementById('divideByTwo').addEventListener('click', () => {
	handleMove(2);
});

document.getElementById('divideByThree').addEventListener('click', () => {
	handleMove(3);
});

function handleMove(divisor) {
	if (!game.humanMove(divisor)) return;

	updateState();
	if (game.isOver()) { endGame(); return; }

	game.computerMove();
	updateState();
	if (game.isOver()) { endGame(); }
}

function updateState() {
	currentNumber.innerText = game.current.number;
	humanPoints.innerHTML = game.current.humanScore;
	computerPoints.innerHTML = game.current.computerScore;
	updateHistory(historyContainer, game.history);
}

function endGame() {
	console.log(game.getWinner());
	// šeit vari paslēpt pogas, parādīt uzvarētāju utt.
	document.getElementById('divideByTwo').disabled = true;
	document.getElementById('divideByThree').disabled = true;
}




