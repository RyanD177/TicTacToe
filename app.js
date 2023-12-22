const gameSquares = document.querySelectorAll(".game-square");

let boardWidth = 3;
let currentPlayer = 1;
let numMovesDone = 0;
let boardState = generateEmptyBoardState();
let gameHeading = document.getElementById("game-heading");
let restartButton = document.getElementById('restart-button')


gameSquares.forEach((gameSquare, i) => {
 gameSquare.addEventListener('click', ()  => {
  const row = Math.floor(i / boardWidth);
  const col = Math.floor(i % boardWidth);
  makeMove(gameHeading, row, col);

 })




})

restartButton.addEventListener('click', restartGame);


function makeMove(gameSquare, row, col) {
 
 
  gameSquare.disabled = true; 
  numMovesDone++





}

function changePlayerHeading() {
gameHeading.textContent = `It is ${currentPlayer} turn`

}

function didPlayerWin(currentPlayer) {


}
 
  
  


function endGame() {


}
function restartGame(){

}

function generateEmptyBoardState() {

}

