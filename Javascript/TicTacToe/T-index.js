const PlayerStatus = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `MATCH DRAW!!!!!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

PlayerStatus.innerHTML = currentPlayerTurn();

const WinningPossibility = [
    [0, 1, 2],      // count via Row
    [3, 4, 5],      
    [6, 7, 8],
    [0, 3, 6],      // count via Column
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],      // Left diagonal
    [2, 4, 6]       // Right diagonal
];

function CellPlayer(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";          // Ternary Operator (i.e) TRUE/FALSE
    PlayerStatus.innerHTML = currentPlayerTurn();
}

function GameResult() {
    let MatchWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = WinningPossibility[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            MatchWon = true;
            break;
        }
    }

    if (MatchWon) {
        PlayerStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let MatchDraw = !gameState.includes("");

    if (MatchDraw) {
        PlayerStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    PlayerChange();
}

function ClickOnCell(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    CellPlayer(clickedCell, clickedCellIndex);
    GameResult();
}

function RestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    PlayerStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', ClickOnCell));
document.querySelector('.game--restart').addEventListener('click', RestartGame);
 
