import React, { useState } from "react";
import "../styles/workshops.css"
import { Link } from "react-router-dom";



import workshopVideo01 from "../assets/video-1.mp4"
import workshopVideo02 from "../assets/video-2.mp4"
import workshopVideo03 from "../assets/video-3.mp4"


import img01 from "../assets/img01.webp"
import img03 from "../assets/img03.webp"
import img02 from "../assets/img02.webp"

import img04 from "../assets/img04.webp"
import img05 from "../assets/img05.webp"
import img06 from "../assets/img06.webp"

import img07 from "../assets/img07.webp"
import img08 from "../assets/img08.webp"
import img09 from "../assets/img09.webp"

const Workshops = () => {


    const[isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState)
    }


    return ( 
        <>
        <div className="workshops-wrapper">
            <div className="workshops-content-ctn">
                <div className="workshops-left-ctn">
                    <div className="title">
                        <p>WORKSHOPS</p>
                    </div>
                    {/*<div className="contact-section">
                            <p>Workshops inquiries</p>
                        <div className="button-contact">
                            <p>workshops@damaja-studio.com</p>
                        </div>
                    </div>*/}
                    <div className="toggle-workshops" onClick={toggleDropdown} style={{cursor:'pointer'}}>
                        <p>{isOpen ? 'less impressions' : 'more impressions'}</p>
                    </div>
                </div>
                <div className="workshops-right-ctn">
                    <p>
                    Since 2017, teaching workshops is a significant part of Damaja’s practice. 
                    <br/>
                    From private workshops to embroidery events for product launch campaigns for companies and brands, 
                    she has introduced embroidery and upcyling techniques to thousands of people. 
                    Main goal of Damaja’s teachings is to help the participants reconnect with the feeling of 
                    working with their hands.
                    </p>

                    <div className="contact-section">
                        <p>For workshops inquiries contact:</p>
                        <Link to="mailto:workshops@damaja-studio.com" target="_blank" rel="noreferrer">
                            <p>workshops@damaja-studio.com</p>
                        </Link>
                    </div>

                    {/*<div className="collab-list">
                        <div className="collab-item">
                            <p>01</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>02</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>03</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>04</p>
                            <p>ADIDAS</p>
                        </div>
                    </div> */}
                    <div className="video-ctn">
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo01}/>   
                        </video>
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo02}/>   
                        </video>
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo03}/>   
                        </video>
                    </div>
                    <div className="toggle-workshops-mobile" onClick={toggleDropdown} style={{cursor:'pointer'}}>
                        <p>{isOpen ? 'less impressions' : 'more impressions'}</p>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="additional-content">
                    <div className="additional-left-ctn">


                    </div>

                    <div className="additional-right-ctn">

                    <div className="gallery-workshops">

                    <div className="row-info">
                            <p>Damaja & Adidas & FC Bayern, Munich
                            </p>
                            <div className="second-row-imgs">
                                <div className="img-ctn-workshops">
                                    <img src={img07} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <img src={img08} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <img src={img09} />
                                </div>
                            </div>
                        </div>

                        <div className="row-info">
                            <p>Damaja & Tommy Hilfinger, Berlin</p>
                            <div className="second-row-imgs">
                                <div className="img-ctn-workshops">
                                    <img src={img06} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <img src={img04} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <img src={img05} />
                                </div>
                            </div>
                        </div>

                        <div className="row-info">
                        <p>Damaja & Adidas Flagship Store, Berlin</p>
                        <div className="first-row-imgs">
                            <div className="img-ctn-workshops">
                                <img src={img01} />
                            </div>
                            <div className="img-ctn-workshops">
                             <img src={img03} />
                            </div>
                            <div className="img-ctn-workshops">
                                <img src={img02} />
                            </div>
                        </div>
                        </div>




                    </div>
                     
                    </div>
                </div>
            )}

        </div>
        </>
     );
}
 
export default Workshops;

/* 
                    <div className="clients">
                        
                    </div>


                                        <div className="collab-list">
                        <div className="title-collab">
                            <p>Previous Workshops</p>
                        </div> 
                        <div className="collab-item">
                            <p>01</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>02</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>03</p>
                            <p>ADIDAS</p>
                        </div>
                        <div className="collab-item">
                            <p>04</p>
                            <p>ADIDAS</p>
                        </div>
                    </div>

*/