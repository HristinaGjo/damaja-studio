import React from "react";
import classes from "../styles/footer.module.css"
import { Link } from "react-router-dom";

const Footer = () => {

    return ( 
        <>
        <div className={classes.footerCtn}>

          <div className={classes.footerLinksWrap}>
            
            <div className={classes.footerLinkWrapHome}>
              <Link to="/">
                <h1>home</h1>
              </Link>
            <div className={classes.dashWrap}>
                <h1 >/</h1>
              </div>
          </div>

          <div className={classes.footerLinkWrap}>
              <Link to="/">
                <h1>art wear</h1>
              </Link>
            <div className={classes.dashWrap}>
                <h1 >/</h1>
              </div>
          </div>

          <div className={classes.footerLinkWrap}>
              <Link to="/">
                <h1>about</h1>
              </Link>
            <div className={classes.dashWrap}>
                <h1>/</h1>
              </div>
          </div>

          <div className={classes.footerLinkWrap}>
              <Link to="/">
                <h1>contact</h1>
              </Link>
            <div className={classes.dashWrap}>
                <h1>/</h1>
              </div>
          </div>
  
          </div>

          <div className={classes.contactLinks}>

            <div className={classes.email}>
            <span>damaja@gmail.com</span>
            </div>

            <div className={classes.webshop}>
            <span>webshop</span>
            </div>
          
            <div className={classes.social}>
            <span>instagram</span>
            <span>youtube</span>
            <span>linkedin</span>
            </div>
          </div>

        </div>
        </>
     );
}
 
export default Footer;



/* import React, { useRef } from "react";
import classes from "../styles/footer.module.css"
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {

    const footerCtn = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: footerCtn,
      offset: ['start end', 'end start'],
    });
  
    const sm = useTransform(scrollYProgress, [0, 1], [0, -0]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return ( 
        <>
        <motion.div ref={footerCtn} style={{y:sm}} className={classes.footerCtn}>
            <h1>hello</h1>
        </motion.div>
        </>
     );
}
 
export default Footer;*/