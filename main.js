// varibles
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

// Array
let guesses = [];

const guess = document.querySelector('#guess');
const submit = document.querySelector('#submit');
const validGuess = document.querySelector('#validGuess');
const guessesList = document.querySelector('#guessesList');


// Event listners

submit.addEventListener('click', checkedGuess);

//functions

function checkedGuess() {
    const userGuess = Number(guess.value);
    
    
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        validGuess.textContent = "!! Enter a valid number between 1 and 100! !!";
        validGuess.style.color = 'red'
        return;
    }

    attempts++;
    guesses.push(userGuess);
    updateGuessesDisplay();
    
            if(userGuess < randomNum) {
                validGuess.textContent = 'Too low, try again'
                validGuess.style.color = 'black'
            }
            else if(userGuess > randomNum){
                validGuess.textContent = 'Too high, try again'
                validGuess.style.color = 'black'
            }
            else{
                validGuess.textContent = `Congratulations! The correct answer was ${randomNum}. It took you ${attempts} attempts!`;
                validGuess.style.color = 'green'
            }
        }


function updateGuessesDisplay() {
    guessesList.innerHTML = '';
    guesses.forEach(guess => {
        let li = document.createElement('li');
        li.textContent = guess;
        guessesList.appendChild(li);
    });
}
