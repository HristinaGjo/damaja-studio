import React, {useEffect} from "react";
import "../styles/about.css"
import damajaStudio from "../assets/damajaStudio.webp"
import studio01 from "../assets/studio-01.webp"
import studio02 from "../assets/studio-02.webp"

import { Link } from "react-router-dom";
import Clients from "./Clients";
import { LazyLoadImage } from "react-lazy-load-image-component";


const About = () => {

    // Preload critical images on initial load
    useEffect(() => {
        const preloadImages = [
            damajaStudio, // Use the imported image variable
        ];

        preloadImages.forEach((src) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = src;  // This will now correctly refer to the imported images
            document.head.appendChild(link);
        });
    }, []);


    return ( 
        <>
        <div className="about-ctn">
            <div className="about-text">
                <div className="about-left-ctn">
                    <div className="title">
                        <p>ABOUT</p>
                    </div>
                    {/*<div className="contact-section">
                            <p>Contact</p>
                        <div className="button-contact">
                            <p>info@damaja-studio.com</p>
                        </div>
                    </div>*/}
                    {/*<div className="links">
                        <Link to="/"><p>INSTAGRAM</p></Link>
                        <Link to="/"><p>YOUTUBE</p></Link>
                    </div>*/}
                </div>
                <div className="about-right-ctn">
                <div className="text-ctn">
                    <p>
                    Stefanija Pejchinovska, who works behind the name Damaja, 
                    is a Berlin-based embroidery artist. 
                    With a diploma in architecture and inherited passion for textile arts, 
                    she has devoted her life to hand embroidery.
                    Her work explores current social and cultural topics, 
                    through a blend of traditional craftsmanship with modern aesthetics and conscientious attention to detail. 
                    </p>
                    </div>
          
                    <div className="info-ctn">

                           {/* <div className="contact-about">
                                <p>contact for collab requests & info</p>
                                <p>info@damaja-studio.com</p>
                            </div> */}
                            {/*<div className="clients-info">
                                <p>Damaja's clients &darr;</p>
                            </div>*/}
                            {/*<div className="damaja-img-01">
                                <LazyLoadImage src={studio01} />
                            </div>*/}
                            
                            {/*<div className="damaja-img">
                                <LazyLoadImage src={studio02} />
                            </div>*/}

                            <div className="damaja-img">
                                <LazyLoadImage src={damajaStudio} />
                            </div>
                        </div>
                     
                    
                </div>
            </div>


        </div>
        </>
     );
}
 
export default About;