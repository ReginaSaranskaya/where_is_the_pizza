import React from "react";
import PropTypes from "prop-types";
import cnBind from 'classnames/bind';

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

function RadioButton({ children, name = "", id = "", volume = false }) {
  return (
    <span className={cn(volume ? 'VolumeRadioButton' : 'RadioButton')}>
      <input
        className={cn(volume ? 'VolumeRadioButton__input' : 'RadioButton__input')}
        type="radio"
        name={name}
        id={id}
      />
      <label htmlFor={id} className={cn(volume ? 'VolumeRadioButton__label' : 'RadioButton__label')}>
        {children}
      </label>
    </span>
  );
}

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  volume: PropTypes.bool,
};

export default RadioButton;
