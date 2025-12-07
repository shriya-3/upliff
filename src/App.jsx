import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Support from "./components/Support.jsx";
import CommunityPage from "./components/CommunityPage.jsx";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/support" element={<Support />} /> 
        <Route path="/community/:id" element={<CommunityPage />} />
      </Routes>
    </div>
  );
}

export default App;
