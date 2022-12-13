import React from 'react';
import './Feature1.scss';
import headphoneFeature from '../../../assets/headphoneFeature.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Feature1 = () => {
    return (
        <section id="feature-1" className='feature-1'>
            <div className='feature-1__text'>
                <span>01</span>
                <h3>
                    Bluetooth enabled for music and calls
                </h3>
                <p>
                    Pursue your passions wirelessly and easily, with ear-cup mounted controls.
                </p>
                <a href="https://www.akg.com/Headphones/Over-ear%20%26%20On-ear/AKG+Y500+Wireless.html">Explore More
                    <FontAwesomeIcon style={{marginLeft: '.5rem'}} icon={faArrowRight}/>
                </a>
            </div>
            <figure className='feature-1__image'>
                <img src={headphoneFeature} alt="headphone features" />
            </figure>
        </section>
    )
}

export default Feature1;
