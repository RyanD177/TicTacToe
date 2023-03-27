const gameBoard = document.querySelector("#gameBoard");
const infoDisplay = document.querySelector("#Info");
const startCells = [
     "", "", "", "", "", "", "", "", "",
]

function createBoard () {
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square")
        gameBoard.append(cellElement)
    })

}

createBoard();