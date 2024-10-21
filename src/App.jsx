import React from "react"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import PageTransition from "./components/PageTransition";

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";


function App() {

  return (
  <>
  <Nav />
    <Routes>

      <Route path="/" element={<HomePage />} />
    </Routes>

  </>

  )
}

export default App
