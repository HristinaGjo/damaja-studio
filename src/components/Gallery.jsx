import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/gallery.css";

const rows = [
    // Your rows data (unchanged)
];

// Flatten all images into a single array for easy access by index
const allImages = rows.flatMap(row => row.images);

const Gallery = ({ setIsHovered }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    // Function to close the full-screen view
    const closeFullScreen = () => setCurrentImageIndex(null);

    // Function to open the selected image in full-screen mode
    const openImageInFullScreen = (imgIndex) => setCurrentImageIndex(imgIndex);

    const goToNextImage = () => {
        if (currentImageIndex < allImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

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
                                    onClick={() => openImageInFullScreen(globalIndex)}
                                >
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.alt}
                                        className="gallery-image"
                                        effect="blur" // Adds a blur effect while loading
                                        placeholderSrc="/assets/placeholder.webp" // Placeholder image
                                    />
                                </div>
                            );
                        })}
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
