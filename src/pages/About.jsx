import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "../styles/about.module.css"
import Navbar from "../components/Navbar";
import founderImg from "../assets/domestika.webp";
import domestikaImg from "../assets/domestika.webp";
import SvgArrow from "../components/SvgArrow";
import Footer from "../components/Footer";
import transition from "../transition";


const About = () => {

    const location = useLocation ();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          window.scrollTo(0, 0);
          setLoading(false);
        }, 200);
    
        return () => clearTimeout(timer);
      }, [location]);

      if (loading) {
        return <div className={classes.loadingScreen}></div>; // White screen while loading
      };

    return ( 
        <>
        <Navbar />
        <div className={classes.pageCtn}>

        <div className={classes.founderCtn}>
                <div className={classes.textFounder}>
                    <div className={classes.titleFounder}>
                        <h2>the founder <br/> of damaja</h2>
                    </div>
                    <div className={classes.fullTextFounder}>
                        <span>Stefanija Pejchinovska, who works behind the name Damaja, is a hand embroiderer based in Berlin, Germany. 
                            She is a graduated architect who finds ultimate pleasure in hand embroidery as meditative and satisfying craft.
                            Stefanija is self taught and practice hand embroidery in the past two decades.
                            <br/> <br/>
                            She believes in more mindful approach to life through reuse of textiles, slow fashion, slow creation. 
                            Her work consists of teaching workshops, art embroidery explorations and conscious collaborations with local designers and ethical brands.
                        </span>
                    </div>
                </div>

                <div className={classes.founderImgCtn}>
                    <img src={founderImg} alt="Img not available" />
                </div>
            </div>
               
            <div className={classes.textCtn}>
                <div className={classes.brandText}>
                    <span className={classes.fullOpacity}>damaja </span>
                    <span className={classes.halfOpacity}>focuses on hand embroidery, slow fashion, and mindful living. 
                    Emphasizing the reuse of textiles, the brand supports sustainable practices through slow creation, 
                    conscious collaborations with ethical brands, and offering workshops in art embroidery. 
                    This approach reflects a commitment to </span> 
                    <span className={classes.fullOpacity}>environmental consciousness and artisanal craftsmanship.</span>
                </div>
            </div>



            <div className={classes.newsCtn}>
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

            <Footer />

        </div>
        </>
     );
}
 
export default transition(About);