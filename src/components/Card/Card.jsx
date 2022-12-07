import React from "react";
// import PropTypes from "prop-types";

import styles from "./style.module.scss";
import CardTitle from "./CardTitle";
import Button from "../../ui-components/button/Button";
import Price from "../../ui-components/price/Price";
import PizzaImage from "./img/pizza.jpg";

function Card() {
  return (
    <div className={styles.Card}>
      <img
        className={styles.Card__img}
        src={PizzaImage}
        alt="Чикен Сладкий Чили"
      />
      <div className={styles.Card__textContainer}>
        <CardTitle>Чикен Сладкий Чили</CardTitle>
        <p className={styles.Card__text}>
          Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус
        </p>
      </div>

      <div className={styles.Card__container}>
        <Button>Выбрать</Button>
        <Price>от 399 ₽</Price>
      </div>
    </div>
  );
}

export default Card;
