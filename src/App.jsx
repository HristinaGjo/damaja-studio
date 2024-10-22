import React from "react"

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";



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
