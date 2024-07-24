import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <header>
                <div>
                    <NavLink>DYA</NavLink>
                </div>
                <div className="nav-toggle">
                    <span></span>
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
        </div>
    )
}