import React from "react";
import "../styles/workshops.css"
import workshopVideo01 from "../assets/video-1.mp4"
import workshopVideo02 from "../assets/video-2.mp4"
import workshopVideo03 from "../assets/video-3.mp4"


const Workshops = () => {
    return ( 
        <>
        <div className="workshops-wrapper">
            <div className="workshops-content-ctn">
                <div className="workshops-left-ctn">
                    <div className="title">
                        <p>WORKSHOPS</p>
                    </div>
                    <div className="contact-section">
                        <p>Workshops inquiries</p>
                        <div className="button-contact">
                            <p>workshops@damaja-studio.com</p>
                        </div>
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
                    <div className="collab-list">
                        {/*<div className="title-collab">
                            <p>Previous Workshops with:</p>
                        </div> */}
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
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Workshops;

/* 
                    <div className="clients">
                        
                    </div>
*/