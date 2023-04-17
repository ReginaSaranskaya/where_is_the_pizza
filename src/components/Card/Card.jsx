import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";
import CardTitle from "./CardTitle";
import Button from "../../ui-components/Button/Button";
import Price from "../../ui-components/Price/Price";
import Text from "../../ui-components/Text";


function Card({ src, name, ingredients, price, setModal, title }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.Card} onClick={(e) => {
      e.preventDefault();
      setModal(true)
    }} onKeyUp={() => console.log(1)}>
      <img className={styles.Card__img} src={src} alt={name} />
      <div className={styles.Card__textContainer}>
        <CardTitle>{name}</CardTitle>
        <Text>{ingredients.join(", ")}</Text>
      </div>
      <div className={styles.Card__container}>
        <Button handleClick={setModal}>Выбрать</Button>
        <Price>{title === "Пицца" ? `от ${price} ₽` : `${price} ₽` }</Price>
      </div>
    </div>
  );
}

// от {price} ₽


Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  setModal: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Card;
