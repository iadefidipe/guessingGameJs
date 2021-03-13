'use strict';

/**  console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13

document.querySelector('.score').textContent = 4;

document.querySelector('.guess').value = 46; **/

//function expression to generate random number between 1-20
const randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const answer = randomInteger(1, 20);

let score = 20;


// DOM query activate when user clicks on the check button
document.querySelector('.check').addEventListener('click', function (){
    //the guess variable recieves the value inputed in the element, which is converted to a number, because the .value method returns a string
    const guess= Number(document.querySelector('.guess').value);
    


    if (guess >= 0 && guess <=20) {
        if (answer === guess){
            console.log( document.querySelector('.message').textContent = 'Correct guess' );
            // console.log(
            // (document.querySelector('.again').textContent = 'Correct!')
            // );
            document.querySelector('.number').textContent = answer;
            document.querySelector('.score').textContent= score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            
        }
        
        //if user inputs an empty sting 
        else if(!guess){
            document.querySelector('.message').textContent = 'You have not inputed a guess';
        }
        // else if (guess > 10 || guess < 5){
        //     document.querySelector('.message').textContent = 'Try a number between 1- 20';
        // }
        else if(guess < answer ){
            if (score > 1){
                score--;
                document.querySelector('.score').textContent= score;
                
                document.querySelector('.message').textContent = 'Too low';
            }else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent= 0;
            }
                
            

        }
        else if(guess > answer) {
            if (score > 1){
                score--;
                document.querySelector('.score').textContent= score;
                document.querySelector('.message').textContent = 'Too high';
            }else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent= 0;
            }
        }
    }
    // else{
    //     document.querySelector('.message').textContent = 'Keep guessing';
    //     console.log(document.querySelector('.number').textContent = answer);
    // }
} )

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent= 'Start guessing...';
    document.querySelector('.message').textContent= 'Start guessing..';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})






