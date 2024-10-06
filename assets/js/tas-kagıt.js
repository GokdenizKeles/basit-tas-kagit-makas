let computerChoice = ['rock', 'paper', 'scissors'].at(
  Math.floor(Math.random() * 3)
);
console.log(computerChoice);
let userChoice = prompt('rock,paper,scissors' + ' ' + 'Letss Playy');
if (computerChoice === 'rock' && userChoice === 'rock') {
  alert("Tie");
} else if (computerChoice === 'rock' && userChoice === 'paper') {
  alert("Win");
} else if (computerChoice === 'rock' && userChoice === 'scissors') {
  alert("Lose");
} else if (computerChoice === 'paper' && userChoice === 'paper') {
  alert("Tie");
} else if (computerChoice === 'paper' && userChoice === 'scissors') {
  alert("Win");
} else if (computerChoice === 'paper' && userChoice === 'rock') {
  alert("Lose");
} else if (computerChoice === 'scissors' && userChoice === 'paper') {
  alert("Lose");
} else if (computerChoice === 'scissors' && userChoice === 'scissors') {
  alert("Tie");
} else if (computerChoice === 'scissors' && userChoice === 'rock') {
  alert('Win');
} else {
  alert ('Please enter a valid game command')
}
