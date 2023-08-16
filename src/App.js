import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ModalAdd from 'react-modal';

import Card from "./Components/Card";
import ModalAdd from "./Components/ModalAdd";
import ModalDelete from "./Components/ModalDelete";
import Detail from "./Components/Detail";
import Result from "./Components/Result";

function App() {
  return (
    <Router>
      <div className="container">       
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/delete" element={<ModalDelete />} />
          <Route path="/add" element={<ModalAdd />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
