// Queries
let playerTurns = 10;
let turns = document.querySelector("#turns");
let guess_me;
let guess_input = document.querySelector("#guessInput");
let result = document.querySelector("#result");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

function randomizer() {
  guess_me = Math.floor(Math.random() * 100) + 1;
}

function guessGameStart() {
  if (guess_input.valueAsNumber < guess_me) {
    result.style.color = "red";
    result.textContent = "Too low!";
    playerTurns--;
    turns.textContent = `Turns: ${playerTurns}`;
  } else if (guess_input.valueAsNumber > guess_me) {
    result.textContent = "Too high!";
    result.style.color = "green";
    playerTurns--;
    turns.textContent = `Turns: ${playerTurns}`;
  } else if (guess_input.valueAsNumber === guess_me) {
    result.style.color = "rgb(5, 201, 152)";
    result.textContent = "You guessed the correct number!";
    turns.textContent = `Turns: ${playerTurns}`;
  }

  if (playerTurns <= 0) {
    result.textContent = "You ran out of turns! Game Over!";
  }
}

function submitGuess() {
  guessGameStart();
}

function resetGuessNumber() {
  randomizer();
}

randomizer();
