import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function InputText({
  children,
  type = "text",
  subtext = "",
  value = "",
  name = "",
}) {
  return (
    <label className={styles.InputText}>
      {children}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={subtext}
        className={styles.InputText__input}
      />
    </label>
  );
}

InputText.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  subtext: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default InputText;
