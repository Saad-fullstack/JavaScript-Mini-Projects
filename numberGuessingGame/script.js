let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guess-input");
const SubmitBtn = document.querySelector("#submit-btn");
const result = document.querySelector("#result-message");
const prevGuess = document.querySelector("#previous-guesses");
const leftAttempt = document.querySelector("#attempts-left");
const startGame = document.querySelector("#new-game-btn");

let userPrevGuess = []
let userleftAttempt = 0

let playGame = true

if (playGame) {
    SubmitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess <= 0) {
        alert("Please enter a number greater than 0")
    } else if (guess > 100) {
        alert("Please enter a number less than 101")
    } else {
        userPrevGuess.push(guess);
        if (userleftAttempt + 1 === 10) {
            clear(guess)
            displayMsg(`Game Over. The random number was ${randomNumber}`)
            endGame()
        } else {
            clear(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg("Your guess is correct");
        endGame()
    } else if (guess < randomNumber) {
        displayMsg("Your guess is too low");
    } else if (guess > randomNumber) {
        displayMsg("Your guess is too high");
    }
}

function clear(guess) {
    userInput.value = '';
    prevGuess.innerHTML += `${guess} `;
    userleftAttempt++;
    leftAttempt.innerHTML = `${10 - userleftAttempt}`;
}

function displayMsg(message) {
    result.innerHTML = `${message}`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    userInput.placeholder = "Please start a new game";
    playGame = false;
    newGame();
}

function newGame() {
    startGame.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        userPrevGuess = [];
        userleftAttempt = 0;
        playGame = true;
        prevGuess.innerHTML = '';
        leftAttempt.innerHTML = `${10 - userleftAttempt}`;
        result.innerHTML = '';
        userInput.removeAttribute('disabled');
    })
}