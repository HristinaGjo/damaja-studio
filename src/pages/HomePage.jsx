import React from "react";
import "../styles/homePage.css";
import Gallery from "../components/Gallery";




const HomePage = ({setIsHovered}) => {


  return (
    <>
    <Gallery setIsHovered={setIsHovered} />
    
    </>
  );
};

export default HomePage;


