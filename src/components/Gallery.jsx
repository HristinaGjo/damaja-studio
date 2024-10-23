import React, { useState } from "react";
import "../styles/gallery.css";

const rows = [
    {
        title: "01 WALL ART, PERSONAL WORK",
        images: [
            { src: "/assets/wa-01.webp", alt: "Image not available" },
            { src: "/assets/wa-02.webp", alt: "Image not available" },
            { src: "/assets/wa01-4.webp", alt: "Image not available" },
            { src: "/assets/wa-03.webp", alt: "Image not available" },
            { src: "/assets/wa02-2.webp", alt: "Image not available" },
            { src: "/assets/wa02-3.webp", alt: "Image not available" },
            { src: "/assets/wa02-4.webp", alt: "Image not available" },
        ],
    },
    {
        title: "02 BLN GREEN MAP, ADIDAS FLAGSHIP STORE",
        images: [
            { src: "/assets/adidas03.webp", alt: "Image not available" },
            { src: "/assets/adidas01.webp", alt: "Image not available" },
            { src: "/assets/adidas04.webp", alt: "Image not available" },
            { src: "/assets/adidas02.webp", alt: "Image not available" },
            { src: "/assets/adidas05.webp", alt: "Image not available" },
        ],
    },
    {
        title: "02 HOOPS, PERSONAL WORK",
        images: [
            { src: "/assets/hoops01.webp", alt: "Image not available" },
            { src: "/assets/hoops03.webp", alt: "Image not available" },
            { src: "/assets/hoops04.webp", alt: "Image not available" },
            { src: "/assets/hoops07.webp", alt: "Image not available" },
            { src: "/assets/hoops06.webp", alt: "Image not available" },
            { src: "/assets/hoops05.webp", alt: "Image not available" },
            { src: "/assets/hoops02.webp", alt: "Image not available" },
        ],
    },
    {
        title: "04 FLORA & FAUNA, PRIVATE RESIDENCE, BERLIN",
        images: [
            { src: "/assets/flora05.webp", alt: "Image not available" },
            { src: "/assets/flora01.webp", alt: "Image not available" },
            { src: "/assets/flora04.webp", alt: "Image not available" },
            { src: "/assets/flora03.webp", alt: "Image not available" },
            { src: "/assets/flora02.webp", alt: "Image not available" },
            { src: "/assets/flora06.webp", alt: "Image not available" },
        ],
    },
];

const Gallery = ({ setIsHovered }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State to store the clicked image

    // Function to close the full-screen view
    const closeFullScreen = () => {
        setSelectedImage(null);
    };

    return (
        <div className={`gallery-container ${hoveredImage ? 'hovered' : ''}`}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`row-container row-${rowIndex}`}>
                    <div className={`title-column ${hoveredRow === rowIndex ? 'hovered' : ''}`}>
                        <p>{row.title}</p>
                    </div>
                    <div className={`images-row images-row-${rowIndex}`}>
                        {row.images.map((image, imgIndex) => (
                            <div 
                                key={imgIndex}
                                className={`image-wrapper ${hoveredImage === image.src ? 'hovered' : hoveredImage ? 'non-hovered' : ''}`}
                                onMouseEnter={() => {
                                    setHoveredImage(image.src);
                                    setIsHovered(true);
                                    setHoveredRow(rowIndex);
                                }}
                                onMouseLeave={() => {
                                    setHoveredImage(null);
                                    setIsHovered(false);
                                    setHoveredRow(null);
                                }}
                                onClick={() => setSelectedImage(image.src)} // Set selected image on click
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Fullscreen Pop-up */}
            {selectedImage && (
                <div className="fullscreen-overlay">
                    <button className="close-button" onClick={closeFullScreen}>Close</button>
                    <img src={selectedImage} alt="Full view" className="fullscreen-image" />
                </div>
            )}
        </div>
    );
};

export default Gallery;