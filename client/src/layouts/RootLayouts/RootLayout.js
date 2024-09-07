import React, { useEffect, useState } from "react";
import {NavLink, Outlet } from "react-router-dom";



export default function RootLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    // const links = [
    //     {url: '/', title: 'Home'},
    //     {url:'/astrophotography', title: 'Astrophotography'},
    //     {url: '/bookbindery', title: 'Bookbindery'},
    //     {url: '/contact', title: 'Contact'}
    // ];

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header className={`header ${scrollPosition > 0 ? 'scrolled' : ''}`}>
                <div className="wrapper flex align-items-center justify-space-between">
                    <div>
                        <NavLink className='brand-name'>DYA</NavLink>
                    </div>
                    <button 
                        className={`btn btn__nav-toggle ${menuOpen && `active`}`}
                        onClick={toggleMenu}    
                    >
                        <span className="sr-only">MENU</span>
                    </button>
                    <nav className="nav">
                        <ul className={`nav__list flex ${menuOpen && 'active'}`}>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to='/astrophotography' className='nav-link'>Astrophotography</NavLink>
                            <NavLink to='/bookbindery' className='nav-link'>Bookbindery</NavLink>
                            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}