import React from "react";
import s from "./style.module.css";

class Board extends React.PureComponent {
  static defaultProps = {
    cells: new Array(3).fill(new Array(3).fill(null))
  };


  render() {
    const { cells } = this.props;
    return (
      <>
        <div className={s.board}>
          {cells.map((cellsRow) => {
            return (
              <>
                <div className={s.row}>
                  {cellsRow.map((cell) => (
                    <div class={s.cell}>{cell || ""}</div>
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
