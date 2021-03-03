import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Board from "./Components/Board";

class App extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Board cells={[{ a: 1 }, { a: 2 }, { a: 3 }]} />
      </Layout>
    );
  }

}

export default App;
