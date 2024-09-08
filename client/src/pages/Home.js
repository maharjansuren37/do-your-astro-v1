import React from "react";

import SingleBanner from '../components/singleBanner/singleBanner';
import PageTile from "../components/pageTile/pageTile";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/footer/footer";

import img1 from "../../public/assets/bg-hero.webp";
import img2 from "../../public/assets/bindery.webp";

export default function Home() {
    const pageTileData = [
        {title: "Astrophotography", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id ipsum eleifend, laoreet mauris at, tempor diam. Ut dapibus, elit at accumsan malesuada, lorem orci mattis ex, finibus placerat elit ligula in felis. Sed quis orci eleifend, tincidunt nisl sed, gravida odio. Proin pretium mi", img: img1},
        {title: "Bookbinder", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id ipsum eleifend, laoreet mauris at, tempor diam. Ut dapibus, elit at accumsan malesuada, lorem orci mattis ex, finibus placerat elit ligula in felis. Sed quis orci eleifend, tincidunt nisl sed, gravida odio. Proin pretium mi", img: img2}
    ];

    return (
        <>
            <SingleBanner />
            <PageTile pageTileData={pageTileData} />
            <ContactForm />
            <Footer />
        </>
    )
}