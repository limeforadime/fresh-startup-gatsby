import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <div className="footer__grid-wrapper">
          <div className="footer__item footer__sign-up">
            <h2 className="footer__item--title">Stay Connected</h2>
            <p>We'll let you know when the Thing is ready.</p>
            <input
              className="footer__email-input"
              type="email"
              placeholder="Email Address"
            />
            <button className="footer__signup-btn">
              Sign Up <i className="fa fa-arrowwwww" />
            </button>
          </div>

          <div className="footer__item footer__contact">
            <h2 className="footer__item--title">Contact</h2>
            <div className="footer__contact--phone-wrapper">
              <img className="footer__phone-img" src="/assets/phone.svg" />
              <div className="footer__phone-number">1-(888)-888-8888</div>
            </div>
            <div className="footer__contact--email-wrapper">
              <img className="footer__email-img" />
              <div className="footer__email-address">asdf123@wuddup.com</div>
            </div>
          </div>

          <div className="footer__item footer__navigation">
            <h2 className="footer__item--title">Navigation</h2>
            <ul className="footer__nav-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#feature3">Our Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="footer__item footer__about">
            <h2 className="footer__item--title">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <div className="footer__item footer__logo">
            <img src="/assets/logo.svg" className="footer__logo--img" />
            <h1 className="footer__logo--text">Fresh</h1>
          </div>

          <div className="footer__item footer__copyright">
            <p className="footer__copyright--text">
              2020 © DaveDevelops Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
