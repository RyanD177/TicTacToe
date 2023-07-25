const gameSquares = document.querySelectorAll('.game-squares');
const boardWidth = 3;
let currentPlayer = 1; // intial player, player 1.
gameSquares.forEach((gameSquare, i) => {
    gameSquare.addEventListener('click', () => {
        const row = Math.floor( i / boardWidth);
        const col = i % boardWidth;
        

        makeMove(gameSquare,row,col);

    })

})


function makeMove(gameSquare, row, col) {
    gameSquare.textContent = currentPlayer = 1 ? 'X': "O";
    gameSquare.disabled = true;

    currentPlayer = currentPlayer === 1 ? 2 : 1; // change current player, update the heading (If the currentPlayer is === 1. change it to 2, otherwise if it was already 2, change back to 1)
    setCurrentPlayerHeader()
}


function setCurrentPlayerHeader() { // use the current player, to update the text on the screen.


}
