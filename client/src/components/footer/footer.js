import React from "react";
import { NavLink } from "react-router-dom";

import facebook from "../../../public/assets/icons/social/facebook.svg";
import instagram from "../../../public/assets/icons/social/instagram.svg"
import twitter from "../../../public/assets/icons/social/twitter.svg"
import linkedin from "../../../public/assets/icons/social/linkedin.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <ul role="list" className="social__list">
                <li><NavLink><img className="social__icon" src={facebook} /></NavLink></li>
                <li><NavLink><img className="social__icon" src={instagram} /></NavLink></li>
                <li><NavLink><img className="social__icon" src={twitter} /></NavLink></li>
                <li><NavLink><img className="social__icon" src={linkedin} /></NavLink></li>
            </ul>
            <p className="copy text-center">
                &copy; 2023 Do Your Astro <br /> Made with 💖 by Suren Maharjan
            </p>
        </footer>
    )
}