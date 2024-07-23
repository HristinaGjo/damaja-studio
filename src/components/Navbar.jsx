import React from "react";
import classes from "../styles/navbar.module.css"


const Navbar = ({style, className}) => {
    return ( 
        <>
        <div className={`${classes.navbarCtn} ${className}`} style={style}>
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



/*import React from "react";
import classes from "../styles/navbar.module.css"


const Navbar = ({className}) => {
    return ( 
        <>
        <div className={`${classes.navbarCtn} ${className}`}>
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
 
export default Navbar;*/