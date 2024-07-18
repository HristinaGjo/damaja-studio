import React from "react";
import classes from "../styles/homePage.module.css"
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.webp";
import firstRowImg from "../assets/secondRowImg.webp"
import secondRowImg from "../assets/firstRowImg.webp"
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";



const HomePage = () => {
    
    const pageCtn = useRef(null);
    const { scrollYProgress } = useScroll({
        target:pageCtn,
        offset:[ 'start end', 'end start' ]
    })

    const sm = useTransform (scrollYProgress, [0,1], [0,-150]);
    const md = useTransform (scrollYProgress, [0,1], [0,-250]);

    return ( 
        <>

        <div ref={pageCtn} className={classes.pageCtn}>

            <div className={classes.heroCtn}>
                <img src={heroImg} alt="Img not available" className={classes.heroImage}/>
            </div>

            <div className={classes.projectsCtn}>

            <motion.div style={{y:sm}} className={classes.firstRow}>
                <img src={firstRowImg} alt="Img not available" className={classes.firstRowImage}/>
                <div className={classes.projectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </motion.div>

            <motion.div style={{y:sm}} className={classes.secondRow}>
                <img src={secondRowImg} alt="Img not available" className={classes.secondRowImage}/>
                <div className={classes.secondProjectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </motion.div>

            <motion.div style={{y:sm}} className={classes.thirdRow}>
                <img src={firstRowImg} alt="Img not available" className={classes.thirdRowImage}/>
                <div className={classes.projectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </motion.div>

            </div>

        </div>
        </>
     );
}
 
export default HomePage;