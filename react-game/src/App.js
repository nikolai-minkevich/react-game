import React from "react";
import s from "./App.css";
import Layout from "./UI/Layout";
import Board from "./UI/Board";
import Footer from "./UI/Footer";
import { checkWin } from "./Logic/Logic.js";

class App extends React.PureComponent {
  state = this.getNewGame();

  getNewGame() {
    return {
      cells: new Array(3).fill(new Array(3).fill(null)),
      nextTurn: 1, // 1 - X, -1 - O
      //mode
      //stats
    };
  }

  handleBoardClick(event) {
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
      if (newNextTurn !== nextTurn) {
        const isWin = checkWin(newCells)
        if (isWin!==false) {
          console.log(isWin);
        }
      }
      return { cells: newCells, nextTurn: newNextTurn };
    });
  }
  render() {
    const { cells, nextTurn } = this.state;
    return (
      <>
        <div className={s.App}></div>
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
