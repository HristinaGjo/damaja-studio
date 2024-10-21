import React, { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../assets/adidas.webp';
import Picture2 from '../assets/flora.webp';
import Picture3 from '../assets/hoops.webp';
import Picture4 from '../assets/wallArt.webp';
import Picture5 from '../assets/hoops.webp';
import Picture6 from '../assets/campaign01.webp';
import Picture7 from '../assets/campaign02.webp';
import styles from '../styles/newHomePage.module.css';

const NewHomePage = () => {
    const containerRef = useRef(null);
    
    // Capturing scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Define scaling and visibility for each image based on scrollYProgress
    const scale1 = useTransform(scrollYProgress, [0, 0.14], [1, 2]);
    const opacity1 = useTransform(scrollYProgress, [0.12, 0.14], [1, 0]);

    const scale2 = useTransform(scrollYProgress, [0.14, 0.28], [1, 2]);
    const opacity2 = useTransform(scrollYProgress, [0.26, 0.28], [1, 0]);

    const scale3 = useTransform(scrollYProgress, [0.28, 0.42], [1, 2]);
    const opacity3 = useTransform(scrollYProgress, [0.40, 0.42], [1, 0]);

    const scale4 = useTransform(scrollYProgress, [0.42, 0.56], [1, 2]);
    const opacity4 = useTransform(scrollYProgress, [0.54, 0.56], [1, 0]);

    const scale5 = useTransform(scrollYProgress, [0.56, 0.70], [1, 2]);
    const opacity5 = useTransform(scrollYProgress, [0.68, 0.70], [1, 0]);

    const scale6 = useTransform(scrollYProgress, [0.70, 0.84], [1, 2]);
    const opacity6 = useTransform(scrollYProgress, [0.82, 0.84], [1, 0]);

    const scale7 = useTransform(scrollYProgress, [0.84, 1], [1, 2]);
    const opacity7 = useTransform(scrollYProgress, [0.98, 1], [1, 0]);

    // Array of pictures with their respective scale and opacity transformations
    const pictures = [
        { src: Picture1, scale: scale1, opacity: opacity1 },
        { src: Picture2, scale: scale2, opacity: opacity2 },
        { src: Picture3, scale: scale3, opacity: opacity3 },
        { src: Picture4, scale: scale4, opacity: opacity4 },
        { src: Picture5, scale: scale5, opacity: opacity5 },
        { src: Picture6, scale: scale6, opacity: opacity6 },
        { src: Picture7, scale: scale7, opacity: opacity7 },
    ];

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale, opacity }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale, opacity }}
                        className={styles.el}
                    >
                        <div className={styles.imageContainer}>
                            <img src={src} alt={`img-${index + 1}`} className={styles.image} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewHomePage;