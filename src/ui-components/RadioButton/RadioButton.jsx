import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

const RadioButton = forwardRef((props, ref) => {
  const {
    children,
    name = "",
    id = "",
    volume = false,
    value = "",
    onChange,
    checked = false,
    className,
  } = props;

  const classNameBlock = volume ? "VolumeRadioButton" : "RadioButton";

  return (
    <div
      className={cn([classNameBlock, className])}
    >
      <input
        ref={ref}
        className={cn(`${classNameBlock}__input`)}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={cn(`${classNameBlock}__label`)}
      >
        {children}
      </label>
    </div>
  );
});


RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  volume: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RadioButton;
