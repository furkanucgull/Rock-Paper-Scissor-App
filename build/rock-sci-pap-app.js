const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissor = document.querySelector('.btn-scis');
const btnReset = document.querySelector('.btn-reset');
const showScore = document.querySelector('.js-score');
const showResult = document.querySelector('.js-result');
const showMoves = document.querySelector('.js-moves');
let random = '';
let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.setItem('score', JSON.stringify(score));
}
updateScore();
btnReset.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  alert('Scores has been reset');
  updateScore();
});
btnRock.addEventListener('click', () => {
  playGame('Rock');
});
btnPaper.addEventListener('click', () => {
  playGame('Paper');
});
btnScissor.addEventListener('click', () => {
  playGame('Scissor');
});
//5saat 11dk
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === computerMove) {
    result = 'Tie';
  } else if (
    (playerMove === 'Rocks' && computerMove === 'Scissor') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissor' && computerMove === 'Paper')
  ) {
    result = 'You Win';
  } else {
    result = 'You Lose';
  }
  if (result === 'You Win') {
    score.wins += 1;
  }
  if (result === 'You Lose') {
    score.losses += 1;
  }
  if (result === 'Tie') {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  showResult.innerHTML = ` ${result}`;
  showMoves.innerHTML = `You  have picked ${playerMove} - Computer has picked ${computerMove}`;
}
function updateScore() {
  showScore.innerHTML = `Scores is:  Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;
}
function pickComputerMove() {
  let result = '';
  let computerMove = '';
  const randomNumber = Math.random();
  random = randomNumber;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissor';
  }
  return computerMove;
}
