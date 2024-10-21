import React, { useState } from "react";
import "../styles/heroSection.css"; 
import img from "../assets/wallArt-01.webp";

const HeroSection = () => {
  const [imgHeight, setImgHeight] = useState(50); // Initially, the image is half-visible

  const handleMouseMove = (e) => {
    const windowHeight = window.innerHeight;
    const mouseY = e.clientY;

    // Reverse calculation to reveal image from bottom to top
    const newHeight = Math.max(50, ((windowHeight - mouseY) / windowHeight) * 80);

    setImgHeight(newHeight);
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <div className="hero-text">
        <h1>Diana Toloza</h1>
        <p>Photographer, Fashion Designer and Developer</p>
      </div>
      <div
        className="hero-image"
        style={{
          height: `${imgHeight}%`,
          transition: "height 0.3s ease-out",
        }}
      >
        <img src={img} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
