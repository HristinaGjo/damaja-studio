import React from "react"
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ArtWear from "./pages/ArtWear";
import Workshops from "./pages/Workshops"
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  return (
  <>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artwear" element={<ArtWear />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </>

  )
}

export default App
