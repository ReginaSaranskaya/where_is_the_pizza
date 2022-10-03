import React from "react";
import PropTypes from "prop-types";
import styles from "../style.module.scss";

import Cheese from "./img/cheese.svg";
import Onion from "./img/onion.svg";
import Champignons from "./img/champignons.svg";
import Pepper from "./img/pepper.svg";
import Checked from "./img/checked.svg";

const icons = {
  cheese: Cheese,
  onion: Onion,
  champignons: Champignons,
  pepper: Pepper,
};

function AdditionalIngredient({ name, text, price }) {
  return (
    <label className={styles.AdditionalIngredient} htmlFor={name}>
      <input
        className={styles.AdditionalIngredient__checkbox}
        onChange={() => {
          console.log("check");
        }}
        type="checkbox"
        name={name}
        id={name}
      />
      <div className={styles.AdditionalIngredient__container}>
        <img className={styles.AdditionalIngredient__img} src={icons[name]} alt={text} />
        <img className={styles.AdditionalIngredient__iconChecked} src={Checked} alt="Добавлено" />
      </div>
      <h4 className={styles.AdditionalIngredient__title}>{text}</h4>
      <div className={styles.AdditionalIngredient__price}>{price}</div>
    </label>
  );
}

AdditionalIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default AdditionalIngredient;
