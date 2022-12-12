import React from 'react';
import './About.scss';
import HeadphoneAbout from '../../assets/headphoneAbout.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faSignal5, faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <main id="about" className='main'>
        <div className='main__top'>
            <h2>Sound around the world</h2>
            <figure>
                <img src={HeadphoneAbout} alt="headphone about" />
            </figure>
        </div>
        <div className='main__grid'>
            <div className='main__grid--1'>
                <FontAwesomeIcon className='icon' icon={faHeadphones}/>
                <h3>Classic Design</h3>
                <p>
                    AKG sound originates from powerful, 40mm drivers delivering an enhanced, punched-up bass response with minimal disturbance from the outside world thanks to their bleed-resistant design.
                </p>
            </div>
            <div className='main__grid--2'>
                <FontAwesomeIcon className='icon' icon={faSignal5}/>
                <h3>Wireless Headphone</h3>
                <p>
                    Wireless earphones are a type of cellphone complement that you can use easily because they are connected to Bluetooth. This product itself is the same as hands-free, namely there is no cable on the product
                </p>
            </div>
            <div className='main__grid--3'>
                <FontAwesomeIcon className='icon' icon={faBatteryQuarter}/>
                <h3>Battery Backup</h3>
                <p>
                    More than 20 hours battery life The music never stops. The Y50BT works with a by-pass cable that allows you to enjoy your favorite jams even if you run out of battery.
                </p>
            </div>
        </div>
    </main>
  )
}

export default About;