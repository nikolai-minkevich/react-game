export function checkWin(cells) {
  let selectedCells = [];
  // check row
  for (let i = 0; i < cells.length; i++) {
    let rowSum = 0;
    selectedCells = [];
    for (let j = 0; j < cells[i].length; j++) {
      rowSum += cells[i][j];
      selectedCells.push([i, j]);
    }
    if (Math.abs(rowSum) === 3) {
      return { type: "row",  winner: rowSum / 3, selectedCells: selectedCells };
    }
  }
  // check column
  for (let i = 0; i < cells.length; i++) {
    let columnSum = 0;
    selectedCells = [];
    for (let j = 0; j < cells[i].length; j++) {
      columnSum += cells[j][i];
      selectedCells.push([j, i]);
    }
    if (Math.abs(columnSum) === 3) {
      return { type: "column", winner: columnSum / 3, selectedCells: selectedCells };
    }
  }
  // check diagonal
  let diagonalSum = cells[0][0] + cells[1][1] + cells[2][2];
  if (Math.abs(diagonalSum) === 3) {
    selectedCells = [[0,0], [1,1], [2,2]];
    return { type: "diagonal",  winner: diagonalSum / 3, selectedCells: selectedCells };
  }
  diagonalSum = cells[2][0] + cells[1][1] + cells[0][2];
  if (Math.abs(diagonalSum) === 3) {
    selectedCells = [[2,0], [1,1], [0,2]];
    return { type: "diagonal",  winner: diagonalSum / 3, selectedCells: selectedCells };
  }

  if (checkDraw(cells)) {
    return { type: "draw" };
  }

  return false;
}

export function checkDraw(cells) {
  let isDraw = true;
  cells.map((cellsRow) =>
    cellsRow.map((cell) => {
      if (cell === null) {
        isDraw = false;
      }
      return cell;
    })
  );
  return isDraw;
}
