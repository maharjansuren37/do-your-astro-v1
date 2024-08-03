// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';

export default function AdminHeader() {
    const auth = useAuth();

    return (
        <header className='admin-header'>
            <div className='container flex-d align-center justify-space-between'>
                <span className='logo'>Do Your Astro</span>
                {auth.token && <>
                    <div>
                        <div className='flex-d align-center g-1'>
                            <NavLink to="/admin">Home</NavLink>
                            <NavLink to="/admin/astrophotography">Astrophotography</NavLink>
                            <NavLink to="/admin/bookbindery">Bookbindery</NavLink>
                            <button className='btn' onClick={() => auth.logOut()}>Logout</button>
                        </div>  
                    </div>
                    
                </>}
            </div>
        </header>
    )
}