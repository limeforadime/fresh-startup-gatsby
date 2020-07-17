import React from 'react';
import humaaan from '../assets/images/humaaan.svg';
import grass from '../assets/images/grass.svg';

const backgroundStyle = {
  backgroundImage: `url(${humaaan}), url(${grass})`,
  backgroundPosition: '10% 90%, bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '30%, auto',
};

const Hero = () => {
  return (
    <main id="hero" style={backgroundStyle}>
      <div className="section__wrapper--hero">
        <h1 className="hero__title">Looking for a Fresh start?</h1>
        <a href="#footer" className="hero__cta-btn">
          FIND OUT MORE
        </a>
      </div>
    </main>
  );
};

export default Hero;
