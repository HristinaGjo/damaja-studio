import React from "react";
import "../styles/footer.css"



const Footer = () => {

  return ( 
    <>
    <div className="footer-container">

      <div className="footer-contact-ctn">
        <div className="info">
          {/*<p>info and collab requests</p>*/}
          <p>info@damaja-studio.com</p>
        </div>
        <div className="workshops-info">
          {/*<p>workshops inquiries</p>*/}
          <p>workshops@damaja-studio.com</p>
        </div>
        
          <p>webshop</p>
          <p>instagram</p>
          <p>youtube</p>
        </div>

        <div className="site-credits">
          <p>&copy; 2024 Site by DSGN Studio</p>
        </div>

    </div>

    </>
  );
}


export default Footer;
