"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number is checked!";
  } else if (guess === secretNumber && score === 10) {
    document.querySelector(".message").textContent =
      "Yayyy! Correct Number in ONE GO!!!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Yayyy! Correct Number!!!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent =
      "Sorry! its Higher than my Secret Number, Try again!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent =
      "Sorry! its lower than my Secret Number, Try again!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
