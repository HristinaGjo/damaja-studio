import React, { useEffect, useRef } from "react";
import "../styles/homePage.css";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Workshops from "../components/Workshops";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const HomePage = ({ setIsHovered, setScrollToAbout, setScrollToContact, setScrollToHome, setScrollToWorkshops }) => {

  const aboutRef = useRef(null);
  const workshopsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  useEffect (() => {

    setScrollToAbout (() => {
      if (aboutRef.current) aboutRef.current.scrollIntoView ({behavior:smooth});
    });

    setScrollToWorkshops (() => {
      if (workshopsRef.current) workshopsRef.current.scrollIntoView ({behavior:smooth});
    });

    setScrollToContact (() => {
      if (contactRef.current) contactRef.current.scrollIntoView ({behavior:smooth});
    });

    setScrollToHome (() => {
      if (homeRef.current) homeRef.current.scrollIntoView ({behavior:smooth});
    });

  })

  return (
    <>

    <div ref={homeRef} setIsHovered={setIsHovered} >
      <Gallery />
    </div> 
    <div ref={aboutRef} >
      <About />
    </div> 
      <Clients />
    <div ref={workshopsRef}  >
      <Workshops />
    </div>
    
    <div ref={contactRef}  >
      <Footer />
    </div>
    </>
  );
};

export default HomePage;


