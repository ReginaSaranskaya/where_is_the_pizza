import React from 'react';
import PropTypes from "prop-types";
import cnBind from 'classnames/bind';

import CartCardTitle from "./CartCardTitle";
import Price from "../../ui-components/price/Price";
import styles from "./style.module.scss";
import PizzaImage from "../card/img/pizza.jpg";
import Counter from "../../ui-components/counter/Counter";

const cn = cnBind.bind(styles);


function CartCard({onChange, size = "big"}) {
  return (
    <div className={cn(["CartCard", `CartCard_${size}`])}>
      <img
        className={cn(["CartCard__img", `CartCard_${size}__img`])}
        src={PizzaImage}
        alt="Пепперони по-деревенски"
      />
      <div className={cn(`CartCard_${size}__wrapper`)}>
        <CartCardTitle className={cn(`CartCard_${size}__title`)}>
          Пепперони по-деревенски
        </CartCardTitle>
        <p className={cn(`CartCard_${size}__text`)}>
          Традиционное тесто, 33 см
        </p>
      </div>
      <div className={cn(`CartCard_${size}__container`)}>
        <Counter className={cn(`CartCard_${size}__counter`)} onChange={onChange}/>
        <Price>399 ₽</Price>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'big']),
};

export default CartCard;