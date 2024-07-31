import React, { useEffect, useState } from "react";
import classes from "../styles/artWear.module.css"
import Footer from "../components/Footer";
import {useLocation, useNavigate } from "react-router-dom";
import placeHolder from "../assets/domestika.webp"
import transition from "../transition";


const ArtWear = () => {

    const navigate = useNavigate();
    const location = useLocation ();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          window.scrollTo(0, 0);
          setLoading(false);
        }, 200); // Adjust the timeout duration as needed
    
        return () => clearTimeout(timer);
      }, [location]);

      if (loading) {
        return <div className={classes.loadingScreen}></div>; // White screen while loading
      };

      const handleClick = () => {
        navigate("/")
    };



    /*useEffect (() =>{
        window.scrollTo(0,0)
    }, [location])*/

    /*useEffect(() => {
    if (location.pathname !== '/artwear') {
        window.scrollTo(0, 0);
    }
}, [location.pathname]);*/


    return ( 
        <>
        <div className={classes.pageCtn}>
            <div className={classes.textCtn}>
        
            <div className={classes.textDescription}>
                <div className={classes.title}>
                    <h1>Art Wear</h1>
                    <button className={classes.button} onClick={handleClick}>
                        <div className={classes.close}>
                            <div className={classes.lineTop}></div>
                            <div className={classes.lineBottom}></div>
                        </div>
                    </button>
                </div>

                <div className={classes.text}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean id ligula non enim posuere viverra. 
                        Nullam fermentum nulla vitae accumsan pharetra. Etiam ac sodales turpis. 
                        Vivamus sit amet mi ut sem vehicula fringilla eget mollis metus. 
                        Morbi nec purus sodales, semper diam nec, cursus purus. Curabitur tristique congue accumsan. 
                        Praesent urna metus, porta ut dictum vitae, aliquam vitae nisi. Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                </div>
            </div>
            
               {/* <div className={classes.details}>
                    <span>design: damaja</span>
                    <span>year: damaja</span>
                    <span>material: damaja</span>
                </div>*/}
            </div>



            <div className={classes.imagesCtn}>

            <div className={classes.firstRowImg}>
                    <div className={classes.imgOne} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                    <div className={classes.nestedGridFirst}>
                        <div className={classes.imgTwo} >
                            <img src={placeHolder} alt="Img not available" />
                        </div>
                    </div>
                </div>

                {/*<div className={classes.firstRowImg}>
                    <div className={classes.imgOne}>
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                    <div className={classes.imgTwo} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>*/}

                <div className={classes.secondRowImg}>
                    <div className={classes.imgThree}>
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                    <div className={classes.imgFour} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>

                <div className={classes.thirdRowImg}>
                    <div className={classes.imgFive}>
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>

                <div className={classes.fourthRowImg}>
                    <div className={classes.nestedGrid}>
                        <div className={classes.imgSix} >
                            <img src={placeHolder} alt="Img not available" />
                        </div>
                    </div>
                    <div className={classes.imgSeven} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>

            </div>
            <Footer /> 
        
         </div>

        </>
     );
}
 
export default transition(ArtWear);