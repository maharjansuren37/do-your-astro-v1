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
            <header className="header">
                <div className="wrapper flex align-items-center justify-space-between">
                    <div>
                        <NavLink className='brand-name'>DYA</NavLink>
                    </div>
                    <button className="btn btn__nav-toggle">
                        <span>MENU</span>
                    </button>
                    <nav>
                        <ul className="flex">
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