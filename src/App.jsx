import React from "react"
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
