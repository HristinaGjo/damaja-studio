import React, { useState } from "react";
import "../styles/navbar.css";
import { Squeeze as Hamburger } from 'hamburger-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";


const Navbar = ({ style, onMenuToggle  }) => {

    const [navOpen, setNavOpen] = useState(false);

    const handleMenuToggle = (toggled) => {
        setNavOpen(toggled);
        onMenuToggle(toggled); // Notify the parent component
    };

    return ( 

        <div className="nav" style={style}>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">damaja</div>
                    <div className="menu-toggle" onClick={() => handleMenuToggle(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                            <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>
                </div>

                <div className="nav-overlay"
                style={{
                    top:navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                }}
                >
                    <ul className="nav-links">
                        <li className="nav-item-home">
                            <Link to='/'  onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top:navOpen ? "0" : "120px",
                                transitionDelay:navOpen ? "0.8s" : "0s",

                            }}>
                                <h1>home</h1>
                            </Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to='/artwear' onClick={() => setNavOpen(!navOpen)}
                             style={{
                                top:navOpen ? "0" : "120px",
                                transitionDelay:navOpen ? "0.9s" : "0s",
                            }}>
                                <h1>art wear</h1></Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to='/workshops' onClick={() => setNavOpen(!navOpen)}
                                style={{
                                top:navOpen ? "0" : "120px",
                                transitionDelay:navOpen ? "1s" : "0s",
                            }}>
                                <h1>workshops</h1></Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top:navOpen ? "0" : "120px",
                                transitionDelay:navOpen ? "1.1s" : "0s",
                            }}>
                                <h1>about</h1></Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top:navOpen ? "0" : "120px",
                                transitionDelay:navOpen ? "1.2s" : "0s",
                            }}>
                                <h1>contact</h1></Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                    </ul>

                    <div className="nav-footer">
                        <div className="nav-social-media"
                            >
                            <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.2s" : "0"
                                }}>
                                    instagram
                            </Link>
                            <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.3s" : "0"
                                }}>
                                    youtube
                                </Link>
                            <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.4s" : "0"
                                }}>
                                    linkedIn
                            </Link>
                        </div>
                        <div className="nav-webshop">
                            <Link to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.5s" : "0"
                                }}>
                                    webshop <SvgArrowFooter/>
                            </Link>
                        </div>
                        <div className="nav-rights"
                        style={{
                            bottom:navOpen ? "0" :"-20px",
                            opacity:navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.6s" : "0"
                            }}>
                            <p>&copy; 2024 damaja</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;






/*
import React, { useState } from "react";
import classes from "../styles/navbar.module.css";
import { Squeeze as Hamburger } from 'hamburger-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";


const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    return ( 

        <div className={classes.nav}>
            <div className={classes.navContainer}>
                <div className={classes.navbar}>
                    <div className={classes.logo}>damaja</div>
                    <div className={classes.menuToggle} onClick={() => setNavOpen(!navOpen)}>
                    <div className={navOpen ? classes.hamBoxOpen : classes.hamBox}>
                            <span className={classes.lineTop + (navOpen ? ` ${classes.spin}` : '')}></span>
                            <span className={classes.lineBottom + (navOpen ? ` ${classes.spin}` : '')}></span>
                        </div>
                    </div>
                </div>

                <div className={classes.navOverlay}
                style={{
                    top:navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                }}
                
                ></div>

            </div>
        </div>
     );
}
 
export default Navbar;
*/





/*import React, { useState } from "react";
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

export default Navbar; */



