import React from 'react';
import './Header.scss';
import HeadphoneHeader from '../../assets/headphoneHeader.png';

const Header = () => {
  return (
    <header id="header" className='header'>
        <figure className='header__image'>
            <img src={HeadphoneHeader} alt="headphone header" />
            <figcaption>AKG Y50</figcaption>
        </figure>
        <span>
          <h1 className="title-1">AKG</h1>
          <h1 className="title-2">Y50</h1>
        </span>
    </header>
  )
}

export default Header