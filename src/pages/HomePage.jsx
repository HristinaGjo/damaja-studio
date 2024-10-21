import React from "react";
import "../styles/homePage.css"
import HeroSection from "../components/HeroSection";

import img01 from "../assets/adidas02.webp"
import img02 from "../assets/adidas01.webp"
import img03 from "../assets/adidas03.webp"
import img04 from "../assets/adidas04.webp"
import img05 from "../assets/adidas05.webp"

import img06 from "../assets/wa-01.webp"
import img07 from "../assets/wa-02.webp"
import img08 from "../assets/wa-03.webp"
import img09 from "../assets/wa01-4.webp"
import img10 from "../assets/wa02-2.webp"
import img11 from "../assets/wa02-3.webp"
import img12 from "../assets/wa02-4.webp"

import img13 from "../assets/wa-01.webp"
import img14 from "../assets/wa-02.webp"
import img15 from "../assets/wa-03.webp"
import img16 from "../assets/wa01-4.webp"
import img17 from "../assets/wa02-2.webp"
import img18 from "../assets/wa02-3.webp"
import img19 from "../assets/wa02-4.webp"

import img20 from "../assets/flora01.webp"
import img21 from "../assets/flora02.webp"
import img22 from "../assets/flora03.webp"
import img23 from "../assets/flora04.webp"
import img24 from "../assets/flora05.webp"
import img25 from "../assets/flora06.webp"








const HomePage = () => {
    return ( 
        <>
        <HeroSection />
        <div className="work-ctn">

        <div className="row-ctn">
                <div className="row-info-v-1">
                    <p>O1</p>
                    <p>Wall Art, Personal Work</p>
                </div>
                <div className="row-items-v-1">
                    <div className="img-project">
                        <img src={img06}  />
                    </div>
                    <div className="img-project">
                        <img src={img07}  />
                    </div>
                    <div className="img-project">
                        <img src={img08}  />
                    </div>
                    <div className="img-project">
                        <img src={img09}  />
                    </div>
                    <div className="img-project">
                        <img src={img10}  />
                    </div>
                    <div className="img-project">
                        <img src={img12}  />
                    </div>
                    <div className="img-project">
                        <img src={img11}  />
                    </div>
                </div>
            </div>

            <div className="row-ctn">
                <div className="row-info-v-2">
                    <p>O2</p>
                    <p>Berlin Green Map for Adidas Flagship Store, Berlin</p>
                </div>
                <div className="row-items-v-2">
                    <div className="img-v-2">
                        <img src={img01}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img02}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img03}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img04}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img05}  />
                    </div>
                </div>
            </div>


            <div className="row-ctn">
                <div className="row-info-v-4">
                    <p>O4</p>
                    <p>Flora & Fauna, Private residence Berlin</p>
                </div>
                <div className="row-items-v-2">
                    <div className="img-v-2">
                        <img src={img23}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img20}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img22}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img25}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img24}  />
                    </div>
                    <div className="img-v-2">
                        <img src={img21}  />
                    </div>
                </div>
            </div>

            


        </div>
        </>
     );
}
 
export default HomePage;