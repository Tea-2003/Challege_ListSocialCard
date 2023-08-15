import React from "react";
import "./App.css";
import NavigationComponent from "./Components/NavigationComponent";
import CardsComponent from "./Components/CardsComponent";
import ResultComponent from "./Components/ResultComponent";

function App() {
  return (
    <div className="container">
      .
      <div className="header">
        <div className="title">list social card</div>
      </div>
      <NavigationComponent />
      <CardsComponent />
      <ResultComponent />
    </div>
  );
}

export default App;
