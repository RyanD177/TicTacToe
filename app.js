const gameSquares = document.querySelectorAll(".game-square");

let boardWidth = 3;
let currentPlayer = 1;
let numMovesDone = 0;
let boardState = generateEmptyBoardState();
let gameHeading = document.getElementById("game-heading");
let restartButton = document.getElementById('restart-button')


gameSquares.forEach((gameSquare, i) => {
  gameSquare.addEventListener('click', () => {
    const row = Math.floor(i / boardWidth);
    const col = i % boardWidth;
  
    makeMove(gameSquare, row, col)
  


  })


})

restartButton.addEventListener('click', restartGame);


function makeMove(gameSquare, row, col) {
  gameSquare.textContent = currentPlayer === 1 ? "X" : "O"
  gameSquare.disabled = true;

  boardState[row][col] = currentPlayer;
  numMovesDone++

  if(didPlayerWin(currentPlayer)){
    gameHeading.textContent = `Player ${currentPlayer} Won`
    endGame();
  }else if(numMovesDone>= boardWidth * boardWidth){
    gameHeading.textContent = `tie game`
    endGame();
  }else{
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    changePlayerHeading()

  }


}

function changePlayerHeading() {
gameHeading.textContent = `Player ${currentPlayer} Turn`

}

function didPlayerWin(currentPlayer) {

    const rows = [0,1,2]
  const wonHoriztonal = rows.some(row => {
    return (
      boardState[row][0] === currentPlayer &&
      boardState[row][1] === currentPlayer &&
      boardState[row][2] === currentPlayer 
    )
  })
  const cols = [0,1,2];
  
  const wonVertical = cols.some(col => {
    return (
      boardState[0][col] === currentPlayer &&
      boardState[1][col] === currentPlayer &&
      boardState[2][col] === currentPlayer 
    )
  })

  const wonTopLeftBottomRight = (
    boardState[0][0] === currentPlayer && 
    boardState[1][1] === currentPlayer && 
    boardState[2][2] === currentPlayer  
  )

  const wonTopRightBottomleft = (
    boardState[0][2] === currentPlayer && 
    boardState[1][1] === currentPlayer && 
    boardState[2][0] === currentPlayer  
  )








  return (
    wonHoriztonal ||
    wonVertical ||
    wonTopLeftBottomRight ||
    wonTopRightBottomleft 
  
  )


}
function endGame() {
  restartButton.style.display = 'block';
  gameSquares.forEach((gameSquare) => {
    gameSquare.disabled = true;
  })

}
function restartGame(){
boardState = generateEmptyBoardState();
currentPlayer = 1;
numMovesDone = 0 ;
changePlayerHeading();
gameSquares.forEach(gameSquare => {
  gameSquare.textContent = "";
  gameSquare.disabled = false;
})
restartButton.style.display = 'none'
}

function generateEmptyBoardState() {
return new Array(boardWidth).fill()
.map(() => new Array(boardWidth).fill());
}

