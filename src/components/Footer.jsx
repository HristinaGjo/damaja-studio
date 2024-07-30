import React, { useEffect, useState } from "react";
import classes from "../styles/footer.module.css"
import { Link, useLocation } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";

const Footer = () => {

  const [activeLink, setActiveLink] = useState("/")

  // Get current location using useLocation from react-router-dom
  let location =useLocation();

  useEffect (() => {
    setActiveLink(location.pathname)
  }, [location])

  const handleSetActiveLink = (link) => {
    setActiveLink (link);
  }

    return ( 
    <>
      <div className={classes.footerCtn}>

        <div className={classes.leftCtn}>

          <div className={classes.footerLinksWrap}>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/" ? classes.active : classes.inactive}`}
            onClick={() => handleSetActiveLink ("/")}>
              <Link to="/">
                <h1>home</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/artwear" ? classes.active : classes.inactive}`}
            onClick={() => handleSetActiveLink ("artwear")}>
              <Link to="/artwear">
                <h1>artwear</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/workshops" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/workshops">
                <h1>workshops</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/about" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/about">
                <h1>about</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/contact" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/contact">
                <h1>contact</h1>
              </Link>
            </div>

          </div> 

            <div className={classes.rights}>
              <h4>&copy; 2024 damaja. all rights reserved</h4>
           </div>
        </div>

        {/*footerLinksWrap*/}

        <div className={classes.middleCtn}>
          <div className={classes.address}> 
              <h4>damaja - studio</h4>
              <h4>Kreuzberg, Berlin</h4>
            <div className={classes.email}>
              <a>damaja@gmail.com <SvgArrowFooter/></a>
            </div>
          </div>
            <div className={classes.webshop}>
              <h4>visit damaja - webshop</h4>
              <Link to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer">webshop <SvgArrowFooter/></Link>
            </div>
        </div>

        <div className={classes.contactLinks}>
              <h4>social</h4>
          <div className={classes.social}>
            <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer">instagram</Link>
            <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer">youtube</Link>
            <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer">linkedIn</Link>
          </div>
        </div>


    </div>

    <div className={classes.footerCtnMobile}>

        <div className={classes.footerLinksWrapMobile}>

           <div className={`${classes.footerLinkWrap} ${activeLink === "/" ? classes.active : classes.inactive}`}
            onClick={() => handleSetActiveLink ("/")}>
              <Link to="/">
                <h1>home</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/artwear" ? classes.active : classes.inactive}`}
            onClick={() => handleSetActiveLink ("artwear")}>
              <Link to="/artwear">
                <h1>artwear</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/workshops" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/workshops">
                <h1>workshops</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/about" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/about">
                <h1>about</h1>
              </Link>
            </div>

            <div className={`${classes.footerLinkWrap} ${activeLink === "/contact" ? classes.active : classes.inactive}`}
            onClick={handleSetActiveLink}>
              <Link to="/contact">
                <h1>contact</h1>
              </Link>
            </div>

        </div> {/*footerLinksWrap*/}

        <div className={classes.middleCtnMobile}>
          <div className={classes.addressMobile}> 
              <h4>damaja - studio</h4>
              <h4>Kreuzberg, Berlin</h4>
        
            <div className={classes.emailMobile}>
              <a>damaja@gmail.com </a>
              <SvgArrowFooter/>
            </div>
          </div>

          <div className={classes.webshopMobile}>
              <h4>damaja - webshop</h4>
              <Link className={classes.webshopLink} to="https://www.damaja-studio.com/" target="_blank" rel = "noopener noreferrer">webshop <SvgArrowFooter/></Link>
          </div>
        </div>

          <div className={classes.socialMobile}>
              <div className={classes.socialMobileLinks}>
                <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel = "noopener noreferrer">instagram</Link>
                <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel = "noopener noreferrer">youtube</Link>
                <Link to="https://www.linkedin.com/in/stefanija-pejchinovska/?originalSubdomain=de" target="_blank" rel = "noopener noreferrer">linkedIn</Link>
              </div>
              <div className={classes.rightsMobile}>
                <p>&copy; 2024</p>
              </div>
          </div>
    </div>
  </>
  );
}


export default Footer;

