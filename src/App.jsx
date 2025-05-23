import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Nav from "./components/Nav";
import Home from "./pages/HomePage";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Scroll function states
  const [scrollToAbout, setScrollToAbout] = useState(() => {});
  const [scrollToContact, setScrollToContact] = useState(() => {});
  const [scrollToHome, setScrollToHome] = useState(() => {});
  const [scrollToWorkshops, setScrollToWorkshops] = useState(() => {});

  return (
    <>
      {/* ✅ Open Graph metadata */}
      <Helmet>
        <title>Damaja Studio – Embroidery by Stefanija Pejchinovska</title>
        <meta property="og:title" content="Damaja Studio – Embroidery by Stefanija Pejchinovska" />
        <meta property="og:description" content="Berlin-based artist blending traditional embroidery with contemporary themes." />
        <meta property="og:url" content="https://damaja.studio" />
        <meta property="og:image" content="https://damaja.studio/assets/wa-01.webp" />
        <meta property="og:image:alt" content="Dripping red embroidery artwork by Damaja Studio" />
      </Helmet>

      <Nav
        isHovered={isHovered}
        scrollToAbout={scrollToAbout}
        scrollToWorkshops={scrollToWorkshops}
        scrollToHome={scrollToHome}
        scrollToContact={scrollToContact}
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



