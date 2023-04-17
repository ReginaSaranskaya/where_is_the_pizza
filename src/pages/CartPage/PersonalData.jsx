import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./style.module.scss";
import InputText from "../../ui-components/InputText/InputText";

function PersonalData() {
  const { register } = useFormContext();
  return (
    <div className={styles.PersonalData}>
      <h3 className={styles.PersonalData__title}>О вас</h3>
      <InputText
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[а-яА-ЯёЁ]/,
        })}
        size="medium"
        placeholder="Иванов"
        type="text"
      >
        Имя*
      </InputText>
      <InputText
        {...register("phoneNumber", {
          required: true,
          maxLength: 12,
          pattern: /^((\+7|7|8)+([0-9]){10})$/,
        })}
        type="tel"
        size="medium"
        placeholder="+79999999999"
      >
        Телефон*
      </InputText>
      <InputText
        {...register("email", {
          required: true,
          pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        })}
        type="email"
        size="medium"
        placeholder="ivanov@mail.ru"
      >
        Почта
      </InputText>
    </div>
  );
}

export default PersonalData;
