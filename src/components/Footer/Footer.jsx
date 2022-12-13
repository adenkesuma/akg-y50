import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__info'>
            <div className='footer__info--text'>
                <h3>
                    AKG Y50
                </h3>
                <p>
                    it is a long established fact that a reader will be disctracted by the readable content of a page when looking at it's layout
                </p>
            </div>
            <ul className='footer__info--media'>
                <li>
                    <a href="https://www.instagram.com/aden_kesuma/">
                        <FontAwesomeIcon className='instagram' icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aden-kesuma-51549724b/">
                        <FontAwesomeIcon className='linkedIn' icon={faLinkedin}/> 
                    </a>                   
                </li>
                <li>
                    <a href="https://github.com/adenkesuma">
                        <FontAwesomeIcon className='github' icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href="https://youtu.be/tkbqnsiwrkk">
                        <FontAwesomeIcon className='youtube' icon={faYoutube}/>
                    </a>
                </li>
            </ul>
        </div>
        <p className='footer__copyright'>&copy; Copyright 11 - 12 - 2022 by Aden kesuma, All rights reserved</p>
    </footer>
  )
}

export default Footer;