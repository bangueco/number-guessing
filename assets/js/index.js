// Queries
let playerTurns = 10;
let turns = document.querySelector("#turns");
let guess_me;
let guess_input = document.querySelector("#guessInput");
let result = document.querySelector("#result");
let submit = document.querySelector("#submit");
let lowNum = document.querySelector("#low_num");
let highNum = document.querySelector("#high_num");
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
    let p = document.createElement("p");
    p.style.color = "red";
    lowNum.appendChild(p);
    p.textContent = `${guess_input.valueAsNumber}`;
  } else if (guess_input.valueAsNumber > guess_me) {
    result.textContent = "Too high!";
    result.style.color = "green";
    playerTurns--;
    turns.textContent = `Turns: ${playerTurns}`;
    let p = document.createElement("p");
    p.style.color = "green";
    highNum.appendChild(p);
    p.textContent = `${guess_input.valueAsNumber}`;
  }

  if (playerTurns <= 0) {
    result.textContent = "You ran out of turns! Game Over!";
    submit.disabled = true;
  }

  if (guess_input.valueAsNumber === guess_me) {
    result.style.color = "rgb(5, 201, 152)";
    result.textContent = "You guessed the correct number!";
    turns.textContent = `Turns: ${playerTurns}`;
    submit.disabled = true;
  }
}

function submitGuess() {
  guessGameStart();
}

function resetGuessNumber() {
  randomizer();
}

randomizer();
