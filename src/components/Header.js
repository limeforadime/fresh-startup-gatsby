import React from 'react';
import { Link } from 'gatsby';
// import ReactCSSTransitionGroup from 'react-transition-group';
import Modal from './Modal';
import logo from '../assets/images/logo.svg';

const Header = ({
  isSidebarOpen,
  isModalOpen,
  toggleSidebar,
  closeSidebar,
}) => {
  const navLinksStyle = `nav-links${isSidebarOpen ? ' nav-links--active' : ''}`;
  return (
    <header id="header">
      <Modal click={closeSidebar} isModalOpen={isModalOpen} />
      <nav>
        <div className="nav__logo">
          <img className="nav__logo--img" src={logo} alt="Fresh Image" />
          <h1 className="nav__logo--text">Fresh</h1>
        </div>
        <ul className={navLinksStyle}>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#feature3">Our Advantages</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#footer">Sign Up</a>
          </li>
        </ul>
        <div className="burger" onClick={toggleSidebar}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
