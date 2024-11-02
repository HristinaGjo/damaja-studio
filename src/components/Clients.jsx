import React from "react";
import "../styles/clients.css"

import adidas from "../assets/adidas-logo.svg"
import vice from "../assets/vice-logo.webp"

import circular from "../assets/circular-berlin-logo.webp"
import dawn from "../assets/dawn-denim-logo.webp"

import ivy from "../assets/ivy-oak-logo.webp"
import olivia from "../assets/olivia-logo.webp"

import peek from "../assets/peek-logo.webp"
import tommy from "../assets/tommy-logo.webp"

import vee from "../assets/vee-logo.webp"
import iD from "../assets/id.svg"

import sessun from "../assets/sessun-logo.svg"



const Clients = () => {
    return ( 
        <>
        <div className="clients-wrapper">
           <div className="clients-title">
                <p>CLIENTS</p>
            </div> 
            <div className="logo-ctn">
                <div className="first-row">
                    <img className="logo-img" src={adidas} />
                    <img className="logo-img" src={ivy} />
                    <img className="logo-img" src={circular} />
                    <img className="logo-img" src={dawn} />
                    <img className="logo-img" src={iD} />
                    <img className="logo-img" src={sessun} />
                   
                </div>
                <div className="second-row">
                    <img className="logo-img" src={peek} />
                    <img className="logo-img" src={olivia} />
                    <img className="logo-img" src={tommy} />
                    <img className="logo-img" src={vice} />
                    <img className="logo-img" src={vee} />
                </div>
            </div>
        </div>

        <div className="clients-wrapper-mobile">
           <div className="clients-title-mobile">
                <p>CLIENTS</p>
            </div> 
            <div className="logo-ctn-mobile">
                <div className="first-row-mobile">
                    <img className="logo-img-m" src={adidas} />
                    <img className="logo-img-m" src={circular} />
                    <img className="logo-img-m" src={iD} />
                </div>
                <div className="second-row-mobile">

                    <img className="logo-img-m" src={tommy} />
                    
                    <img className="logo-img-m" src={vice} />
                </div>

                <div className="third-row-mobile">
                    <img className="logo-img-m" src={sessun} />
                    <img className="logo-img-m" src={ivy} />
                    <img className="logo-img-m" src={peek} />
                </div>

                <div className="fourth-row-mobile">
                    <img className="logo-img-m" src={olivia} />
                    <img className="logo-img-m" src={vee} />
         
                    <img className="logo-img-m" src={dawn} />
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Clients;