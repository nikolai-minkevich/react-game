import React from "react";
import s from "./App.css";
import Layout from "./UI/Layout";
import Board from "./UI/Board";
import Footer from "./UI/Footer";
import Message from "./UI/Message";
import { checkWin } from "./Logic/Logic.js";

class App extends React.PureComponent {
  state = this.getNewGame();

  getNewGame() {
    return {
      cells: new Array(3).fill(new Array(3).fill(null)),
      nextTurn: 1, // 1 - X, -1 - O
      isWin: false,
      //mode
      //stats
    };
  }

  handleBoardClick(event) {
    const { isWin } = this.state;
    if (isWin === false || isWin === undefined) {
      let { x, y } = event.target.dataset;
      let { nextTurn } = this.state;
      let newNextTurn = nextTurn;
      this.setState((state) => {
        let newCells = state.cells.map((cellsRow, indexRow) =>
          cellsRow.map((cell, indexCell) => {
            if (indexRow === parseInt(x) && indexCell === parseInt(y) && cell === null) {
              newNextTurn = nextTurn * -1;
              return nextTurn;
            } else {
              return cell;
            }
          })
        );
        let newIsWin = false;
        if (newNextTurn !== nextTurn) {
          newIsWin = checkWin(newCells);
        }
        return { cells: newCells, nextTurn: newNextTurn, isWin: newIsWin };
      });
    }
  }
  render() {
    const { cells, nextTurn, isWin } = this.state;
    return (
      <>
        <div className={s.App}></div>
        {isWin ? <Message /> : ""}
        <Layout>
          {/* New Game, Score */}
          <Board cells={cells} onClick={this.handleBoardClick.bind(this)} />
          <div className="stat">
            <div className="nextTurn">Next turn: {nextTurn ? "X" : "O"}</div>
          </div>
        </Layout>
        <Footer />
      </>
    );
  }
}

export default App;
