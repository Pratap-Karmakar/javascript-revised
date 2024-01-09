let randomNumber = Math.round(Math.random()*100+1);
console.log(randomNumber);

const guess = document.querySelector('#guess')
const userInput = document.querySelector('.userInput')
const userSubmit = document.querySelector('.userSubmit')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.allGuesses')
const remainingGuesses = document.querySelector('.remainingGuesses')
const startAgain = document.querySelector('.resultParas')

let guessArray = [];
let guessNumber = 1;
let playGame = true;

const p = document.createElement('p');


if(playGame){
    userSubmit.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

const validateGuess=(guess)=>{
    if(guess>100){
        alert("The number is bigger than 100");
    }
    else if(guess<1){
        alert("The number is less than 1");
    }
    else if(isNaN(guess)){
        alert("Enter a valid number")
    }
    else{
        guessArray.push(guess)

        if(11 === guessNumber){
            // updateGuess(guess);
            endGame();
        }
        else{
            checkGuess(guess);
            updateGuess(guess)
        }
    }
}

const checkGuess=(guess)=>{
    if(guess>randomNumber){
        displayMessage("The number is bigger");
    }
    else if(guess<1){
        displayMessage("The number is smaller");
    }
    else if(guess === randomNumber){
        displayMessage("You guessed it right");
    }
}

const displayMessage=(message)=>{
    result.innerHTML = `<h1>${message}</h1>`
}

const updateGuess=(guess)=>{
    userInput.value = '';
    allGuesses.innerHTML += `${guess}, `;
    guessNumber++;
    remainingGuesses.innerHTML = `${11 - guessNumber}`
}

const endGame=()=>{
    userInput.value = '';
    userInput.setAttribute('disabled','');

    //creating a button for start the new game
    // this 'p' is created globally at line number 16
    p.classList.add('button')
    p.innerHTML = `<h2 id="startGame">Start New Game</h2>`
    // here we are replace the resultPara with the globally declared 'p' to show only the start new game button
    startAgain.appendChild(p);

    let startButton = document.querySelector('#startGame');
    startButton.style.color = 'red';
    startButton.style.border='2px solid red';
    startButton.style.borderRadius='12px';
    startButton.style.padding='15px';
    startButton.style.display='flex';
    startButton.style.justifyContent='center';

    playGame = false;

    newGame();
}
const newGame=()=>{
    let startNewGameButton = document.querySelector('#startGame');
    // here after clicking the start new game button we want everything get reset for a fresh start for the user
    startNewGameButton.addEventListener('click',(e)=>{
        // create new random number for new game
        randomNumber = Math.round(Math.random()*100+1);
        // clear the previous guess array for the new game
        guessArray = [];
        // setting the number of guess to 1
        guessNumber = 1;
        // we need to clear all the guess which are show in the page which came from the allGuesses array
        allGuesses.innerHTML = ''
        // we need to reset the remaining guesses for the new game
        remainingGuesses.innerHTML = `${11 - guessNumber}`
        // we need to clear the disabled attribute from the userInput
        userInput.removeAttribute('disabled')

        // now we need to remove the child which is added in the endGame function to show the start new game button
        startAgain.removeChild(p)

        //now we need to set the game to true
        playGame = true
    })
}