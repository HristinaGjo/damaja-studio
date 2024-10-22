import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";



const Nav = ({isHovered}) => {
    return ( 
        <>
        <div className={`nav-ctn ${isHovered ? 'hovered' : ''}`} >
            <Link to="/">About</Link>
            <Link to="/"><h3>DAMAJA  STUDIO</h3></Link>
            <Link to="/">Workshops</Link>
        </div>
        </>
     );
}
 
export default Nav;



/*  
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

