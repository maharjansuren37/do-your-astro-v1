import React, { useState } from "react";

export default function Lightbox({ imageIndex, closeLightbox }) {
    const [count, setCount] = useState(imageIndex);

    const images = [
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
        {src: './bg-hero.webp'},
        {src: './bindery.webp'},
    ];

    const prev = () => {
        if (images.length )
        setCount(count - 1);
    }

    const next = () => {
        setCount(count + 1);
    }

    console.log(count);

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
                            <span className="lightbox-counter">{count}</span>
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