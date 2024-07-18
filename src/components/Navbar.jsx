import React from "react";
import classes from "../styles/navbar.module.css"


const Navbar = () => {
    return ( 
        <>
        <div className={classes.navbarCtn}>
            <div className={classes.logo}>
                <span>damaja</span>
            </div>

            <div className={classes.menu}>
                <span>menu</span>
            </div>
            
        </div>
        </>
     );
}
 
export default Navbar;