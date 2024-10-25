import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";


const Nav = ({isHovered}) => {
    return ( 
        <>
        <div className={`nav-ctn ${isHovered ? 'hovered' : ''}`} >
            <div className="nav-content">
                <div className="nav-links">
                    <div className="left-ctn">
                        <Link to="/">DAMAJA</Link>
                    </div>
                    <div className="right-ctn">
                        <Link to="/">About</Link>
                        <Link to="/">Workshops</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
 
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

