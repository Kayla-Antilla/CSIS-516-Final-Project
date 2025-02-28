function getRandom(){
    let n = Math.floor(Math.random() * 100);
    console.log(n) //for debugging, check console for answer
    return n;
}

let secretNum = getRandom();

const GUESSES = [];

const submition = document.getElementById("button")
submition.addEventListener("click", guess)

const currentGuess = document.getElementById("guess");
const hotOrCold = document.getElementById("result");
const historyDisplay = document.getElementById("history");
const text = document.getElementById("text")

function guess(){
    let guessedNum = text.value;

    if (guessedNum > secretNum){
        TooHigh(guessedNum)
    }
    else if(guessedNum < secretNum){
        TooLow(guessedNum)
    }
    else{
        Correct(guessedNum)
    }
}

function TooHigh(guessedNum){
    currentGuess.innerText = guessedNum;
    hotOrCold.innerText = "Too High :("
    hotOrCold.style.color = "red";
    GUESSES.push(guessedNum);
}

function TooLow(guessedNum){
    currentGuess.innerText = guessedNum;
    hotOrCold.innerText = "Too Low :("
    hotOrCold.style.color = "red";
    GUESSES.push(guessedNum);
}

function Correct(guessedNum){
    currentGuess.innerText = guessedNum;
    hotOrCold.innerText = "Yay! You did it :)"
    hotOrCold.style.color = "green";
    GUESSES.push(guessedNum);
    historyDisplay.hidden = false;
    historyDisplay.innerText = "Guess History: " + GUESSES;
}