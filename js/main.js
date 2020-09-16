// Created by House Gardner
document.getElementById('rock').onclick=userPlaysRock
document.getElementById('paper').onclick=userPlaysPaper
document.getElementById('scissors').onclick=userPlaysScissors
document.getElementById('lizard').onclick=userPlaysLizard
document.getElementById('spock').onclick=userPlaysSpock

function userPlaysSpock(){
let choice = 'Spock'
fetch(`/api?choice=${choice}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
  document.querySelector('#botChoice').innerHTML=(`Bot Choice : ${data.botChoice}`)
  document.querySelector('#userChoice').innerHTML=(`User Choice : ${data.userChoice}`)
  document.querySelector('#result').innerHTML=(`Winner: ${data.winner}`)
  document.querySelector('#cScore').innerHTML=(`Computer Score: ${data.cScore}`)
  document.querySelector('#pScore').innerHTML=(`Player Score: ${data.pScore}`)
  });
};

function userPlaysLizard(){
let choice = 'Lizard'
fetch(`/api?choice=${choice}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
  document.querySelector('#botChoice').innerHTML=(`Bot Choice : ${data.botChoice}`)
  document.querySelector('#userChoice').innerHTML=(`User Choice : ${data.userChoice}`)
  document.querySelector('#result').innerHTML=(`Winner: ${data.winner}`)
  document.querySelector('#cScore').innerHTML=(`Computer Score: ${data.cScore}`)
  document.querySelector('#pScore').innerHTML=(`Player Score: ${data.pScore}`)
  });
};

function userPlaysPaper(){
let choice = 'Paper'
fetch(`/api?choice=${choice}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
  document.querySelector('#botChoice').innerHTML=(`Bot Choice : ${data.botChoice}`)
  document.querySelector('#userChoice').innerHTML=(`User Choice : ${data.userChoice}`)
  document.querySelector('#result').innerHTML=(`Winner: ${data.winner}`)
  document.querySelector('#cScore').innerHTML=(`Computer Score: ${data.cScore}`)
  document.querySelector('#pScore').innerHTML=(`Player Score: ${data.pScore}`)
  });
};

function userPlaysRock(){
let choice = 'Rock'
fetch(`/api?choice=${choice}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
  document.querySelector('#botChoice').innerHTML=(`Bot Choice : ${data.botChoice}`)
  document.querySelector('#userChoice').innerHTML=(`User Choice : ${data.userChoice}`)
  document.querySelector('#result').innerHTML=(`Winner: ${data.winner}`)
  document.querySelector('#cScore').innerHTML=(`Computer Score: ${data.cScore}`)
  document.querySelector('#pScore').innerHTML=(`Player Score: ${data.pScore}`)
  });
};

function userPlaysScissors(){
let choice = 'Scissors'
fetch(`/api?choice=${choice}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
  document.querySelector('#botChoice').innerHTML=(`Bot Choice: ${data.botChoice}`)
  document.querySelector('#userChoice').innerHTML=(`User Choice: ${data.userChoice}`)
  document.querySelector('#result').innerHTML=(`Winner: ${data.winner}`)
  document.querySelector('#cScore').innerHTML=(`Computer Score: ${data.cScore}`)
  document.querySelector('#pScore').innerHTML=(`Player Score: ${data.pScore}`)
  });
};

// function randomChoice(){
//   let randomNumber = Math.ceil(Math.random() * 5)
//   let weapon;
//   if(randomNumber < .19){
//     weapon = 'paper'
//   }
// }
//
// let userScore = 0;
// let computerScore = 0
//
// function checkWinner(playerOne, playerComputer){
//  if(playerOne==playerComputer){
// //its a tie. try again
// }else if(
//    (playerOne == paper && playerComputer == rock) ||
//    (playerOne == paper && playerComputer == spock) ||
//    (playerOne == rock && playerComputer == scissors) ||
//    (playerOne == rock && playerComputer == lizard) ||
//    (playerOne == lizard && playerComputer == paper) ||
//    (playerOne == lizard && playerComputer == spock) ||
//    (playerOne == spock && playerComputer == scissors) ||
//    (playerOne == spock && playerComputer == rock) ||
//    (playerOne == scissors && playerComputer == paper) ||
//    (playerOne == scissors && playerComputer == lizard)
//     ){
//   // return 'You win'
//   // userCount++
// } else if(choice == paper && userChoice == rock){
//   return 'Computer wins'
//   computerCount++
// } else if (choice == paper && userChoice == spock){
//   return 'Computer wins'
//   userCount++
// } else if(choice == rock )
