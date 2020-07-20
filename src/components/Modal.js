import React from 'react';

const Modal = ({ click, isModalOpen }) => {
  const modalClass = isModalOpen
    ? 'modal__background modal__background--active'
    : 'modal__background';
  return <div onClick={click} className={modalClass}></div>;
};

export default Modal;
