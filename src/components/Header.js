import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = (props) => {
  return (
    <header id="header">
      <nav>
        <div className="nav__logo">
          <img className="nav__logo--img" src={logo} alt="Fresh Image" />
          <h1 className="nav__logo--text">Fresh</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Advantages</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
