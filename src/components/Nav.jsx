import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";


const Nav = ({ isHovered, scrollToAbout, scrollToContact, scrollToHome, scrollToWorkshops }) => {
    return (
        <div className={`nav-ctn ${isHovered ? 'hovered' : ''}`}>
            <div className="nav-content">
                <div className="nav-links">
                    <div className="left-ctn">
                        <a onClick={scrollToHome}>Damaja</a>
                    </div>
                    <div className="right-ctn">
                        <a onClick={scrollToAbout}>About</a>
                        <a onClick={scrollToWorkshops}>Workshops</a>
                        <a onClick={scrollToContact}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;



/*  

                <div className="social-links">
                    <Link to="/">shop</Link>
                    <Link to="/">Instagram</Link>
                </div>


import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";



const Nav = () => {
    return ( 
        <>
        <div className="nav-ctn">
            <Link to="/"><h4>DAMAJA STUDIO</h4></Link>
            <div className="right-ctn">
                <Link to="/">About</Link>
                <Link to="/">Workshops</Link>
            </div>
        </div>
        </>
     );
}
 
export default Nav;

*/

