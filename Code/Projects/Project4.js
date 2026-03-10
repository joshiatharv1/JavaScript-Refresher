const randomNumber = parseInt(Math.random() * 100 + 1);
let count = 10;

const guessField = document.querySelector('#guessField');
const previousGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const submit = document.querySelector('#subt');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const value = parseInt(guessField.value);
  if (value === randomNumber) {
    previousGuesses.innerHTML = `Correct! The answer was ${value}`;
    submit.disabled = true;
    return;
  } else if (isNaN(value)) {
    previousGuesses.innerHTML = `Enter something !`;
  }

  count--;
  remaining.textContent = count;
  previousGuesses.textContent += value + ' ';
  lowOrHigh.textContent = value < randomNumber ? 'Too low!' : 'Too high!';

  if (count === 0) {
    lowOrHigh.textContent = `Game over! The number was ${randomNumber}`;
    submit.disabled = true;
  }

  guessField.value = '';
});


const random=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHigh');
const startOver=document.querySelector('.lowOrHigh');

const p=document.createElement('p');
let prevGuesses=[]
let numGuess=[]

let playGame=true;

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`The Guess cannot be Empty`)
  }else if(guess<1){
    alert(`The Guess Cannot be Less than 1`)
  }
  else if(guess>100){
    alert(`The Guess Cannot be more than 100`)
  }
  else{
    prevGuesses.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMessage(`End Game the number was ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess=== randomNumber){
    displayMessage("You Won")
    endGame();
  }else if(guess>randomNumber){
    displayMessage("On the Higher Side")
  }
  else{
    displayMessage("ON the Lower side")
  }
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML=`${guess}`
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
 lowOrHigh.innerHTML=`<h2>{message}</h2>` 
}

function endGame(){

}

function newGame(){

}