import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/HomePage";

const App = () => {
    const [isHovered, setIsHovered] = useState(false);

    // 1. Initialize state to store scroll functions
    const [scrollToAbout, setScrollToAbout] = useState(() => {});
    const [scrollToContact, setScrollToContact] = useState(() => {});
    const [scrollToHome, setScrollToHome] = useState(() => {});
    const [scrollToWorkshops, setScrollToWorkshops] = useState(() => {});

    return (
        <>
           <Nav 
           isHovered={isHovered} 
           scrollToAbout={scrollToAbout}
           scrollToWorkshops={scrollToWorkshops}
           scrollToHome = {scrollToHome}
           scrollToContact = {scrollToContact}
           />
            <Routes>
            <Route
                    path="/"
                    element={
                        <Home
                            setIsHovered={setIsHovered}
                            setScrollToHome={setScrollToHome}
                            setScrollToAbout={setScrollToAbout}
                            setScrollToWorkshops={setScrollToWorkshops}
                            setScrollToContact={setScrollToContact}
                        />
                    }
                />
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



