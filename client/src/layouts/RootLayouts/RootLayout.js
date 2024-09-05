import React from "react";
import {NavLink, Outlet } from "react-router-dom";



export default function RootLayout() {
    const links = [
        {url: '/', title: 'Home'},
        {url:'/astrophotography', title: 'Astrophotography'},
        {url: '/bookbindery', title: 'Bookbindery'},
        {url: '/contact', title: 'Contact'}
    ];

    return (
        <>
            <header>
                <div>
                    <NavLink>Do Your Astro</NavLink>
                </div>
                <nav>
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/astrophotography'>Astrophotography</NavLink>
                        <NavLink to='/bookbindery'>Bookbindery</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}