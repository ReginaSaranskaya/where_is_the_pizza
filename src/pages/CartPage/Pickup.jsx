import React from 'react';

import styles from "./style.module.scss";

function Pickup() {
  return (
    <div className={styles.Pickup}>
      <label className={styles.Pickup__text}>
        Ресторан*
        <select className={styles.Pickup__select}>
          <option className={styles.Pickup__option} hidden disabled selected>Выберите ресторан</option>
          <option>ул. Юных Ленинцев, д. 99</option>
          <option>Ул. Тверская, 12/2</option>
        </select>
      </label>
    </div>
  );
}

export default Pickup;