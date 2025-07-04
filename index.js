let rand;
let attempts;
let lastScore = 0;
let maxScore = 0;
const inputBox = document.getElementById('inp');
const lastScoreBox = document.getElementById('lastscore');
const attemptsBox = document.getElementById('attempts');
const attemptsContainer = document.getElementById('attemptsContainer');
const remarksBox = document.getElementById('remarks');
const maxScoreBox = document.getElementById('maxScore');
const checkBox = document.getElementById('check');

const startGame = () => {
  rand = Math.floor(Math.random() * 100 + 1);
  attempts = 20;
  console.log(rand);
  checkBox.style.display = 'block';
  attemptsContainer.style.display = 'block';
  inputBox.value = '';
  remarksBox.innerText = '';
  attemptsBox.innerText = String(attempts);
  lastScoreBox.innerText = String(lastScore);
  maxScoreBox.innerText = String(maxScore);
};

const endGame = (won) => {
  checkBox.style.display = 'none';
  if (won == true) {
    attemptsContainer.style.display = 'none';
    remarksBox.innerText = "You've Guessed the Correct Number";
    lastScoreBox.innerText = String(lastScore);
    maxScoreBox.innerText = String(maxScore);
  } else {
    remarksBox.innerText = `You've lost the game. The Correct Number is ${rand}`;
    attemptsBox.innerText = String(attempts);
  }
};

const max = (a, b) => (a > b ? a : b);

const checkRand = () => {
  const inputNumber = document.getElementById('inp');
  if (inputNumber.value == '') {
    alert('Enter the valid input');
    return;
  }
  
  const inp = Number(inputNumber.value);
  if (inp < 0 || inp > 100) {
    alert('Enter the number between 1 to 100');
    return;
  }

  if (inp === rand) {
    lastScore = attempts;
    maxScore = max(maxScore, attempts);
    endGame(true);
  } else {
    attempts = attempts - 1;
    if (attempts == 0) {
      endGame(false);
    } else {
      document.getElementById('attempts').innerText = String(attempts);
      const remark = inp > rand ? 'higher' : 'lower';
      document.getElementById(
        'remarks'
      ).innerText = `The number is ${remark} than random Number`;
    }
  }
};

startGame();
