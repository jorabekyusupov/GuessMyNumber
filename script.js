'use strict';

// buttons
let btnAgian = document.querySelector('.again');
let btnCheck = document.querySelector('.check');

//input
let inpGuess = document.querySelector('.guess');

//Text content
let randomNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

//Random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// randomNumber.textContent = secretNumber;

//defalt values
let defScore = 20;
let defhighScore = 0;

const displayMessage = function (msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


btnCheck.addEventListener('click', function () {
    let checkNum = Number(inpGuess.value);
    // console.log();
    if (!checkNum) {
        displayMessage('no Number !!', 'red');
    }
    else if (checkNum === secretNumber) {
        displayMessage('Correct Number !', 'green');
        randomNumber.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        randomNumber.style.width = '30rem';
        if (defScore > defhighScore) {
            defhighScore = defScore;
            highScore.textContent = defhighScore;
        }
    }
    else if (checkNum !== secretNumber) {
        if (defScore > 1) {
            displayMessage(checkNum > secretNumber ? 'To high !' : 'To low !', 'red');
            defScore--;
            score.textContent = defScore;
        }
        else {
            displayMessage(' You lost the game!', 'red');
            score.textContent = 0;
        }
    }
});

btnAgian.addEventListener('click', function () {
    defScore = 20;
     secretNumber = Math.trunc(Math.random() * 20 + 1);
    //  randomNumber.textContent = secretNumber;
    displayMessage('Start guessing...');
    score.textContent = defScore;
    randomNumber.textContent = '?';
    inpGuess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    inpGuess.style.width = '15rem';
});
