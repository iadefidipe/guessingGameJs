'use strict';

/**  console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13

document.querySelector('.score').textContent = 4;

document.querySelector('.guess').value = 46; **/

const randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.querySelector('.check').addEventListener('click', function (){
    const guess= Number(document.querySelector('.guess').value);
    console.log(document.querySelector('.guess').value);
    const answer = randomInteger(1, 20);

    if (answer === guess){
        console.log( document.querySelector('.message').textContent = 'Correct guess' );
        console.log(
        (document.querySelector('.again').textContent = 'Correct!')
        );
        console.log(document.querySelector('.number').textContent = answer);
    }
    else if(!guess){
        console.log( document.querySelector('.message').textContent = 'You have not inputed a guess')
    }
    else if (guess > 10 || guess < 5){
        document.querySelector('.message').textContent = 'Try a number between 1- 20';
    }
    else{
        document.querySelector('.message').textContent = 'Keep guessing';
        console.log(document.querySelector('.number').textContent = answer);
    }
} )




