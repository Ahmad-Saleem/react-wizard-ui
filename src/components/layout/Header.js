import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

const Header = ({children}) => <header>
    <div className='logo'>
        <img src={logo} className='logo' alt='Logo' />
    </div>
    <nav>
        <div className='organiser-name'>
        Mr Boing’s Trampoline Club
        </div>
        <div className='link'>
        <Link to='/activity/id'>back to activity</Link>
        </div>
    </nav>
</header>

export default Header;