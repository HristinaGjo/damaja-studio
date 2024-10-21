import React from "react"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import PageTransition from "./components/PageTransition";

import HeroSection from "./components/HeroSection";


function App() {

  return (
  <>

    <Routes>
      <Route path="/" element={<HeroSection />} />
    </Routes>

  </>

  )
}

export default App
