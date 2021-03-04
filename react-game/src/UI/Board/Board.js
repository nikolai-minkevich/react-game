import React from "react";
import Cell from "../Cell";
import s from "./style.module.css";

class Board extends React.PureComponent {
  handleCellClick(event) {
    const { onClick } = this.props;
    onClick(event);
  }
  render() {
    const { cells, selectedCells = [] } = this.props;
    return (
      <>
        <div className={s.board}>
          {cells.map((cellsRow, indexRow) => {
            return (
              <>
                <div className={s.row}>
                  {cellsRow.map((cell, indexCell) => {
                    let selected = false;
                    if (selectedCells.length > 0) {
                      for (let i = 0; i < selectedCells.length; i++) {
                        if (selectedCells[i][0] == indexRow && selectedCells[i][1] == indexCell) {
                          selected = true;
                        }
                      }
                    }

                    return <Cell value={cell} onClick={this.handleCellClick.bind(this)} x={indexRow} y={indexCell} selected={selected} />;
                  })}
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
