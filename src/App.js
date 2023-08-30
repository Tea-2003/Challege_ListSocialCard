import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Components/Detail";
import Card from "./Components/Card";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";

function App() {
  const [showContainer, setShowContainer] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className='App'>
        {showContainer && (
          <div className='container'>
            <div className='title'>LIST SOCIAL CARD</div>
            <Nav onSearchChange={setSearchTerm} />
          </div>
        )}
        <Routes>
          <Route
            path='/'
            element={
              <Card
                setShowContainer={setShowContainer}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path='/NotFound'
            element={<NotFound />}
          />
          <Route
            path='/Detail'
            element={<Detail setShowContainer={setShowContainer} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
