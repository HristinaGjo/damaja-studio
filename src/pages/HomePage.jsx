import React, { useEffect, useRef, useState } from "react";
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
import SvgArrowFooter from "../components/SvgArrowFooter";

const HomePage = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  const projectsCtn = useRef(null);
  const newsCtn = useRef(null);
  const clientsCtnNew = useRef(null);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [navbarColor, setIsNavbarColor] = useState('#ED434A')


  useEffect (() =>{
    const handleScroll = () => {
      const newsRect = newsCtn.current.getBoundingClientRect();
      const clientsRect = clientsCtnNew.current.getBoundingClientRect();

      if (window.innerWidth > 0){
        if (newsRect.top <= -200){
          setIsNavbarVisible(false)
        } else {
          setIsNavbarVisible(true)
        }
      };

      if (clientsRect.top <= 0 && clientsRect.bottom > 0){
        setIsNavbarColor ('#8F6E3A')
      } else if (newsRect.top <= 0 && newsRect.bottom >0) {
        setIsNavbarColor('#ffffff')
      } else {
        setIsNavbarColor ('#ED434A')
      }

    };

      window.addEventListener("scroll", handleScroll)
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
  
  },[])


  // Animate hero image to shrink and disappear as projectsCtn comes into view
  /*const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);*/

  const heroHeight = useTransform(scrollY, [0, 600], ['90vh', '50vh']);
  const heroHeightMobile = useTransform(scrollY, [0, 600], ['80vh', '80vh']);


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
    {isNavbarVisible && <Navbar style={{color:navbarColor}}/>}
    {/*{isNavbarVisible && <Navbar className={isNavbarVisible ? "" : "hidden"} style={{color:navbarColor}}/>}*/}
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
              <span className={classes.span}>Adidas</span>
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
              <span className={classes.span}>Adidas</span>
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
              <span className={classes.span}>Adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
        </div>
    

       <div className={classes.clients}>
            <div  ref={clientsCtnNew}className={classes.clientsCtnNew}>
              
              <div className={classes.damajaClients}>
                  <h1>clients</h1>
              </div> 

              <div className={classes.clientsList}>
                  <h3>adidas, tommy hilfiger, circular berlin</h3>
                  <h3>olivia steele, i-D, vee collective</h3>
                  <h3>peek & cloppenburg, dawn denim</h3>
              </div>

              <div className={classes.getInTouch}>
                <h4>for project collaboration get in touch</h4>
                <a>damaja@gmail.com <SvgArrowFooter/></a>

              </div>
            </div>
         
            <div ref={newsCtn} className={classes.newsCtn}>
                <div className={classes.text}>
                    <h4>
                    Hand Embroidery for Clothing: Stitch a Collage Design <br/>
                    </h4>
                    <div className={classes.textDomestika}>
                    <p>course</p>
                    <SvgArrow />
                    </div>
                   {/* <p className={classes.textDomestika}>Learn to embroider colorful images onto 
                      stretchy garments to upcycle your clothing into fashionable works of art
                    </p> */}
                </div>
                <div className={classes.imageCtn}>
                    <img src={firstRowImg} alt="Img not available" className={classes.image} />
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