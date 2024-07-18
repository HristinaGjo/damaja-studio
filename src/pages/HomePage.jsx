import React from "react";
import classes from "../styles/homePage.module.css"
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.webp";
import firstRowImg from "../assets/secondRowImg.webp"
import secondRowImg from "../assets/firstRowImg.webp"



const HomePage = () => {

    return ( 
        <>

        <div className={classes.pageCtn}>

            <div className={classes.heroCtn}>
                <img src={heroImg} alt="Img not available" className={classes.heroImage}/>
            </div>

            <div className={classes.projectsCtn}>

            <div className={classes.firstRow}>
                <img src={firstRowImg} alt="Img not available" className={classes.firstRowImage}/>
                <div className={classes.projectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </div>

            <div className={classes.secondRow}>
                <img src={secondRowImg} alt="Img not available" className={classes.secondRowImage}/>
                <div className={classes.secondProjectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </div>

            <div className={classes.thirdRow}>
                <img src={firstRowImg} alt="Img not available" className={classes.thirdRowImage}/>
                <div className={classes.projectName}>
                <span>Adidas</span>
                <span className={classes.spanMore}>more +</span>
                </div>
            </div>

            </div>

        </div>
        </>
     );
}
 
export default HomePage;