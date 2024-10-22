import React from "react";
import "../styles/about.css"
import damajaStudio from "../assets/damaja-studio-cut-1.webp"
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <>
        <div className="about-ctn">
            <div className="about-text">
                <div className="about-left-ctn">
                    <div className="title">
                        <p>ABOUT</p>
                    </div>
                    {/*<div className="links">
                        <Link to="/"><p>INSTAGRAM</p></Link>
                        <Link to="/"><p>YOUTUBE</p></Link>
                    </div>*/}
                </div>
                <div className="about-right-ctn">
                    <p>
                    Stefanija Pejchinovska, who works behind the name Damaja, 
                    is a Berlin-based embroidery artist. 
                    <br/>
                    With a diploma in architecture and inherited passion for textile arts, 
                    she has devoted her life to hand embroidery.
                    Her work explores current social and cultural topics, 
                    through a blend of traditional craftsmanship with modern aesthetics and conscientious attention to detail. 
                    </p>
                    <div className="damaja-img">
                        <img src={damajaStudio} />
                    </div>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default About;