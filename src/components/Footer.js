import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/images/logo--footer.svg';
import phone from '../assets/images/phone.svg';
import email from '../assets/images/email.svg';
import arrow from '../assets/images/arrow.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper section__wrapper--footer">
        <div className="footer__item footer__sign-up">
          <h2 className="section__title section__title--med-green footer__item--title text-align-left--larger-scrn">
            Stay Connected
          </h2>
          <p className="footer__item--description">
            We'll let you know when the Thing is ready.
          </p>
          <input
            className="footer__email-input"
            type="email"
            placeholder="Email Address"
          />
          <a className="footer__signup-btn" href="#">
            Sign Up{'  '}
            <span className="signup-arrow--span">
              <img className="signup-arrow--img" src={arrow} />
            </span>
          </a>
        </div>

        <div className="footer__item footer__contact">
          <h2 className="section__title section__title--med-green footer__item--title text-align-left--larger-scrn">
            Contact
          </h2>
          <div className="footer__contact--phone-wrapper">
            <img className="footer__phone-icon" src={phone} />
            <p className="footer__phone-number footer__item--description">
              1-(888)-888-8888
            </p>
          </div>
          <div className="footer__contact--email-wrapper">
            <img className="footer__email-icon" src={email} />
            <p className="footer__email-address footer__item--description">
              asdf123@wuddup.com
            </p>
          </div>
        </div>

        <div className="footer__item footer__navigation">
          <h2 className="section__title section__title--med-green footer__item--title text-align-left--larger-scrn">
            Navigation
          </h2>
          <ul className="footer__nav-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#feature3">Our Advantages</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>

        <div className="footer__item footer__about">
          <h2 className="section__title section__title--med-green footer__item--title text-align-left--larger-scrn">
            About Us
          </h2>
          <p className="footer__item--description mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>

        <div className="footer__item footer__logo">
          <img src={logo} className="footer__logo--img" />
          <h1 className="footer__logo--text">Fresh</h1>
        </div>

        <div className="footer__item footer__copyright">
          <p className="footer__copyright--text footer__item--description">
            2020 © DaveDevelops Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
