import React from "react";
import G from "./components/G";
import Footer from "./components/Footer";
import "./style/style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import PreTest from "./components/PreTest";
import PostTest from "./components/PostTest";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gridTable" element={<G />} />
        <Route path="/preTest" element={<PreTest />} />
        <Route path="/postTest" element={<PostTest />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
