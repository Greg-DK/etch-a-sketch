const board = document.querySelector(".board");
const reset = document.querySelector(".reset");
const createNew = document.querySelector(".new");
console.log(createNew);


reset.addEventListener("click", resetBoard);

createBoard(16);

function createBoard(boardSize) {
    if (boardSize > 100) {
        boardSize = 100;
    }
    if (boardSize < 1) {
        boardSize = 1;
    }
    board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`
    board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`
    totalBits = boardSize*boardSize
    let bits = board.querySelectorAll('div');
    bits.forEach((div) => div.remove())
    for (let i = 0; i<totalBits; i++){
        const bit = document.createElement('div');
        bit.className = "bit";
        bit.id = i;
        bit.style.backgroundColor = "white";
        bit.addEventListener("mouseover", etchBit);
        board.appendChild(bit);
    }
}

function etchBit(square) {
    let box = square.target.id;
    let element = document.getElementById(box);
    element.style.backgroundColor = "black";
}

function resetBoard() {
    let bits = board.querySelectorAll('div');
    bits.forEach((div) => div.style.backgroundColor = "white");
}