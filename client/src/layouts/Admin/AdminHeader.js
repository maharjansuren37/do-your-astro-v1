// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons';
import { useAuth } from '../../hooks/AuthProvider';

export default function AdminHeader() {
    const auth = useAuth();

    return (
        <header className='admin-header'>
            <div className='container flex-d align-center justify-space-between'>
                <span className='logo'>Do Your Astro</span>
                {auth.token && <button className='btn' onClick={() => auth.logOut()}>Logout</button>}
            </div>
        </header>
    )
}