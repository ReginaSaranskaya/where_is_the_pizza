import React, {useState} from 'react';
import {useFormContext} from "react-hook-form";

import styles from "./style.module.scss";
import RadioButton from "../../ui-components/RadioButton/RadioButton";
import InputText from "../../ui-components/InputText/InputText";

function Change() {
  const [changeMethod, setChangeMethod] = useState("noChange");
  const { register } = useFormContext();

  return (
    <div className={styles.Change}>
      <h3 className={styles.Change__title}>Сдача</h3>
      <RadioButton
        {...register("change", {
          onChange: (e) => setChangeMethod(e.currentTarget.value),
        })}
        value="noChange"
        id="noChange"
        checked={changeMethod === "noChange"}
        className={styles.Change__radio}
      >
        Без сдачи
      </RadioButton>
      <RadioButton
        {...register("change", {
          onChange: (e) => setChangeMethod(e.currentTarget.value),
        })}
        value="change"
        id="change"
        checked={changeMethod === "change"}
        className={styles.Change__radio}
      >
        Сдача с
      </RadioButton>
      {changeMethod === "change" && (
        <InputText
          className={styles.Change__number}
          placeholder="0"
          size="small"
          type="number"
          {...register("changeNumber", { maxLength: 4 })}
        />
      )}
    </div>
  );
}

export default Change;