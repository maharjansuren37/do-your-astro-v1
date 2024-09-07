import React, { useState } from "react";
import Lightbox from "./lightbox";

export default function ImageGallery() {
    const [openedImage, setOpenedImage] = useState(false);
    const [imageIndex, setImageIndex] = useState(null);

    const images = [
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
    ];

    const openImages = (index) => {
        setImageIndex(index);
        setOpenedImage(true);
    }

    const closeLightbox = () => {
        setOpenedImage(false);
    }

    return (
        <section className="section section__image-gallery wrapper">
            <h2>Image Gallery</h2>
            <div className="image-galleries">
                {images.map((image, index) => (
                    <img 
                        className="gallery-image" 
                        key={index} 
                        src={image.src}
                        onClick={() => openImages(index)} 
                    />
                ))}
            </div>
            {openedImage && (
                <Lightbox 
                    imageIndex={imageIndex} 
                    closeLightbox={closeLightbox} 
                />
            )}
        </section>
    )
}