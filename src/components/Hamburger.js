import React from 'react';

const Hamburger = (props) => {
  const { isSidebarOpen, toggleSidebar } = props;
  const burgerClassName = isSidebarOpen ? 'burger toggle-hamburger' : 'burger';
  return (
    <div
      className={burgerClassName}
      onClick={(e) => {
        // e.target.classList.toggle('toggle-hamburger');
        e.stopPropagation();
        toggleSidebar();
      }}
    >
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
};

export default Hamburger;
