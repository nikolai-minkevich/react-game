import React from "react";
import s from "./style.module.css";

class Cell extends React.PureComponent {
  render() {
    const { value, onClick, x, y } = this.props;
    return (
      <div className={s.cell} onClick={onClick} data-x={x} data-y={y}>
        {value == null ? "" : value > 0 ? "X" : "O"}
      </div>
    );
  }
}

export default Cell;
