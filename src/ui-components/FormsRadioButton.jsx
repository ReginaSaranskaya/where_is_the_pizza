import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function FormsRadioButton({ children, name = "", id = "" }) {
  return (
    <>
      <input
        className={styles.FormsRadioButton__input}
        type="radio"
        name={name}
        id={id}
      />
      <label htmlFor={id} className={styles.FormsRadioButton}>
        {children}
      </label>
    </>
  );
}

FormsRadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default FormsRadioButton;
