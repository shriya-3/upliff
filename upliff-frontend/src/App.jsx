import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Support from "./components/Support.jsx";
import CommunityPage from "./components/CommunityPage.jsx";
import Schedule from "./components/Schedule.jsx"
import Blog from "./components/Blog.jsx";
import PostPage from "./components/PostPage.jsx";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/support" element={<Support />} /> 
        <Route path="/community/:id" element={<CommunityPage />} />
        <Route path="/community/:id/post/:postId" element={<PostPage />} />
        <Route path="/schedule" element={<Schedule />} /> 
        <Route path="/blog" element={<Blog />} /> 

        
      </Routes>
    </div>
  );
}

export default App;
