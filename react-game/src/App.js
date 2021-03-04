import React from "react";
import s from "./App.css";
import Layout from "./UI/Layout";
import Board from "./UI/Board";
import Footer from "./UI/Footer";

class App extends React.PureComponent {
  state = this.getNewGame();

  getNewGame() {
    return {
      cells: new Array(3).fill(new Array(3).fill(null)),
      nextTurn: true, // true - X, false - O
      //mode
      //stats
    };
  }

  handleBoardClick(event) {
    let { x, y } = event.target.dataset;
    let { nextTurn } = this.state;
    this.setState((state) => {
      let newCells = state.cells.map((cellsRow, indexRow) =>
        cellsRow.map((cell, indexCell) => {
          if (indexRow === parseInt(x) && indexCell === parseInt(y) && cell === null) {
            nextTurn = !nextTurn;
            return nextTurn;
          } else {
            return cell;
          }
        })
      );
      return { cells: newCells, nextTurn: nextTurn };
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
