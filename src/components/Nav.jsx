import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";



const Nav = () => {
    return ( 
        <>
        <div className="nav-ctn">
                <Link to="/">Home</Link>
                {/*<Link to="/">About</Link>*/}
                <Link to="/">Workshops</Link>
        </div>
        </>
     );
}
 
export default Nav;


/*         <div className="nav-ctn">
            <h1>Damaja Studio</h1>
            <p>Embroidery Studio, Berlin</p>
        </div> */