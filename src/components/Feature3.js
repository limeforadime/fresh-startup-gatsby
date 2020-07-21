import React from 'react';
import thumbsUp from '../assets/images/thumbs-up.svg';
import cloud from '../assets/images/cloud.svg';
import gear from '../assets/images/gear.svg';
import creditCard from '../assets/images/credit-card.svg';
import background from '../assets/images/feature3__background.svg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
};

const Feature3 = () => {
  return (
    <section id="feature3" style={backgroundStyle}>
      <div className="section__wrapper section__wrapper--feature3">
        <h2 className="grid__feature3__title section__title section__title--light">
          What sets us apart?
        </h2>

        <div className="bullet-point__item">
          <img src={thumbsUp} className="bullet-point__icon"></img>
          <div className="bullet-point__title">
            <h3>Trusted</h3>
          </div>
          <div className="bullet-point__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis ut
              ornare neque eget lectus unprecedented.
            </p>
          </div>
        </div>

        <div className="bullet-point__item">
          <img src={cloud} className="bullet-point__icon"></img>
          <div className="bullet-point__title">
            <h3>On the Cloud</h3>
          </div>
          <div className="bullet-point__description">
            <p>Aende hoke noemla de on. Over one way veer under limitless.</p>
          </div>
        </div>

        <div className="bullet-point__item">
          <img src={gear} className="bullet-point__icon"></img>
          <div className="bullet-point__title">
            <h3>Configurable</h3>
          </div>
          <div className="bullet-point__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. So much
              potential.
            </p>
          </div>
        </div>

        <div className="bullet-point__item">
          <img src={creditCard} className="bullet-point__icon"></img>
          <div className="bullet-point__title">
            <h3>Secure</h3>
          </div>
          <div className="bullet-point__description">
            <p>Aende hoke noemla de on. Over one way veer under limitless.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
