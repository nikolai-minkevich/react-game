import React from "react";
import Cell from "../Cell";
import s from "./style.module.css";

class Board extends React.PureComponent {
  handleCellClick(event) {
    const { onClick } = this.props;
    onClick(event);
  }
  render() {
    const { cells, isWin } = this.props;
    return (
      <>
        <div className={s.board}>
          {cells.map((cellsRow, indexRow) => {
            return (
              <>
                <div className={s.row}>
                  {cellsRow.map((cell, indexCell) => (
                    <Cell value={cell} onClick={this.handleCellClick.bind(this)} x={indexRow} y={indexCell} />
                  ))}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Board;
