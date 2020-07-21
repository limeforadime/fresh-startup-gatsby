import React from 'react';
import humaaan from '../assets/images/humaaan.svg';
// import grass from '../assets/images/grass.svg';

const humaaanBackgroundStyle = {
  backgroundImage: `url(${humaaan})`,
};

const Hero = () => {
  return (
    // <main id="hero" className="hero__background" style={backgroundStyle}>
    <main id="hero">
      <div className="section__wrapper--hero">
        <h1 className="hero__title">Looking for a Fresh start?</h1>
        <a href="#footer" className="hero__cta-btn">
          FIND OUT MORE
        </a>
      </div>
      <div className="humaaan__wrapper" style={humaaanBackgroundStyle}></div>
      <div className="grass__wrapper"></div>
    </main>
  );
};

export default Hero;
