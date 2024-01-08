let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Heads") {
    if (computerMove === "Tails") {
      result = "You lose.";
    } else if (computerMove === "Heads") {
      result = "You win.";
    }
  } else if (playerMove === "Tails") {
    if (computerMove === "Tails") {
      result = "You win.";
    } else if (computerMove === "Heads") {
      result = "You lose.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You ${playerMove} - ${computerMove} Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} `;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let ComputerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 5) {
    computerMove = "Heads";
  } else if (randomNumber >= 1 / 5 && randomNumber < 2) {
    computerMove = "Tails";
  }
  return computerMove;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
  };
  localStorage.removeItem("score");
  updateScoreElement();
}
