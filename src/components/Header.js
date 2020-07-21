import React from 'react';
import { Link } from 'gatsby';
// import ReactCSSTransitionGroup from 'react-transition-group';
import Modal from './Modal';
import logo from '../assets/images/logo.svg';
import Hamburger from './Hamburger';

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
            <Link to="/about" onClick={closeSidebar}>
              About Us
            </Link>
          </li>
          <li>
            <a href="#feature3" onClick={closeSidebar}>
              Our Advantages
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeSidebar}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#footer" onClick={closeSidebar}>
              Sign Up
            </a>
          </li>
        </ul>
        <Hamburger
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </nav>
    </header>
  );
};

export default Header;
