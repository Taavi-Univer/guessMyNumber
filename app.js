const again = document.getElementById("again");
const check = document.getElementById("check");
const message = document.getElementById("message");
const score = document.getElementById("score");
const highScore = document.getElementById("highScore");

let randomNumber = Math.floor(Math.random() * 20 + 1);

let scoreNumber = parseInt(score.innerHTML);
let highScoreNumber = parseInt(highScore.innerHTML);

function checkButton() {
  let number = document.querySelector("#number").value;

  if (number < randomNumber) {
    message.innerHTML = "Too low";
    scoreNumber--;
    score.innerHTML = scoreNumber;
  } else if (number > randomNumber) {
    message.innerHTML = "Too high";
    scoreNumber--;
    score.innerHTML = scoreNumber;
  } else {
    message.innerHTML = "Correct number";
    document.body.style.background = "blue";

    if (scoreNumber > highScoreNumber) {
      scoreNumber--;
      score.innerHTML = scoreNumber;
      highScoreNumber = scoreNumber;
      highScore.innerHTML = scoreNumber;
    }
  }
}

check.addEventListener("click", checkButton);

function resetValues() {
  document.querySelector("#number").value = "";
  message.innerHTML = "Start guessing ...";
  score.innerHTML = 20;
  scoreNumber = 20;
  document.body.style.background = "black";
  randomNumber = Math.floor(Math.random() * 20 + 1);
}

again.addEventListener("click", resetValues);
