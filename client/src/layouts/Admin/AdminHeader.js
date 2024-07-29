// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                    <Link to='/register'>
                        Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}