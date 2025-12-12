import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Schedule from "./components/Schedule.jsx"
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/schedule" element={<Schedule />} /> 
        <Route path="/blog" element={<Blog />} /> 

      </Routes>
    </div>
  );
}

export default App;
