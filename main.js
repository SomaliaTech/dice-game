"use strict";

const score1 = document.querySelector("#player_0_score");
const score2 = document.querySelector("#player_1_score");
const currentScore1 = document.querySelector("#current_score_1");
const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const currentScore0 = document.querySelector("#current_score_0");
const dice_image = document.querySelector(".dice_images");
const btnNewGame = document.querySelector(".new_game");
const btnRoleDice = document.querySelector(".role_dice");
const btnHoldDice = document.querySelector(".hold_dice");

dice_image.classList.add("hidden");
let currentScore = 0;
let scoreElm0 = (score1.textContent = 0);
let scoreElm1 = (score2.textContent = 0);
let scores = [0, 0];
let activePlayer = 0;
let isPlaying = true;
btnRoleDice.addEventListener("click", function () {
  if (isPlaying) {
    const random = Math.trunc(Math.random() * 6) + 1;

    dice_image.classList.remove("hidden");
    dice_image.src = `dice_${random}.png`;

    /// 3 check for rolled
    if (random !== 1) {
      ///add to the current score
      currentScore = currentScore + random;
      document.getElementById(`current_score_${activePlayer}`).textContent =
        currentScore;
      // currentScore0.textContent = currentScore;
    } else {
      document.getElementById(`current_score_${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerEl0.classList.toggle("active");
      playerEl1.classList.toggle("active");
      //switch to next player
    }
  }
});

btnHoldDice.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    console.log(scores);
    currentScore = 0;
    document.getElementById(`current_score_${activePlayer}`).textContent = 0;

    document.getElementById(`player_${activePlayer}_score`).textContent =
      scores[Number(activePlayer)];
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player-winer");
    } else {
      activePlayer = activePlayer === 1 ? 0 : 1;
      playerEl0.classList.toggle("active");
      playerEl1.classList.toggle("active");
    }
  }
  // if (
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.contains("active")
  // ) {
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove("active");
  // } else {
  //   // document.querySelector(`.player--${activePlayer}`).classList.add("acitve");
  // }
});

btnNewGame.addEventListener("click", function () {
  scoreElm0 = score1.textContent = 0;
  scoreElm1 = score2.textContent = 0;
  document.getElementById(`player_0_score`).textContent = 0;
  document.getElementById(`player_1_score`).textContent = 0;
  scores = [0, 0];
  isPlaying = true;
  activePlayer = 0;
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  playerEl0.classList.add("active");
  playerEl1.classList.remove("active");
  playerEl0.classList.remove("player-winer");
  playerEl1.classList.remove("player-winer");
});
