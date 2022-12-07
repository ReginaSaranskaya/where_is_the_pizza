import React from "react";
import cnBind from 'classnames/bind';
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

function Button({ children, size = 'middle', variant = 'primary', handleClick }) {
  return (
    <button
      type = "button"
      className={cn(['Button', `Button_${variant}`, `Button_${size}`])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'middle']),
  variant: PropTypes.oneOf(['primary', 'outline', 'text']),
  handleClick: PropTypes.func.isRequired,
};

export default Button;
