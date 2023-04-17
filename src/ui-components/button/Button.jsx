import React, { forwardRef } from "react";
import cnBind from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

const Button = forwardRef((props, ref) => {
  const {
    children,
    size = "middle",
    variant = "primary",
    handleClick
  } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={cn(["Button", `Button_${variant}`, `Button_${size}`])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});


Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "middle", "big"]),
  variant: PropTypes.oneOf(["primary", "outline", "text"]),
  handleClick: PropTypes.func.isRequired,
};

export default Button;
