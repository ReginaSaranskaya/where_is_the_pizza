import React from 'react';
import PropTypes from "prop-types";
import cnBind from 'classnames/bind';


import styles from "./style.module.scss"

const cn = cnBind.bind(styles);

function Modal({onClose, location = "center", children}) {
  return (
    <div className={cn(["Modal", "Modal__active", `Modal__${location}`, `Modal__${location}`])}>
      <div className={cn(["Modal__content", `Modal__content--${location}`])}>
        <button className={cn([`Modal__button`, `Modal__button--${location}`])} type="button" onClick={() => onClose(false)} aria-label="Close"> </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  location: PropTypes.string
};

export default Modal;