import React, { useState } from "react";

export default function Lightbox({ imageIndex, closeLightbox }) {
    const [count, setCount] = useState(imageIndex);

    const images = [
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
    ];

    const prev = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const next = () => {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    }

    return (
        <>
            <div className="lightbox">
                    <div className="lightbox-img">
                        <button className="btn btn__close" onClick={() => closeLightbox()}>
                            <span className="sr-only">Close</span>
                        </button>
                        <img src={images[count].src} />
                        <div className="lightbox-caption">
                            <span className="lightbox-category">Test</span>
                            <span className="lightbox-counter">{count + 1}</span>
                        </div>
                        <div className="lightbox-controls">
                            <button className="prev" onClick={prev}>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="next" onClick={next}>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}