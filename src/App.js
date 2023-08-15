import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavigationComponent from "./Components/NavigationComponent";
import CardsComponent from "./Components/CardsComponent";
import ResultComponent from "./Components/ResultComponent";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="title">list social card</div>
        </div>
        <NavigationComponent />
        <CardsComponent />
        <ResultComponent />
      </div>
    </Router>
  );
}

export default App;
