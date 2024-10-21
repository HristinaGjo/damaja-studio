import React from "react";
import "../styles/heroSection.css"; 
import img01 from "../assets/damaja-studio-cut-1.webp";



const HeroSection = () => {

  return (
    <div className="hero-container">
      <div className="img-ctn">
        <div className="img">
            <img src={img01} alt="Image not Available" />
         
        </div>
        <div className="selected-work">
            <div className="header">
                <p>Featured
                  
                </p>
                <h1>Work</h1>
            </div>
            <div className="about-text">
                <div className="text-ctn">
                <p>Stefanija Pejchinovska, who works behind the name Damaja, 
                    is a Berlin-based embroidery artist. <br/>
                    With a diploma in architecture and inherited passion for textile arts, 
                    she has devoted her life to hand embroidery.</p> 

                <p>Her work explores current social and cultural topics, 
                    through a blend of traditional craftsmanship with modern aesthetics 
                    and conscientious attention to detail.</p>
                </div>
            </div>
            <div className="clients-ctn">
                <div className="clients-text">
                    <p>clients: adidas, vice, tommy hilfiger, circular berlin, olivia steele, i-D, vee collective, 
                        peek & cloppenburg, dawn denim, ivy oak</p>
                </div>
            </div>
            </div>

      </div>

    </div>
  
  );
};

export default HeroSection;


/*

  <br/>
                    Embroidery

style={{
    transition: "height 0.3s ease-out",
  }} */
