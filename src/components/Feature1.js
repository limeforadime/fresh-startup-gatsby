import React from 'react';
import houseplant from '../assets/images/house-plant.svg';
import background from '../assets/images/feature1__background.svg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
};

const Feature1 = () => {
  return (
    <section id="feature1" style={backgroundStyle}>
      <div className="section__wrapper section__wrapper--feature1 mt-responsive">
        <h2 className="grid__feature1__title section__title section__title--light">
          A new way to do the thing.
        </h2>
        <p className="grid__feature1__description feature__description feature__description--light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis ut
          ornare neque eget lectus nibh. Consequat, ultrices viverra sit turpis
          pulvinar non. Potenti metus adipiscing diam enim habitasse morbi risus
          rutrum. Orci enim, lectus lacus risus, sociis gravida fermentum, donec
          nunc.
        </p>
        <img
          className="grid__feature1__img feature__img houseplant"
          src={houseplant}
          alt="Houseplant"
        />
      </div>
    </section>
  );
};

export default Feature1;
