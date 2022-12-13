import React from 'react';
import './Feature3.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import headphoneFeature3 from '../../../assets/headphoneFeature3.png';

const Feature3 = () => {
  return (
    <section id="feature-3" className='feature-3'>
        <div className='feature-3__text'>
            <span>03</span>
            <h3>More than 20 hours battery life</h3>
            <p>
                The music never stops. The Y50BT works with a by-pass cable that allows you to enjoy your favorite jams even if you run out of battery.
            </p>
            <a href="https://www.akg.com/Headphones/Over-ear%20%26%20On-ear/AKG+Y500+Wireless.html">Explore More
                <FontAwesomeIcon style={{marginLeft: '.5rem'}} icon={faArrowRight}/>
            </a>
        </div>
        <figure className='feature-3__image'>
            <img src={headphoneFeature3} alt="headphone feature 3" />
        </figure>
    </section>
  )
}

export default Feature3;