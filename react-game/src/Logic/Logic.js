export function checkWin(cells) {
  // check row
  for (let i = 0; i < cells.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < cells[i].length; j++) {
      rowSum += cells[i][j];
    }
    if (Math.abs(rowSum) === 3) {
      return { type: "row", index: i, winner: rowSum / 3 };
    }
  }
  // check column
  for (let i = 0; i < cells.length; i++) {
    let columnSum = 0;
    for (let j = 0; j < cells[i].length; j++) {
      columnSum += cells[j][i];
    }
    if (Math.abs(columnSum) === 3) {
      return { type: "column", index: i, winner: columnSum / 3 };
    }
  }
  // check diagonal
  let diagonalSum = cells[0][0] + cells[1][1] + cells[2][2];
  if (Math.abs(diagonalSum) === 3) {
    return { type: "diagonal", index: 0, winner: diagonalSum / 3 };
  }
  diagonalSum = cells[2][0] + cells[1][1] + cells[0][2];
  if (Math.abs(diagonalSum) === 3) {
    return { type: "diagonal", index: 1, winner: diagonalSum / 3 };
  }
  return false;
}

export function check2(cells) {
  console.log("Its check2");
}
