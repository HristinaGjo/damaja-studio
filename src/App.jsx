import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/HomePage";

const App = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
           <Nav  isHovered={isHovered} />
            <Routes>
                <Route path="/" element={<Home setIsHovered={setIsHovered} />} />
            </Routes>
        </>
    );
};

export default App;







/* import React from "react"
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";


function App() {

  const [isHovered, setIsHovered] = useState(false);

  return (
  <>
  <Nav isHovered={isHovered} />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

  </>

  )
}

export default App;*/



