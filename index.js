let rulesBtn = document.getElementById("rules");
let rulePage = document.getElementById("rules-page");
let ruleImg = document.getElementById("rules-img");
let ruleP = document.getElementById("rules-p");
let bodyEl = document.body;
let mainEl = document.getElementById("main");
let topEl = document.getElementById("top");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let rockEl = document.getElementById("rock");
let demoEl;
let winnerEl = document.getElementById("winner");
let first;
let second;
let scoreNum = document.getElementById("score-num");
let scoreInt = parseInt(scoreNum.textContent);
let resultEl = document.getElementById("result");
let playAgain = document.getElementById("again");

var click = new Audio("musics/click.wav");
var win = new Audio("musics/win.mp3");
var lose = new Audio("musics/lose.wav");
var draw = new Audio("musics/draw.wav");

const hands = ["paper", "scissors", "rock"];

function game() {
  click.play();
  rand = Math.ceil(Math.random() * 3);
  if (rand == 1) {
    demoEl.innerHTML = '<div class="choose-paper-div"><img src="images/icon-paper.svg" alt="paper" class="choose-paper"></div>';
    second = "paper";
  } else if (rand == 2) {
    demoEl.innerHTML = '<div class="choose-scissors-div"><img src="images/icon-scissors.svg" alt="scissors" class="choose-scissors"></div>';
    second = "scissors";
  } else {
    demoEl.innerHTML = '<div class="choose-rock-div"><img src="images/icon-rock.svg" alt="rock" class="rock-paper"></div>';
    second = "rock";
  }
  demoEl.style.padding = "0";
  demoEl.style.backgroundColor = "transparent";
  const myTimeout = setTimeout(gameResult, 1000);
};

function gameResult() {
  if ((first == "paper" && second == "rock") || (first == "scissors" && second == "paper") || (first == "rock" && second == "scissors")) {
    scoreInt += 1;
    resultEl.innerHTML = "YOU WIN!";
    win.play();
  } else if ((first == "paper" && second == "scissors") || (first == "scissors" && second == "rock") || (first == "rock" && second == "paper")) {
    if (scoreNum.innerHTML > 0) {
      scoreInt -= 1;
    }
      resultEl.innerHTML = "YOU LOSE!";
      lose.play();
  } else {
      resultEl.innerHTML = "DRAW!";
      draw.play();
    }
  winnerEl.style.display = "block";
  scoreNum.innerHTML = String(scoreInt);
}

function paperGame() {
  click.play();
  if (window.innerWidth > 600) {
    topEl.style.margin = "1% 25% 5% 25%";
  } else if (window.innerWidth < 600) {
    topEl.style.margin = "5% 5% 10% 10%";
  }
  first = "paper";
  mainEl.innerHTML = '<table class="main-table"><tr><td>YOU PICKED</td><td>THE HOUSE PICKED</td></tr><tr><td><div class="choose-paper-div"><img src="images/icon-paper.svg" alt="paper" class="choose-paper"></div></td><td class="demo" id="demo"></td></tr></table>';
  demoEl = document.getElementById("demo");
  const myTimeout = setTimeout(game, 2000);
}

function scissorsGame() {
  click.play();
  if (window.innerWidth > 600) {
    topEl.style.margin = "1% 25% 5% 25%";
  } else if (window.innerWidth < 600) {
    topEl.style.margin = "5% 5% 10% 10%";
  }
  first = "scissors";
  mainEl.innerHTML = '<table class="main-table"><tr><td>YOU PICKED</td><td>THE HOUSE PICKED</td></tr><tr><td><div class="choose-scissors-div"><img src="images/icon-scissors.svg" alt="scissors" class="choose-scissors"></div></td><td class="demo" id="demo"></td></tr></table>';
  demoEl = document.getElementById("demo");
  const myTimeout = setTimeout(game, 2000);
}

function rockGame() {
  click.play();
  if (window.innerWidth > 600) {
    topEl.style.margin = "1% 25% 5% 25%";
  } else if (window.innerWidth < 600) {
    topEl.style.margin = "5% 5% 10% 10%";
  }
  first = "rock";
  mainEl.innerHTML = '<table class="main-table"><tr><td>YOU PICKED</td><td>THE HOUSE PICKED</td></tr><tr><td><div class="choose-rock-div"><img src="images/icon-rock.svg" alt="rock" class="choose-rock"></div></td><td class="demo" id="demo"></td></tr></table>';
  demoEl = document.getElementById("demo");
  const myTimeout = setTimeout(game, 2000);
}

document.addEventListener("click", function(event) {
  if (rulePage.style.display == "block") {
    if (event.srcElement.id != "rules-page" && event.srcElement.id != "rules" && event.srcElement.id != "rules-img" && event.srcElement.id != "rules-p") {
      rulePage.style.display = "none";
      bodyEl.style.backgroundImage = "linear-gradient(hsl(214, 47%, 23%), hsl(214, 49%, 15%))";
    }
  }
});

playAgain.addEventListener("click", function() {
  if (window.innerWidth > 600) {
    topEl.style.margin = "1% 25% 10% 25%";
  } else if (window.innerWidth < 600) {
    topEl.style.margin = "5% 5% 40% 10%";
  }
  mainEl.innerHTML = '<img src="images/bg-triangle.svg" alt="triangle" class="triangle"><div class="paper-div"><img src="images/icon-paper.svg" alt="paper" class="paper" id="paper"></div><div class="scissors-div"><img src="images/icon-scissors.svg" alt="scissors" class="scissors" id="scissors"></div><div class="rock-div"><img src="images/icon-rock.svg" alt="rock" class="rock" id="rock"></div>'
  paperEl = document.getElementById("paper");
  scissorsEl = document.getElementById("scissors");
  rockEl = document.getElementById("rock");
  winnerEl.style.display = "none";
  paperEl.addEventListener("click", paperGame);
  scissorsEl.addEventListener("click", scissorsGame);
  rockEl.addEventListener("click", rockGame);
});

rulesBtn.addEventListener("click", function() {
  rulePage.style.display = "block";
  bodyEl.style.backgroundImage = "linear-gradient(hsl(214, 49%, 15%), hsl(237, 51%, 8%))";
});

paperEl.addEventListener("click", paperGame);

scissorsEl.addEventListener("click", scissorsGame);

rockEl.addEventListener("click", rockGame);
