import React, {useState} from "react";
import {useFormContext} from "react-hook-form";

import styles from "./style.module.scss";
import RadioButton from "../../ui-components/RadioButton/RadioButton";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("сash");
  const { register } = useFormContext();

  return (
    <div className={styles.Payment}>
      <h3 className={styles.Payment__title}>Оплата</h3>
      <RadioButton
        {...register("payment", {
          onChange: (e) => setPaymentMethod(e.currentTarget.value),
        })}
        value="cash"
        id="cash"
        checked={paymentMethod === "cash"}
        className={styles.Payment__radio}
      >
        Наличными
      </RadioButton>
      <RadioButton
        {...register("payment", {
          onChange: (e) => setPaymentMethod(e.currentTarget.value),
        })}
        value="card"
        id="card"
        checked={paymentMethod === "card"}
        className={styles.Payment__radio}
      >
        Картой
      </RadioButton>
    </div>
  );
}

export default Payment;
