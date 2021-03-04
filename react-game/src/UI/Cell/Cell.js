import React from "react";
import s from "./style.module.css";
const cn = require("classnames");

class Cell extends React.PureComponent {
  render() {
    const { value, onClick, x, y, selected } = this.props;
    let classes = cn(s.cell, selected ? s.selected : null);
    return (
      <div className={classes} onClick={onClick} data-x={x} data-y={y}>
        {value == null ? "" : value > 0 ? "X" : "O"}
      </div>
    );
  }
}

export default Cell;
