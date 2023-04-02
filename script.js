'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score,currentScore,activePlayer,playing;

//starting condition


const init=function(){

  
   score = [0, 0];
   currentScore = 0;
  activePlayer = 0;
   playing = true;

  score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent=0
  current1El.textContent=0

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')

}
init();

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// diceEl.classList.remove('hidden');
//Roll btn functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for rolled 1:if true,switch to next player
    if (dice !== 1) {
      //add disc to the current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent=currentScore;
    } else {
      //switch to next player
      swithPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if(playing){

  
  //1.Add current score to active player's score
  score[activePlayer] += currentScore;
  // score[1]=score[1]+currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  //2.Check if players score is >=100
  //Finish the game
  if (score[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //switch to next player
    swithPlayer();
  }
}
});
btnNew.addEventListener('click',init
  
)
