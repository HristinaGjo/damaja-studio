import React from "react";
import classes from "../styles/footer.module.css"
import { Link } from "react-router-dom";

const Footer = () => {

    return ( 
        <>
        <div className={classes.footerCtn}>

          <Link to="/">
          <h1>home</h1>
          </Link>
          <div className={classes.dash}>
            <h1>/</h1>
          </div>

          <Link to="/">
          <h1>home</h1>
          </Link>
          <div className={classes.dash}>
            <h1>/</h1>
          </div>

          <Link to="/">
          <h1>home</h1>
          </Link>
          <div className={classes.dash}>
            <h1>/</h1>
          </div>

          <Link to="/">
          <h1>home</h1>
          </Link>

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