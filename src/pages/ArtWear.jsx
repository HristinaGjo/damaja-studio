import React from "react";
import classes from "../styles/artWear.module.css"
import Footer from "../components/Footer";
import {useNavigate } from "react-router-dom";
import placeHolder from "../assets/domestika.webp"


const ArtWear = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/")
    };

    return ( 
        <>
        <div className={classes.pageCtn}>
            <div className={classes.textCtn}>
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
                        Praesent urna metus, porta ut dictum vitae, aliquam vitae nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </div>
            </div>

            <div className={classes.imagesCtn}>

                <div className={classes.firstRowImg}>
                    <div className={classes.imgFirst}>
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                    <div className={classes.imgSecond} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>

                <div className={classes.secondRowImg}>
                    <div className={classes.imgThird}>
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                    <div className={classes.imgFourth} >
                        <img src={placeHolder} alt="Img not available" />
                    </div>
                </div>

            </div>
        
         </div>
         <Footer /> 
        </>
     );
}
 
export default ArtWear;