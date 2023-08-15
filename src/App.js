import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavigationComponent from "./Components/NavigationComponent";
import CardsComponent from "./Components/CardsComponent";
import ResultComponent from "./Components/ResultComponent";
import ModalAddComponent from "./Components/ModalAddComponent";
import ModalDeleteComponent from "./Components/ModalDeleteComponent";
import DetailComponent from "./Components/DetailComponent";

function App() {
  return (
    
    <Router>
      <div className="container">
        <div className="header">
          <div className="title">list social card</div>
        </div>
        {/* <NavigationComponent /> */}
        {/* <ModalDeleteComponent/> */}
        {/* <CardsComponent /> */}
        {/* <ResultComponent /> */}

        <DetailComponent/>
      </div>
    </Router>
  );
}

export default App;
