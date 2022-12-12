import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/Logo.png';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <img className='navbar__logo' src={Logo} alt="Logo"/>
            <ul className='navbar__box'>
                <li className='navbar__list'>
                    <a href="#header">Home</a>
                </li>
                <li className='navbar__list'>
                    <a href="#about">About</a>
                </li>
                <li className='navbar__list'>
                    <a href="#feature-1">Feature 1</a>
                </li>
                <li className='navbar__list'>
                    <a href="#feature-2">Feature 2</a>
                </li>
                <li className='navbar__list'>
                    <a href="#feature-3">Feature 2</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;