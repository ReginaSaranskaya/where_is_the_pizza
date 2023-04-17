import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./style.module.scss";
import InputText from "../../ui-components/InputText/InputText";

function Delivery() {
  const { register } = useFormContext();

  return (
    <div className={styles.Delivery}>
      <InputText
        {...register("street")}
        type="text"
        placeholder="Пушкина"
        className={styles.Delivery__input}
        size="big"
      >
        Улица*
      </InputText>
      <InputText
        type="text"
        placeholder="1а"
        className={styles.Delivery__input}
        size="small"
      >
        Дом
      </InputText>
      <InputText
        type="text"
        placeholder="1"
        className={styles.Delivery__input}
        size="small"
      >
        Подъезд
      </InputText>
      <InputText
        type="text"
        placeholder="2"
        className={styles.Delivery__input}
        size="small"
      >
        Этаж
      </InputText>
      <InputText
        type="text"
        placeholder="3"
        className={styles.Delivery__input}
        size="small"
      >
        Квартира
      </InputText>
      <InputText
        type="text"
        placeholder="0000"
        className={styles.Delivery__input}
        size="small"
      >
        Домофон
      </InputText>
    </div>
  );
}

export default Delivery;
