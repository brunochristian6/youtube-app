import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container"></div>
      </Fragment>
    );
  }
}

export default App;
