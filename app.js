const cells = Array.from(document.querySelectorAll(".game-cell"));
const resetButton = document.querySelector(".game-reset");
const gameContainer = document.querySelector(".game-container");
const gameStatus = document.querySelector(".game-status");

let turnWord = "X";

resetButton.addEventListener("click", resetGame);

cells.map((cell) => {
  cell.addEventListener("click", () => {
    cell.innerText = turnWord;
    cell.classList.add("selected");
    changeTurn();
  });
});
function changeTurn() {
  turnWord = turnWord === "X" ? "O" : "X";
  gameStatus.innerText = `It's ${turnWord}'s Turn`;
}
function resetGame() {
  cells.map((cell) => {
    cell.innerText = "";
  });
}
