import React, { useState, useCallback } from "react";
import { throttle } from "lodash";
import "../styles/heroSection.css"; 
import img from "../assets/wallArt-01.webp";

const HeroSection = () => {
  const [imgHeight, setImgHeight] = useState(50); // Initially, the image is half-visible

  const handleMouseMove = useCallback(throttle((e) => {
    const windowHeight = window.innerHeight;
    const mouseY = e.clientY;

    // Reverse calculation to reveal image from bottom to top
    const newHeight = Math.max(50, ((windowHeight - mouseY) / windowHeight) * 100);

    setImgHeight(newHeight);
  }, 30), []); // Throttle the mouse movement to every 30ms

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <div className="hero-text">
        <h1>Damaja Studio</h1>
        <p>Embroidery Studio, Berlin</p>
      </div>
      <div
        className="hero-image"
        style={{
          height: `${imgHeight}%`,
          transition: "height 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)", // Smoother transition
        }}
      >
        <img src={img} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;



/*import React, { useState } from "react";
import "../styles/heroSection.css"; 
import img from "../assets/wallArt-01.webp";

const HeroSection = () => {
  const [imgHeight, setImgHeight] = useState(40); // Initially, the image is half-visible

  const handleMouseMove = (e) => {
    const windowHeight = window.innerHeight;
    const mouseY = e.clientY;

    // Reverse calculation to reveal image from bottom to top
    const newHeight = Math.max(40, ((windowHeight - mouseY) / windowHeight) * 80);

    setImgHeight(newHeight);
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <div className="hero-text">
        <h1>Damaja Studio</h1>
        <p>Berlin based embroidery studio</p>
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

export default HeroSection; */
