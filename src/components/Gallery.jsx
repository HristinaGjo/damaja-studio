import React, { useState, useEffect } from "react";
import "../styles/gallery.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Original rows data with titles and images
const rows = [
    {
        title: "01 WALL ART, VARIOUS CLIENTS",
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

    // Preload critical images on initial load
    useEffect(() => {
        const preloadImages = [
            "/assets/wa-01.webp", // Image from first row
            "/assets/wa-02.webp", 
            "/assets/wa01-4.webp", 
            "/assets/wa-03.webp", 
            "/assets/wa02-2.webp", 
            "/assets/wa02-3.webp", 
            "/assets/wa02-4.webp", 
            "/assets/adidas03.webp", // Image from second row
            "/assets/hoops01.webp", // Image from third row
            "/assets/flora05.webp", // Image from fourth row
        ];

        preloadImages.forEach((src) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = src;
            document.head.appendChild(link);
        });
    }, []);

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

      // Handle keyboard events for left and right arrows
      useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === "ArrowRight") {
                goToNextImage();
            } else if (event.key === "ArrowLeft") {
                goToPrevImage();
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener("keydown", handleKeydown);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [currentImageIndex]);

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
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.alt}
                                        className="gallery-image"
                                        loading="lazy"
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


/* 
    useEffect(() => {
        const preloadImages = [
            "/assets/wa-01.webp",
            "/assets/adidas03.webp",
            "/assets/wa01-4.webp",
            "/assets/wa-03.webp",
            "/assets/wa02-2.webp",
            "/assets/wa02-3.webp",
            "/assets/wa02-4.webp",

            "/assets/adidas03.webp",
            "/assets/adidas06.webp",
            "/assets/adidas01.webp",
            "/assets/adidas02.webp",
            "/assets/adidas05.webp",
            "/assets/adidas04.webp",

            "/assets/hoops01.webp",
            "/assets/hoops02.webp",
            "/assets/hoops03.webp",
            "/assets/hoops04.webp",
            "/assets/hoops05.webp",
            "/assets/hoops06.webp",
            "/assets/hoops07.webp",

            "/assets/flora01.webp",
            "/assets/flora02.webp",
            "/assets/flora03.webp",
            "/assets/flora04.webp",
            "/assets/flora05.webp",
            "/assets/flora06.webp",

            "../assets/img01.webp",
            "../assets/img02.webp",
            "../assets/img03.webp",
            "../assets/img04.webp",
            "../assets/img05.webp",
            "../assets/img06.webp",
            "../assets/img07.webp",
            "../assets/img08.webp",
            "../assets/img09.webp",

            "../assets/damajaStudio.webp",
        ];
*/