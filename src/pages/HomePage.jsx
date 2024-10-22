import React from "react";
import "../styles/homePage.css";
import Gallery from "../components/Gallery";




const HomePage = () => {


  return (
    <>
    <Gallery />
    
    </>
  );
};

export default HomePage;


/*  <img className="border-img" src={img} alt={`Project ${index}`} /> */


/* import React, { useState } from "react";
import "../styles/homePage.css";
import HeroSection from "../components/HeroSection";


import img01 from "../assets/adidas02.webp";
import img02 from "../assets/adidas01.webp";
import img03 from "../assets/adidas03.webp";
import img04 from "../assets/adidas04.webp";
import img05 from "../assets/adidas05.webp";

import img06 from "../assets/wa-01.webp";
import img07 from "../assets/wa-02.webp";
import img08 from "../assets/wa-03.webp";
import img09 from "../assets/wa01-4.webp";
import img10 from "../assets/wa02-2.webp";
import img11 from "../assets/wa02-3.webp";
import img12 from "../assets/wa02-4.webp";

import img13 from "../assets/hoops01.webp";
import img14 from "../assets/hoops02.webp";
import img15 from "../assets/hoops03.webp";
import img16 from "../assets/hoops04.webp";
import img17 from "../assets/hoops05.webp";
import img18 from "../assets/hoops06.webp";
import img19 from "../assets/hoops07.webp";

import img20 from "../assets/flora01.webp";
import img21 from "../assets/flora02.webp";
import img22 from "../assets/flora03.webp";
import img23 from "../assets/flora04.webp";
import img24 from "../assets/flora05.webp";
import img25 from "../assets/flora06.webp";

const HomePage = () => {
  const [hoveredImg, setHoveredImg] = useState(null); // Track the hovered image

  const handleMouseEnter = (index) => {
    setHoveredImg(index); // Set the index of the hovered image
  };

  const handleMouseLeave = () => {
    setHoveredImg(null); // Reset when the mouse leaves
  };

  return (
    <>
      
      <div className={`work-ctn ${hoveredImg !== null ? "hovered" : ""}`}>
        <div className="row-ctn">
          <div className="row-info-v-1">
            <p>O1</p>
            <p>Wall Art, Personal Work</p>
          </div>
          <div className="row-items-v-1">
            {[img06, img07, img08, img09, img10, img12, img11].map((img, index) => (
              <div
                className={`img-project ${hoveredImg === index ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={index}
              >
                <img src={img} alt={`Project ${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="row-ctn">
          <div className="row-info-v-2">
            <p>O2</p>
            <p>Berlin Green Map for Adidas Flagship Store, Berlin</p>
          </div>
          <div className="row-items-v-2">
            {[img01, img02, img03, img04, img05].map((img, index) => (
              <div
                className={`img-v-2 ${hoveredImg === index + 7 ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index + 7)} // Continue index for unique keys
                onMouseLeave={handleMouseLeave}
                key={index + 7}
              >
                <img src={img} alt={`Project ${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="row-ctn">
          <div className="row-info-v-1">
            <p>O3</p>
            <p>Hoops, Personal Work</p>
          </div>
          <div className="row-items-v-1">
            {[img13, img14, img15, img16, img18, img17, img19].map((img, index) => (
              <div
                className={`img-project ${hoveredImg === index + 12 ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index + 12)}
                onMouseLeave={handleMouseLeave}
                key={index + 12}
              >
                <img src={img} alt={`Project ${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="row-ctn">
          <div className="row-info-v-4">
            <p>O4</p>
            <p>Flora & Fauna, Private residence Berlin</p>
          </div>
          <div className="row-items-v-2">
            {[img23, img20, img22, img25, img24, img21].map((img, index) => (
              <div
                className={`img-v-2 ${hoveredImg === index + 19 ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index + 19)}
                onMouseLeave={handleMouseLeave}
                key={index + 19}
              >
                <img src={img} alt={`Project ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; */



