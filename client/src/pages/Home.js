import React from "react";

import SingleBanner from '../components/singleBanner/singleBanner';
import PageTile from "../components/PageTile/pageTile";
import ContactForm from "../components/contactForm/ContactForm";

export default function Home() {
    return (
        <>
            <SingleBanner />
            <PageTile />
            <ContactForm />
        </>
    )
}