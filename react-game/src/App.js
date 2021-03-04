import React from "react";
import s from "./App.css";
import Layout from "./UI/Layout";
import Board from "./UI/Board";
import Footer from "./UI/Footer";
import Message from "./UI/Message";
import { checkWin } from "./Logic/Logic.js";
import Button from "./UI/Button";

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

  handleRestartClick(event) {
    console.log("Restart");
    this.setState(() => {
      return this.getNewGame();
    });
  }
  render() {
    const { cells, nextTurn, isWin } = this.state;
    const { type, selectedCells, winner } = isWin;
    let message = null;
    if (isWin !== false) {
      if (type === "draw") {
        message = <Message>Draw!</Message>;
      } else {
        if (winner > 0) {
          message = <Message>Crosses win!</Message>;
        } else {
          message = <Message>Noughts win!</Message>;
        }
      }
    }

    return (
      <>
        <div className={s.App}></div>

        <Layout>
          {/* New Game, Score */}
          <Board cells={cells} onClick={this.handleBoardClick.bind(this)} selectedCells={selectedCells} />
          <div className="stat">
            {message}
            <div className="nextTurn">Next turn: {nextTurn > 0 ? "X" : "O"}</div>
            <Button onClick={this.handleRestartClick.bind(this)}>Restart</Button>
          </div>
        </Layout>
        <Footer />
      </>
    );
  }
}

export default App;
