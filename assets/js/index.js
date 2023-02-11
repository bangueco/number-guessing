// Queries
let guess_me;
let guess_input = document.querySelector("#guessInput");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

function randomizer() {
  guess_me = Math.floor(Math.random() * 10) + 1;
}

function guessGameStart() {
  if (guess_input.valueAsNumber < guess_me) {
    console.log("Too low");
  } else if (guess_input.valueAsNumber > guess_me) {
    console.log("Too high");
  } else if (guess_input.valueAsNumber === guess_me) {
    console.log("You guessed the correct number!");
  }
}

function submitGuess() {
  guessGameStart();
}

function resetGuessNumber() {
  randomizer();
}

randomizer();
