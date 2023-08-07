'use strict';

// Selecting elements

let random = 0;
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const players = document.querySelectorAll('.player');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const arr = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];
const diceImg = document.querySelector('.dice');
const currentScore = document.querySelectorAll('.current--score');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const scoreAll = document.querySelectorAll('.score');

scoreAll.forEach(sc => sc.innerText = 0) ;



const showDiceImg = function(){
  random = Math.floor(Math.random() * 5 + 1);
  const generatedDiceImg = arr.filter(dc => dc.includes(random)).toString();
  diceImg.setAttribute('src', generatedDiceImg);
  }

const cumulateScores = function() {
  let sum = 0;
  if(random !== 1) {
sum += random;
if(player0.classList.contains('player--active')) {
  currentScore0.innerText = Number(currentScore0.innerText) + sum;
  } else{
    currentScore1.innerText = Number(currentScore1.innerText) + sum;
  }

} else{ 
if(player0.classList.contains('player--active')) {
  currentScore0.innerText = 0;
} else{
  currentScore1.innerText = 0;
}
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
}


const rolTheDiceFunc = function() {
  diceImg.classList.remove('hidden'); 
  showDiceImg();
  cumulateScores();
}

rollDice.addEventListener('click', rolTheDiceFunc);


const holdFunc = function() {
  if(player0.classList.contains('player--active')) {
    score0.innerText = Number(score0.innerText) + Number(currentScore0.innerText);
    currentScore0.innerText = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  
  } else {
    score1.innerText = Number(score1.innerText) + Number(currentScore1.innerText);
    currentScore1.innerText = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
  
  if(Number(score0.innerText) > 49) {
  player0.classList.add('player--winner');
  rollDice.removeEventListener('click', rolTheDiceFunc);
  hold.removeEventListener('click', holdFunc);

  } else if(Number(score1.innerText) > 49){
    player1.classList.add('player--winner');
    rollDice.removeEventListener('click', rolTheDiceFunc);
    hold.removeEventListener('click', holdFunc);
  }
  }
  

hold.addEventListener('click', holdFunc );

newGame.addEventListener('click', function(){
  score0.innerText = 0;
  score1.innerText = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  diceImg.classList.add('hidden');

});
