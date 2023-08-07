'use strict'

// let secretNumber = Math.trunc(Math.random() *20) +1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function(message){
// document.querySelector('.message').textContent = message;
// }



// document.querySelector('.check').addEventListener('click', function() {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

// // When there is no input

//   if(!guess) {
//    displayMessage('No number!')
//   } 
  
//   // When guess is equal
//   else if (guess === secretNumber) {
   
//     displayMessage('Correct number');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if(score > highScore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if(guess !== secretNumber){
//     if(score > 1) {
//       // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!': 'Too low!';
//       displayMessage(guess > secretNumber ? 'Too high!': 'Too low!');
//        score--;
//       document.querySelector('.score').textContent = score;
//       } else {
//         // document.querySelector('.message').textContent = 'You lost the game!';
//         displayMessage('You lost the game!');
//         document.querySelector('.score').textContent = 0;
//       }
//   }

//   document.querySelector('.again').addEventListener('click', function() {
//     displayMessage('Start Guessing');
//     score = 20;
//     secretNumber =  Math.trunc(Math.random() *20) +1;
//     document.querySelector('.score').textContent = 'score';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('body').style.backgroundColor =  '#222';
//     document.querySelector('.number').style.width = '15rem';
    
//   });

const guessNumber = document.querySelector('.guess')
const randomNumber = Math.floor(Math.random() * 19) + 1;
const secretNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
secretNumber.value = randomNumber;
console.log(secretNumber.value);



document.querySelector('.check').addEventListener('click', function() {
 if(Number(guessNumber.value) === secretNumber.value) {
message.innerText = "🎉 Correct Number!";
document.body.style.backgroundColor = '#60b347';
secretNumber.innerText = secretNumber.value;
if(Number(highScore.innerText) < Number(score.innerText)){
highScore.innerText = score.innerText;
}

 } else if(Number(guessNumber.value) > secretNumber.value) {
  message.innerText = "📈 Too high!";
  score.innerText = Number(score.innerText) - 1;
 } else{
  message.innerText = "📉 Too low!";
  score.innerText = Number(score.innerText) - 1;

 }
}
);

document.querySelector('.again').addEventListener('click', function() {
  secretNumber.innerText = '?';
  guessNumber.value = '';
  score.innerText = '20';
  message.innerText = 'Start guessing...';

});


