import React, { useRef } from "react";
import classes from "../styles/homePage.module.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.webp";
import firstRowImg from "../assets/secondRowImg.webp";
import secondRowImg from "../assets/firstRowImg.webp";
import { useScroll, useTransform, motion } from "framer-motion";

const HomePage = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const projectsCtn = useRef(null);

  // Animate hero image to shrink and disappear as projectsCtn comes into view
  /*const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);*/

  const heroHeight = useTransform(scrollY, [0, 600], ['90vh', '50vh']);
  
  /*const heroOpacity = useTransform(scrollY, [0, 300], [1, 1]);*/

  // Animate projectsCtn to parallax scroll
  const { scrollYProgress } = useScroll({
    target: projectsCtn,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <>
      <div className={classes.pageCtn}>
        <motion.div
          ref={heroRef}
          style={{ 
            height: heroHeight,
            /*transition: 'height 0.8s ease, opacity 0.8s ease-in-out'*/
         }}
          className={classes.heroCtn}
        >
          <img src={heroImg} alt="Img not available" className={classes.heroImage} />
        </motion.div>

        <div ref={projectsCtn} className={classes.projectsCtn}>
          <motion.div style={{ y: sm }} className={classes.firstRow}>
            <img src={firstRowImg} alt="Img not available" className={classes.firstRowImage} />
            <div className={classes.projectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>

          <motion.div style={{ y: sm }} className={classes.secondRow}>
            <img src={secondRowImg} alt="Img not available" className={classes.secondRowImage} />
            <div className={classes.secondProjectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>

          <motion.div style={{ y: sm }} className={classes.thirdRow}>
            <img src={firstRowImg} alt="Img not available" className={classes.thirdRowImage} />
            <div className={classes.thirdProjectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
