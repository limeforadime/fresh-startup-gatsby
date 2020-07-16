import React from 'react';

const Feature1 = () => {
  return (
    <section id="feature1">
      <div className="section__wrapper">
        <img
          className="feature1__background-img"
          src="/assets/feature1__background-img.svg"
          alt="Feature1 Background"
        />
        <h2>A new way to do the thing.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis ut
          ornare neque eget lectus nibh. Consequat, ultrices viverra sit turpis
          pulvinar non. Potenti metus adipiscing diam enim habitasse morbi risus
          rutrum. Orci enim, lectus lacus risus, sociis gravida fermentum, donec
          nunc.
        </p>
        <img
          className="houseplant"
          src="/assets/houseplant.svg"
          alt="Houseplant"
        />
      </div>
    </section>
  );
};

export default Feature1;
