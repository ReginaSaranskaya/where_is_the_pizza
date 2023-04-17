import React from 'react';

import CartCard from "../../components/CartCard/CartCard";
import styles from "./style.module.scss";
import Price from "../../ui-components/Price/Price";

function Order() {
  return (
    <>
      <CartCard
        className={styles.Order__item}
        onChange={() => console.log(1)}
      />
      <CartCard
        className={styles.Order__item}
        onChange={() => console.log(2)}
      />
      <div className={styles.Order__container}>
        <Price>Итого: 2 379 ₽</Price>
      </div>
    </>
  );
}

export default Order;