import React, {useRef} from "react";
import classes from "../styles/footer.module.css"
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SvgArrowFooter from "./SvgArrowFooter";

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

          <div className={classes.address}>
              <h4>damaja - studio</h4>
              <h4>Berlin</h4>
            <div className={classes.email}>
              <a>damaja@gmail.com <SvgArrowFooter/></a>
            </div>
          </div>



          <div className={classes.addressMobile}>
              <h4>damaja - studio</h4>
              <h4>Berlin</h4>
            <div className={classes.emailMobile}>
              <a>damaja@gmail.com <SvgArrowFooter/></a>
            </div>
            <div className={classes.webshopMobile}>
              <h4>check damaja shop</h4>
              <a>webshop <SvgArrowFooter/></a>
            </div>
          </div>

          <div className={classes.contactLinks}>

            {/*<div className={classes.email}>
            <span>damaja@gmail.com</span>
            </div> */}

            <div className={classes.webshop}>
              <a>webshop <SvgArrowFooter/></a>
            </div>


          
            <div className={classes.social}>
              <a>instagram</a>
              <a>youtube</a>
              <a>linkedin</a>
            </div>

            <div className={classes.socialMobile}>
              {/*<h4>social</h4>*/}
              <a>instagram</a>
              <a>youtube</a>
              <a>linkedin</a>
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