import React from 'react';
import './Feature.scss';
import Feature1 from './Feature1/Feature1';
import Feature2 from './Feature2/Feature2';
import Feature3 from './Feature3/Feature3';

const Feature = () => {
  return (
    <main id="feature-1" className='feature'>
        <h2>Why Choose AKG Y50</h2>
        <Feature1 />
        <Feature2 />
        <Feature3 />
    </main>
  )
}

export default Feature