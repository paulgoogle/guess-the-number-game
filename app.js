let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

updateRange = () =>{
  const rangeOutput = document.getElementById('rangeOutput');
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginLeft = low +'%';
  rangeOutput.style.marginRight = 100 - high +'%';
  rangeOutput.classList.add('flash');


  const lowValue = document.getElementById('low');
  lowValue.style.flex = low + '%';
  lowValue.style.background = '#ef7b54';
  const space = document.getElementById('space');
  space.style.flex = high - low + '%';
  space.style.background = '#83e1d0';
  const highValue = document.getElementById('high');
  highValue.style.flex = 100 - high + '%';
  highValue.style.background = '#ef7b54';
};

gameEnded = () =>{
  document.getElementById('newGame').style.display = 'inline';
  document.getElementById('inputBox').setAttribute('readonly', 'readonly');
};

newGame = () =>{
  window.location.reload();
}


init = () => {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  document.getElementById('newGame').style.display = 'none';
  document.getElementById('gameArea').style.display = 'none';
};

startGameView = () =>{
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
};

easyMode = () =>{
  maxGuesses = 10;
  startGameView();
};

hardMode = () =>{
  maxGuesses = 5;
  startGameView();
};

compareGuess = () =>{
  const userGuess = Number(document.getElementById('inputBox').value);
  userGuesses.push(' ' + userGuess);
  document.getElementById('guesses').innerHTML = userGuesses;

  attempts++;
  document.getElementById('attempts').innerHTML = attempts;

  if(attempts < maxGuesses){
    if(userGuess > computerGuess){
      if(userGuess < high)high = userGuess;
      document.getElementById('textOutput').innerHTML = 'Your guess is too high!'
      document.getElementById('inputBox').value = '';
    } else if (userGuess < computerGuess) {
      if(userGuess > low) low = userGuess;
      document.getElementById('textOutput').innerHTML = 'Your guess is too low!'
      document.getElementById('inputBox').value = '';
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + ' attempts';
      gameEnded();
    }
  } else{
    if(userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML = 'You lose! <br> The number was ' +computerGuess;
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById('textOutput').innerHTML = 'You lose! <br> The number was ' +computerGuess;
      gameEnded();
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + ' attempts';
      gameEnded();
    }
  }
 updateRange();
  
}















