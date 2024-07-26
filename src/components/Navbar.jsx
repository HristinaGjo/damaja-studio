import React, { useState } from "react";
import classes from "../styles/navbar.module.css";
import { Squeeze as Hamburger } from 'hamburger-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";

const Navbar = ({ style, onMenuToggle  }) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = (toggled) => {
        setIsOpen(toggled);
        onMenuToggle(toggled); // Notify the parent component
    };
    
    const customHamburgerStyle = {
        width: '100px',  // Custom width
        height: '2px'   // Custom height (line thickness)
    };

    return (
        <div className={classes.navbarCtn} style={style}>
            <div className={classes.menu}>
                <Hamburger 
                    className={classes.customHamburger}
                    size={35}
             
                    distance="md"
                    style={customHamburgerStyle} // Apply the custom style
                    toggled={isOpen} 
                    toggle={handleMenuToggle} 
                />

                <div className={`${classes.menuContent} ${isOpen ? classes.open : ''}`}>
                    <div className={classes.menuItems}>
                        <div className={classes.menuItemHome} onClick={() => navigate('/')}><h1>home</h1></div>
                        <div className={classes.menuItem} onClick={() => navigate('/artwear')}><h1>art wear</h1></div>
                        <div className={classes.menuItem} onClick={() => navigate('/workshops')}><h1>workshops</h1></div>
                        <div className={classes.menuItem} onClick={() => navigate('/about')}><h1>about</h1></div>
                        <div className={classes.menuItem} onClick={() => navigate('/contact')}><h1>contact</h1></div>
                    </div>

                    <div className={classes.socialCtn}>
                        <div className={classes.social}>
                            <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer">instagram</Link>
                            <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer">youtube</Link>
                            <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer">linkedIn</Link>
                        </div>

                        <div className={classes.webshop}>
                            <Link to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer">webshop <SvgArrowFooter/></Link>
                        </div>
                        
                        <div className={classes.rights}>
                            <p>&copy; 2024 damaja</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;








            {/*<div className={classes.logo}>
                <span>damaja</span>
            </div> */}

           {/* <div className={classes.menu}>
                <span>menu</span>
            </div> */}




/*import React from "react";
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
 
export default Navbar; */



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