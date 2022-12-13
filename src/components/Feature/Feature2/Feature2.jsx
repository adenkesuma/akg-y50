import React from 'react';
import './Feature2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Poster from '../../../assets/poster.jpg';

const Feature2 = () => {
    return (
        <section id="feature-2" className='feature-2'>
            <figure className='feature-2__image'>
                <img src={Poster} alt="feature 2" />
                <figcaption>HEA<br />DPH<br />ONE</figcaption>
            </figure>
            <div className='feature-2__text'>
                <span>02</span>
                <h3>Legendary AKG Sound</h3>
                <p>
                    A clear, word-class and award winning acoustic signature that will take your musical enjoyment and appreciation to new levels.
                </p>
                <a href="https://www.akg.com/Headphones/Over-ear%20%26%20On-ear/AKG+Y500+Wireless.html">Explore More
                    <FontAwesomeIcon style={{marginLeft: '.5rem'}} icon={faArrowRight}/>
                </a>
            </div>
        </section>
    )
}

export default Feature2;
