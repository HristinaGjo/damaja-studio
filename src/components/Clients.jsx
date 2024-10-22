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
        </>
     );
}
 
export default Clients;