import React, {useState} from "react";
import {useFormContext} from "react-hook-form";

import styles from "./style.module.scss";
import RadioButton from "../../ui-components/RadioButton/RadioButton";
import InTime from "./InTime";

function Time() {
  const [inTimeMethod, setInTimeMethod] = useState("now");
  const { register } = useFormContext();

  return (
    <div className={styles.Time}>
      <div className={styles.Time__text}>Когда выполнить заказ?</div>
      <RadioButton
        {...register("time", {
          onChange: (e) => setInTimeMethod(e.currentTarget.value),
        })}
        className={styles.Time__radio}
        value="now"
        checked={inTimeMethod === "now"}
        id="now"
      >
        Как можно скорее
      </RadioButton>
      <RadioButton
        {...register("time", {
          onChange: (e) => setInTimeMethod(e.currentTarget.value),
        })}
        className={styles.Time__radio}
        value="inTime"
        id="inTime"
        checked={inTimeMethod === "inTime"}
      >
        По времени
      </RadioButton>
      {inTimeMethod === "inTime" && <InTime />}
    </div>
  );
}

export default Time;
