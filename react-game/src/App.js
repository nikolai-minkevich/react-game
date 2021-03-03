import React from "react";
import "./App.css";
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
  render() {
    const { cells, nextTurn } = this.state;
    return (
      <>
        <Layout>
          {/* New Game, Score */}
          <Board cells={cells} />
          <div class="stat">
            <div class="nextTurn">Next turn: {nextTurn ? 'X' : 'O'}</div>
          </div>
        </Layout>
        <Footer />
      </>
    );
  }
}

export default App;
