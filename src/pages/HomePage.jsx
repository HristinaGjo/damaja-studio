import React from "react";
import "../styles/homePage.css";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Workshops from "../components/Workshops";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const HomePage = ({setIsHovered}) => {

  return (
    <>
    <Nav />
    <Gallery setIsHovered={setIsHovered} />
    <About  />
    <Clients />
    <Workshops  />
    <Footer  />
    </>
  );
};

export default HomePage;


