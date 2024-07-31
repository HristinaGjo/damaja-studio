import React, { useEffect, useRef, useState } from "react";
import classes from "../styles/homePage.module.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/domestika.webp";
import heroImgMobile from "../assets/domestika.webp";
import firstRowImg from "../assets/domestika.webp";
import secondRowImg from "../assets/secondRow.webp";
import thirdRowImg from "../assets/domestika.webp";
import domestikaImg from "../assets/domestika.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import Footer from "../components/Footer";
import SvgArrow from "../components/SvgArrow";
import SvgArrowFooter from "../components/SvgArrowFooter";
import transition from "../transition";
import { Link, useLocation } from "react-router-dom";


const HomePage = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  const projectsCtn = useRef(null);
  const newsCtn = useRef(null);
  const clientsCtnNew = useRef(null);
  const location = useLocation ();

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [navbarColor, setIsNavbarColor] = useState('#141414');
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
    }, 200); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [location]);


  useEffect(() => {
    const handleScroll = () => {
      if (!newsCtn.current || !clientsCtnNew.current) return;
      const newsRect = newsCtn.current.getBoundingClientRect();
      const clientsRect = clientsCtnNew.current.getBoundingClientRect();

      if (!navOpen) { // Only hide navbar if the menu is not open
        if (window.innerWidth > 0){
          if (newsRect.top <= -200){
            setIsNavbarVisible(false);
          } else {
            setIsNavbarVisible(true);
          }
        };

        if (clientsRect.top <= 0 && clientsRect.bottom > 0){
          setIsNavbarColor('#8F6E3A');
        } else if (newsRect.top <= 0 && newsRect.bottom > 0) {
          setIsNavbarColor('#ffffff'); 
        } else {
          setIsNavbarColor('#141414');
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [navOpen]); // Add isMenuOpen to the dependency array

  const heroHeight = useTransform(scrollY, [0, 600], ['90vh', '70vh']);
  const heroHeightMobile = useTransform(scrollY, [0, 600], ['80vh', '80vh']);

  const { scrollYProgress } = useScroll({
    target: projectsCtn,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const smMobile = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);


  if (loading) {
    return <div className={classes.loadingScreen}></div>; // White screen while loading
  };

  /*const location = useLocation ();

  useEffect (() => {
    window.scrollTo (0,0)
  }, [location])*/

  return (
    <>
      {isNavbarVisible && <Navbar style={{color:navbarColor}} onMenuToggle={setNavOpen} />}
      <div className={classes.pageCtn}>
        <motion.div
          ref={heroRef}
          style={{ 
            height: window.innerWidth <= 768 ? heroHeightMobile : heroHeight,
          }}
          className={classes.heroCtn}
        >
          <img src={heroImg} alt="Img not available" className={classes.heroImage} />
          <img src={heroImgMobile} alt="Img not available" className={classes.heroImageMobile} />
        </motion.div>

        <div ref={projectsCtn} className={classes.projectsCtn}>
        <Link to="/projects/1">
          <motion.div 
            style={{ y: window.innerWidth <= 768 ? smMobile : sm }} 
            className={classes.firstRow}
          >
            <img src={firstRowImg} alt="Img not available" className={classes.firstRowImage} /> 
            <div className={classes.projectName}>
              <span className={classes.span}>adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
          </Link>

          <Link to="/projects/2">
          <motion.div 
            style={{ y: window.innerWidth <= 768 ? smMobile : md }}  
            className={classes.secondRow}
          >
            <img src={secondRowImg} alt="Img not available" className={classes.secondRowImage} />
            <div className={classes.secondProjectName}>
              <span className={classes.span}>adidas</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
          </Link>

          <Link to="/projects/3">
          <motion.div 
            style={{ y: window.innerWidth <= 768 ? smMobile : lg }} 
            className={classes.thirdRow}
          >
            <img src={thirdRowImg} alt="Img not available" className={classes.thirdRowImage} />
            <div className={classes.thirdProjectName}>
              <span className={classes.span}>wall art</span>
              <span className={classes.spanMore}>more +</span>
            </div>
          </motion.div>
          </Link>
        </div>

        <div className={classes.clients}>
          <div ref={clientsCtnNew} className={classes.clientsCtnNew}>
            <div className={classes.damajaClients}>
              <h1>clients</h1>
            </div> 

            <div className={classes.clientsList}>
              <div className={classes.firstCtn}>
                <h3>adidas</h3>
                <h3>tommy hilfiger</h3>
                <h3>circular berlin</h3>
              </div>
              <div className={classes.secondCtn}>
                <h3>olivia steele</h3>
                <h3>i-D</h3>
                <h3>vee collective</h3>
              </div>
              <div className={classes.thirdCtn}>
                <h3>peek & cloppenburg</h3>
                <h3>dawn denim</h3>
                <h3> ivy oak</h3>
              </div>
            </div>

            <div className={classes.clientsListMobile}>
              <div className={classes.firstCtnMobile}>
                <h3>adidas</h3>
                <h3>tommy hilfiger</h3>
                <h3>circular berlin</h3>
              </div>
              <div className={classes.secondCtnMobile}>
                <h3>olivia steele</h3>
                <h3>i-D</h3>
                <h3>vee collective</h3>
              </div>
              <div className={classes.thirdCtnMobile}>
                <h3>peek & cloppenburg</h3>
                <h3>dawn denim</h3>
                <h3> ivy oak</h3>
              </div>
            </div>

            <div className={classes.getInTouch}>
              <h4>for project collaboration get in touch</h4>
              <a href="mailto:damaja@gmail.com">damaja@gmail.com <SvgArrowFooter/></a>
            </div>
          </div>

          <div ref={newsCtn} className={classes.newsCtn}>
            <div className={classes.text}>
              <h4>
                Hand Embroidery for Clothing: <br/> Stitch a Collage Design <br/>
              </h4>
              <div className={classes.textDomestika}>
                <p>course</p>
                <SvgArrow />
              </div>
            </div>
            <div className={classes.imageCtn}>
              <img src={domestikaImg} alt="Img not available" className={classes.image} />
            </div>
          </div>
    
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(HomePage);