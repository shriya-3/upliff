import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
