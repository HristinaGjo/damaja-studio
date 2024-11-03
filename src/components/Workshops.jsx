import React, { useState } from "react";
import "../styles/workshops.css"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


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
                   
                </div>
                <div className="workshops-right-ctn">
                    <p>
                    Since 2017, teaching workshops is a significant part of Damaja’s practice. 
                   
                    From private workshops to embroidery events for product launch campaigns for companies and brands, 
                    she has introduced embroidery and upcyling techniques to thousands of people. 
                    With a main goal to help the participants to reconnect with the feeling of working with their hands, Damaja offers:
                    </p>

                    {/*<div className="video-ctn">
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo01}/>   
                        </video>
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo02}/>   
                        </video>
                        <video autoPlay loop muted playsInline>
                            <source src={workshopVideo03}/>   
                        </video>
                    </div> */}

                    <ul className="offer-list">
                        <li>upcycling / hand embroidery workshops for groups of up to 15 people</li>
                        <li>mindful connection between the mind and the body with engaged presence and distance from computer screens</li>
                        <li>team building events: contributing to the well-being of people in a workspace where they can communicate through a common task</li>
                        <li>an interactive event for your product campaign / charity / fundraiser</li>
                        <li>creative influencers/ brand ambassadors’ environment for producing content</li>
                        <li>basics in hand embroidery and upcycling using your product or independently sourced materials</li>
                        <li>live hand embroidery customisation for your product launch / during holiday season</li>
                    </ul>

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

                    <div className="past-events">
                            <p>Past events:</p>
                            <ul className="offer-list">
                                <li>Adidas x Bayern Munich, 3rd Kit Jersey Launch, live customisation, 2024</li>
                                <li>CFS by Peek & Cloppenburg, upcycling workshop, 2024</li>
                                <li>DAWN, live customisation @ SEEK Trade Show, 2024</li>
                                <li>Adidas, upcycling workshop @ Adidas GreenLab, 2023</li>
                                <li>Neukölln Nachhaltig Fest, hand embroidery workshop, 2023 </li>
                                <li>i-D x Tommy Hilfiger Shawn Mendes: Classics Reborn Berlin, 3-day upcycling workshop, 2023</li>
                                <li>DAWN, live customisation, 2022</li>
                                <li>Sessún, upcycling workshop, 2022</li>
                                <li>TheLoopLook hand embroidery team session @ Bosch.IO Campus, 2022</li>
                                <li>Circular Berlin, TheLoopLook launch, hand embroidery workshop, 2022</li>
                                <li>Adidas, brand ambassadors upcycling workshop @ Adidas GreenLab, 2022</li>
                                <li>Adidas, HALO activation upcycling workshop @ Adidas GreenLab, 2022</li>
                                <li>Olivia Steele x Vee Collective, live customisation, 2021</li>
                                <li>Ivy & Oak, live customisation, 2020</li>
                            </ul>
                        </div>

                        <div className="button-ctn">
                            <div className="toggle-workshops" onClick={toggleDropdown} style={{cursor:'pointer'}}>
                                <p>{isOpen ? 'less impressions' : 'more impressions'}</p>
                            </div>
                            <div className="toggle-workshops-mobile" onClick={toggleDropdown} style={{cursor:'pointer'}}>
                                <p>{isOpen ? 'less impressions' : 'more impressions'}</p>
                            </div>
                            <div className="contact-button">
                             <Link to="mailto:workshops@damaja-studio.com" target="_blank" rel="noreferrer">
                                <p>contact</p>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

            {isOpen && (
                <div className="additional-content">
                    <div className="additional-left-ctn"></div>

                    <div className="additional-right-ctn">
                        <div className="gallery-workshops">
                            <div className="row-info">
                                <p>Adidas x Bayern Munich, 3rd Kit Jersey Launch, live customisation, 2024</p>
                            <div className="second-row-imgs">
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img07} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img08} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img09} />
                                </div>
                            </div>
                        </div>

                        <div className="row-info">
                            <p>i-D x Tommy Hilfiger Shawn Mendes: Classics Reborn Berlin, 3-day upcycling workshop, 2023</p>
                            <div className="second-row-imgs">
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img06} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img04} />
                                </div>
                                <div className="img-ctn-workshops">
                                    <LazyLoadImage src={img05} />
                                </div>
                            </div>
                        </div>

                        <div className="row-info">
                            <p>Adidas, brand ambassadors upcycling workshop @ Adidas GreenLab, 2022</p>
                            {/*<p>photo credits: Michael Romacker </p> */}
                        <div className="first-row-imgs">
                            <div className="img-ctn-workshops">
                                <LazyLoadImage src={img01} />
                            </div>
                            <div className="img-ctn-workshops">
                             <LazyLoadImage src={img03} />
                            </div>
                            <div className="img-ctn-workshops">
                                <LazyLoadImage src={img02} />
                            </div>
                        </div>

                        </div>


                    <div className="photo-credits">
                        <p>Photo credits in order of showing: person x, person x, person x</p>
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

        