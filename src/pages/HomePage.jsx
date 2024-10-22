import React from "react";
import "../styles/homePage.css";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Workshops from "../components/Workshops";
import Clients from "../components/Clients";




const HomePage = ({setIsHovered}) => {


  return (
    <>
    <Gallery setIsHovered={setIsHovered} />
    <About />
    <Clients />
    <Workshops />
    </>
  );
};

export default HomePage;


