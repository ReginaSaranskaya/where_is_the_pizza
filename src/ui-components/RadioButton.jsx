import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function RadioButton({ children, name = "", id="" }) {
  return (
    <span className={styles.RadioButton}>
      <input
        className={styles.RadioButton__input}
        type="radio"
        name={name}
        id={id}
      />
      <label htmlFor={id} className={styles.RadioButton__label}>{children}</label>
    </span>
  );
}

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default RadioButton;
