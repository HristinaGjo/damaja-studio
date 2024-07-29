import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";


const Navbar = ({ style, onMenuToggle  }) => {

    const [navOpen, setNavOpen] = useState(false);

    const handleMenuToggle = (toggled) => {
        setNavOpen(toggled);
        onMenuToggle(toggled); // Notify the parent component
    };

    const currentStyle = navOpen ? { color: 'black' } : style;
    const logoStyle = navOpen ? { visibility: 'hidden' } : { visibility: 'visible' };


    return ( 

        <div className="nav" >
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo" style={{...currentStyle, ...logoStyle}}>damaja</div>
                    <div className="menu-toggle" onClick={() => handleMenuToggle(!navOpen)}>
                        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navOpen ? "lineTop spin" : "lineTop"} style={{ ...style, backgroundColor: currentStyle.color }} ></span>
                            <span className={navOpen ? "lineBottom spin" : "lineBottom"} style={{ ...style, backgroundColor: currentStyle.color }}></span>
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

                    <div className="nav-rights"
                        style={{
                            bottom:navOpen ? "0" :"-20px",
                            opacity:navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.2s" : "0s"
                            }}>
                            <p>&copy; 2024 damaja</p>
                        </div>

                        <div className="nav-webshop">
                            <Link to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.3s" : "0s"
                                }}>
                                    webshop <SvgArrowFooter/>
                            </Link>
                        </div>


                        <div className="nav-social-media"
                            >
                            <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.4s" : "0s"
                                }}>
                                    instagram
                            </Link>
                            <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.5s" : "0s"
                                }}>
                                    youtube
                                </Link>
                            <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.6s" : "0s"
                                }}>
                                    linkedIn
                            </Link>
                        </div>


                    </div>

                    <div className="nav-footer-mobile">

                    <div className="nav-webshop-mobile">
                            <Link to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.2s" : "0s"
                                }}>
                                    webshop <SvgArrowFooter/>
                            </Link>
                        </div>

                        <div className="nav-social-media-mobile"
                            >
                            <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.3s" : "0s"
                                }}>
                                    instagram
                            </Link>
                            <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.4s" : "0s"
                                }}>
                                    youtube
                                </Link>
                            <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer"
                            style={{
                                bottom:navOpen ? "0" :"-20px",
                                opacity:navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "1.5s" : "0s"
                                }}>
                                    linkedIn
                            </Link>
                        </div>

                        <div className="nav-rights-mobile"
                        style={{
                            bottom:navOpen ? "0" :"-20px",
                            opacity:navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.6s" : "0s"
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





