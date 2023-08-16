const board = Array(9).fill('');
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];
let currentPlayer = 'X';

function printBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

function checkWin(player) {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function makeMove(position) {
  if (board[position] === '' && !checkWin('X') && !checkWin('O') && !checkDraw()) {
    board[position] = currentPlayer;

    if (checkWin(currentPlayer)) {
      printBoard();
      document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
    } else if (checkDraw()) {
      printBoard();
      document.getElementById('result').textContent = "It's a draw!";
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    printBoard();
  }
}

printBoard();
