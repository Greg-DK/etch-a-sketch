const board = document.querySelector(".board");
const reset = document.querySelector(".reset");
console.log(reset)
reset.addEventListener("click", resetBoard);

for (let i = 0; i<256; i++){
    const bit = document.createElement('div');
    bit.className = "bit";
    bit.id = i;
    bit.style.backgroundColor = "white";
    bit.addEventListener("click", etchBit);
    board.appendChild(bit);
}



function etchBit(square) {
    let box = square.target.id;
    let element = document.getElementById(box);
    element.style.backgroundColor = "black";
}

function resetBoard() {
    for (i =0;i<256;i++) {
        let element = document.getElementById(i);
        element.style.backgroundColor = "white";
    }
}