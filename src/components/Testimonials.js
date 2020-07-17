import React from 'react';
import quote from '../assets/images/quote.svg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="section__wrapper">
        <h2 className="section__title">What others are saying about us</h2>

        <div className="testimonials__wrapper">
          <div className="testimonials__item">
            <img
              className="testimonials__img"
              src="https://source.unsplash.com/kMJp7620W6U"
              alt=""
            />
            <div className="testimonials__quote__wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--img"
              />
              <p className="testimonials__description">
                "Wonderful. Life-changing. I don't think I could ever go back."
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="testimonials__item">
            <img
              className="testimonials__img"
              src="https://source.unsplash.com/Vaznn9k5GqQ/800x600"
              alt=""
            />
            <div className="testimonials__quote__wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--img"
              />
              <p className="testimonials__description">
                “Terrific. It got the job done.”
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="testimonials__item">
            <img
              className="testimonials__img"
              src="https://source.unsplash.com/ySTdW42Y7og/800x600"
              alt=""
            />
            <div className="testimonials__quote__wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--img"
              />
              <p className="testimonials__description">
                “Aende hoke noemla de on. Over one way veer under limitless.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
