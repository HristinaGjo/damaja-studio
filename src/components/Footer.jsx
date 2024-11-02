import React from "react";
import "../styles/footer.css"
import { Link } from "react-router-dom";



const Footer = () => {

  return ( 
    <>
    <div className="footer-container">

      <div className="footer-contact-ctn">
        <div className="info">
          {/*<p>info and collab requests</p>*/}
          <Link to="mailto:info@damaja-studio.com" target="_blank" rel="noreferrer">
            <p>info@damaja-studio.com</p>
          </Link>
        </div>
        <div className="workshops-info">
          {/*<p>workshops inquiries</p>*/}
          <Link to="mailto:workshops@damaja-studio.com" target="_blank" rel="noreferrer">
            <p>workshops@damaja-studio.com</p>
          </Link>
        </div>
        
          <Link to="https://www.damaja-studio.com/" target="_blank" rel="noreferrer">
            <p>webshop</p>
          </Link>

          <Link to="https://www.instagram.com/_damaja_/" target="_blank" rel="noreferrer">
            <p>instagram</p>
          </Link>

          <Link to="https://www.youtube.com/@DamajaHandmade" target="_blank" rel="noreferrer">
            <p>youtube</p>
          </Link>

        </div>

        <div className="site-credits">

          <Link to="https://hristinagjorgieva.com/" target="_blank" rel="noreferrer">
            <p>&copy; 2024 Site by Hristina Gjorgieva</p>
          </Link>
          
        </div>

    </div>

    </>
  );
}


export default Footer;
