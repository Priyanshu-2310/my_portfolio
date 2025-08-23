import React from "react";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import SoftwareEngineer from "./components/SoftwareEngineer";
import LocomotiveScroll from "locomotive-scroll";

import Socialmedialink from "./components/Socialmedialink";
import About from "./components/About";
import GraphicDesiner from "./components/GraphicDesiner";
import Taekwondo from "./Taekwondo";
import Achievement from "./components/Achievement";
import Shortintro from "./components/Shortintro";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";

const App = () => {
  const Locomotivescroll = new LocomotiveScroll();
  return (
    <div className="bg-[#151312]  overflow-hidden text-white">
      {/* <Socialmedialink /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
};

export default App;
