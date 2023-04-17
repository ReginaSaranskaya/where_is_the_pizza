import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import cnBind from "classnames/bind";
import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

const InputText = forwardRef(
  (
    { children, type = "text", placeholder = "", size, className, ...props },
    ref
  ) => (
      <label className={styles.InputText}>
        {children}
        <input
          {...props}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={cn([
            "InputText__input",
            `InputText__input-${size}`,
            className,
          ])}
        />
      </label>
    )
);

InputText.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default InputText;
