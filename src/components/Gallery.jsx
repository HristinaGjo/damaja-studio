import React, { useState } from "react";
import "../styles/gallery.css";

// Original rows data with titles and images
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
            { src: "/assets/adidas06.webp", alt: "Image not available" },
            { src: "/assets/adidas01.webp", alt: "Image not available" },
            { src: "/assets/adidas02.webp", alt: "Image not available" },
            { src: "/assets/adidas05.webp", alt: "Image not available" },
            { src: "/assets/adidas04.webp", alt: "Image not available" },
        ],
    },
    {
        title: "03 HOOPS, PERSONAL WORK",
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

// Flatten all images into a single array for easy access by index
const allImages = rows.flatMap(row => row.images);

const Gallery = ({ setIsHovered }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null); // State to track the current image index in full-screen mode

    // Function to close the full-screen view
    const closeFullScreen = () => {
        setCurrentImageIndex(null); // Set to null to close the overlay
    };

    // Function to open the selected image in full-screen mode
    const openImageInFullScreen = (imgIndex) => {
        setCurrentImageIndex(imgIndex); // Set the current index for navigation
    };

    // Go to the next image in allImages array
    const goToNextImage = () => {
        if (currentImageIndex < allImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    // Go to the previous image in allImages array
    const goToPrevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className={`gallery-container ${hoveredImage ? 'hovered' : ''}`}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`row-container row-${rowIndex}`}>
                    <div className={`title-column ${hoveredRow === rowIndex ? 'hovered' : ''}`}>
                        <p>{row.title}</p>
                    </div>
                    <div className={`images-row images-row-${rowIndex}`}>
                        {row.images.map((image, imgIndex) => {
                            // Calculate the global index of each image in allImages
                            const globalIndex = rows
                                .slice(0, rowIndex)
                                .reduce((sum, row) => sum + row.images.length, 0) + imgIndex;

                            return (
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
                                    onClick={() => openImageInFullScreen(globalIndex)} // Open full screen with global index
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="gallery-image"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className={`title-column-mobile ${hoveredRow === rowIndex ? 'hovered' : ''}`}>
                        <p>{row.title}</p>
                    </div>
                </div>
            ))}

            {/* Fullscreen Pop-up */}
            {currentImageIndex !== null && (
                <div className="fullscreen-overlay">
                    <button className="close-button" onClick={closeFullScreen}>Close</button>
                    <button className="prev-button" onClick={goToPrevImage} disabled={currentImageIndex === 0}>←</button>
                    <img src={allImages[currentImageIndex].src} alt="Full view" className="fullscreen-image" />
                    <button className="next-button" onClick={goToNextImage} disabled={currentImageIndex === allImages.length - 1}>→</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
