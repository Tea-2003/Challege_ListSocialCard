import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <NavigationComponent></NavigationComponent>
        <Routes>
          <Route path="/" element={<CardsComponent></CardsComponent>} />
          <Route path="/detail" element={<DetailComponent/>} />
          <Route path="/delete" element={<ModalDeleteComponent/>} />
          <Route path="/add" element={<ModalAddComponent/>} />
          <Route path="/result" element={<ResultComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
