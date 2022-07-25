const cells = Array.from(document.querySelectorAll(".game-cell"));
const resetButton = document.querySelector(".game-reset");
const gameContainer = document.querySelector(".game-container");
const gameStatus = document.querySelector(".game-status");

let turnWord = "X";
let positionStatus = ["", "", "", "", "", "", "", "", ""];

resetButton.addEventListener("click", resetGame);
cells.map((cell) => {
  cell.addEventListener("click", cellHandler);
});

function cellHandler() {
  const indexCell = parseInt(this.getAttribute("data-id"));
  if (!positionStatus[indexCell]) {
    this.innerText = turnWord;
    this.classList.add("selected");
    positionStatus[indexCell] = turnWord;
    changeTurn();
  }
}
function changeTurn() {
  turnWord = turnWord === "X" ? "O" : "X";
  gameStatus.innerText = `It's ${turnWord}'s Turn`;
}
function resetGame() {
  cells.map((cell) => {
    cell.innerText = "";
    cell.classList.remove("selected");
  });
  positionStatus = ["", "", "", "", "", "", "", "", ""];
  turnWord = "X";
  gameStatus.innerText = `It's ${turnWord}'s Turn`;
}
