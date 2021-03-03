import React from "react";
import s from "./style.module.css";

class Board extends React.PureComponent {
  static defaultProps = {
    cells: [{ a: 0 }],
    size: 4,
  };

  generateBackground(size = this.props.size) {
    return;
  }

  render() {
    const { cells } = this.props;
    return (
      <>
        {cells[0].a}

        <div className={s.background}>Back</div>
      </>
    );
  }
}

export default Board;
