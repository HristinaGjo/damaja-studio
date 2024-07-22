import React, { useRef } from "react";
import classes from "../styles/homePage.module.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.webp";
import firstRowImg from "../assets/secondRowImg.webp";
/*import hoopImg from "../assets/secondRowImg.webp";*/
import secondRowImg from "../assets/firstRowImg.webp";
import domestikaImg from "../assets/domestika.webp"
import { useScroll, useTransform, motion } from "framer-motion";
import Footer from "../components/Footer";
import SvgArrow from "../components/SvgArrow";

const HomePage = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  const projectsCtn = useRef(null);

  // Animate hero image to shrink and disappear as projectsCtn comes into view
  /*const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);*/

  const heroHeight = useTransform(scrollY, [0, 600], ['90vh', '50vh']);
  const heroHeightMobile = useTransform(scrollY, [0, 600], ['90vh', '50vh']);


  const { scrollYProgress } = useScroll({
    target: projectsCtn,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const smMobile = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <>
      <div className={classes.pageCtn}>
        <motion.div
          ref={heroRef}
          style={{ 
            height: window.innerWidth <= 768 ? heroHeightMobile : heroHeight,
            /*transition: 'height 0.8s ease, opacity 0.8s ease-in-out'*/
         }}
          className={classes.heroCtn}
        >
          <img src={heroImg} alt="Img not available" className={classes.heroImage} />
        </motion.div>

        <div ref={projectsCtn} className={classes.projectsCtn}>
          <motion.div 
          style={{
            y: window.innerWidth <= 768 ? smMobile : sm,
          }} 
          className={classes.firstRow}>
            <img src={firstRowImg} alt="Img not available" className={classes.firstRowImage} />
            <div className={classes.projectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>

          <motion.div 
          style={{
            y: window.innerWidth <= 768 ? smMobile : md,
          }}  
          className={classes.secondRow}>
            <img src={secondRowImg} alt="Img not available" className={classes.secondRowImage} />
            <div className={classes.secondProjectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>

          <motion.div 
          style={{
            y: window.innerWidth <= 768 ? smMobile : lg,
          }} 
          className={classes.thirdRow}>
            <img src={firstRowImg} alt="Img not available" className={classes.thirdRowImage} />
            <div className={classes.thirdProjectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
        </div>
    

        <div className={classes.clients}>
            <div className={classes.clientsTitle}>
                <h2>clients</h2>
            </div>

            <div className={classes.clientsCtn}>
            <div className={classes.thirdRowClients}>
                    <h3 className={classes.firstThirdRow}>adidas</h3>
                    <h3 className={classes.secondThirdRow}>tommy hilfiger</h3>
                </div>
                <div className={classes.secondRowClients}>
                    <h3>vice</h3>
                </div>
                <div className={classes.firstRowClients}>
                    <h3 className={classes.firstTitle}>circular berlin</h3>
                    <h3 className={classes.secondTitle}>olivia steele</h3>
                </div>
                
                <div className={classes.fourthRowClients}>
                    <h3>i-D</h3>
                </div>
                <div className={classes.fifthRowClients}>
                    <h3>peek & cloppenburg</h3>
                </div>
                <div className={classes.sixthRowClients}>
                    <h3 className={classes.sixthFirstTitle}>vee collective</h3>
                    <h3 className={classes.sixthSecondTitle}>dawn denim</h3>
                </div>
            </div>

            <div className={classes.newsCtn}>
                <div className={classes.text}>
                    <h4>
                    Hand Embroidery for Clothing: Stitch a Collage Design <br/>
                    </h4>
                    <div className={classes.textDomestika}>
                    <p>course</p>
                    <SvgArrow/>
                    </div>
                   {/* <p className={classes.textDomestika}>Learn to embroider colorful images onto 
                      stretchy garments to upcycle your clothing into fashionable works of art
                    </p> */}
                </div>
                <div className={classes.imageCtn}>
                    <img src={domestikaImg} alt="Img not available" className={classes.image} />
                </div>
            </div>
            <Footer />
        </div>
        </div>

  
    </>
  );
};

export default HomePage;







            {/*<img src={hoopImg} alt="Img not available" className={classes.hoopImage} />
            <div className={classes.hoopProjectName}>
              <span>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>*/}


            // clients
            /*
       
      
        
            
            , 
            
            , 
        
            , 
             
            */


            // clients
            /*
            Adidas, 
            Tommy Hilfiger, 
            Vice, 
            I-D, 
            Sessún, 
            Peek and Cloppenburg, 
            Dawn Denim, 
            Olivia Steele, 
            Vee Collective, 
            Circular Berlin 
            */