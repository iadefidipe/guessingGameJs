'use strict';

/**  
// ==== accessing the text content of an element via the DOM
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 4;

// ==== to get the value of an element, like the iput field element, via the DOM 
document.querySelector('.guess').value = 46; **/

//  An event is anything that happens on a webpage

// document.querySelector('.check').addEventListener ('click', functon())
// first parameter of the addEventListener = type of event
//  second parameter of the addEventListener = EVENT HANDLER


//TODO: function expression to generate random number between 1-20
const randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: intializes secret number
const secretNumber = randomInteger(1, 20);

// TODO: its is advisable to store varibles needed by the DOM and not let DOM automatically hold those values to avoid bugs
let score = 20;
let highScore =0;

// message function
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// TODO: DOM query activate when user clicks on the check button
document.querySelector('.check').addEventListener('click', function (){

    // TODO: the guess variable recieves the value inputed in the HTML Input element, which is converted to a number, because the .value method returns a string. **** most values gotten from the webpage inputs are returned in sting****
    const guess= Number(document.querySelector('.guess').value);
    

// TODO: ensuring that the guess numbe is between 1-10
    if (guess >= 1 && guess <=20) {

        // TODO: if player guesses correct number
        if (secretNumber === guess){
            
            displayMessage('Correct guess');
            
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent= score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent= highScore;
            }
            
        }
        
        // TODO: if user inputs an empty sting 
        else if(!guess){
            
            displayMessage('🛑 Not a number');
        }

        // TODO: when the player guess is incorrect
        else if(guess !== secretNumber){

            // TODO: game message shows if wrong guess is higher or lower than secret number
            if (score > 1){
                score--;
                document.querySelector('.score').textContent= score;
                displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            }
            // TODO: when player loses the game that is score = 0
            else{
                displayMessage('You lost the game, Click the Again! button to play again');
                document.querySelector('.score').textContent= 0;
                document.querySelector('body').style.backgroundColor ='#EE4B2B';
                document.querySelector('.number').textContent = secretNumber;
                
            }
        }
    
    }
    //  TODO: if player input anything other than a number between 1 - 20
    else{
        document.querySelector('.message').textContent = 'Number should between 1 -20';
        
    }
} )

// TODO: when the again button is press, game resets
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    highScore=0;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = '0';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})








