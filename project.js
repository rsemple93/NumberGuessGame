let btnStart = document.getElementById("start");
let btnReset = document.getElementById("reset");
let btnCheck = document.getElementById("check");

let mainDiv = document.getElementById("main-div");

let guessBox = document.getElementById("guess-box");
let allGuesses = document.getElementById("all-guesses");
let high_or_low = document.getElementById("high-or-low");

let secretNumber = Math.floor(Math.random() * 101);

let count = 1

function start() {
    mainDiv.style.visibility = 'visible';
}

function checkGuess() {
    console.log(secretNumber);
    let yourGuess = Number(guessBox.value);

    if (count < 3) {
        if (yourGuess < secretNumber) {
            allGuesses.textContent += yourGuess + " ";
            high_or_low.textContent = "Your guess is too low";
            count++;
            guessBox.value = "";
        }
        else if (yourGuess > secretNumber) {
            allGuesses.textContent += yourGuess + " ";
            high_or_low.textContent = "Your guess is too high";
            count++;
            guessBox.value = "";
        }
        else {
            allGuesses.textContent += yourGuess + " ";
            high_or_low.textContent = "Congrats! that was the correct number";
            high_or_low.classList.add("success");
            guessBox.value = "";
            gameOver();
        }
    }
    else {
       allGuesses.textContent += yourGuess + " ";
            high_or_low.textContent = `Sorry, the correct number was ${secretNumber}`
            high_or_low.classList.add("wrong");
            guessBox.value = "";
            gameOver(); 
    }
}

function gameOver() {
    btnCheck.disabled = true;
    guessBox.disabled= true;
}

function restart() {
    return window.location.reload();
}