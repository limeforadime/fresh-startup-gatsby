import React from 'react';
import quote from '../assets/images/quote.svg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="section__wrapper section__wrapper--testimonials">
        <h2 className="grid__testimonial__title section__title section__title--dark">
          What others are saying about us
        </h2>

        <div className="testimonials__item">
          <img
            className="testimonials__img"
            src="https://source.unsplash.com/kMJp7620W6U/500x500"
            alt=""
          />
          <div className="testimonials__quote__wrapper">
            <div className="icon-wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--icon"
              />
            </div>
            <p className="testimonials__description">
              "Wonderful. Life-changing. I don't think I could ever go back."
            </p>
          </div>
        </div>
        <div className="item__divider"></div>
        <div className="testimonials__item">
          <img
            className="testimonials__img"
            src="https://source.unsplash.com/6W4F62sN_yI/500x500"
            alt=""
          />
          <div className="testimonials__quote__wrapper">
            <div className="icon-wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--icon"
              />
            </div>
            <p className="testimonials__description">
              “Terrific. It got the job done.”
            </p>
          </div>
        </div>
        <div className="item__divider"></div>
        <div className="testimonials__item">
          <img
            className="testimonials__img"
            src="https://source.unsplash.com/ySTdW42Y7og/500x500"
            alt=""
          />
          <div className="testimonials__quote__wrapper">
            <div className="icon-wrapper">
              <img
                src={quote}
                alt="Quote"
                className="testimonials__quote--icon"
              />
            </div>
            <p className="testimonials__description">
              “Aende hoke noemla de on. Over one way veer under limitless.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
