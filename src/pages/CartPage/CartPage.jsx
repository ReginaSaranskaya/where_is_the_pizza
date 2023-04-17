import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import styles from "./style.module.scss";
import SectionTitle from "../../ui-components/SectionTitle";
import Price from "../../ui-components/Price/Price";
import Button from "../../ui-components/Button/Button";
import PersonalData from "./PersonalData";
import Order from "./Order";
import DeliveryType from "./DeliveryType";
import Time from "./Time";
import Payment from "./Payment";
import Change from "./Change";
import Comment from "./Comment";

function CartPage() {
  const { handleSubmit, ...formProps } = useForm();
  const { register } = formProps;

  const onSubmit = (data) => console.log(data);

  return (
    <main className={styles.CartPage__main}>
      <FormProvider {...formProps}>
        <SectionTitle>Ваш заказ</SectionTitle>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.CartPage__wrapper}>
            <Order />
            <PersonalData />
            <div className={styles.Form__delivery}>
              <DeliveryType />
              <Time />
            </div>
            <Payment />
            <Change />
            <Comment />
            <div className={styles.Form__container}>
              <Price>Итого: 2 379 ₽</Price>
              <Button
                handleClick={() => console.log("Push")}
                size="big"
                variant="primary"
                type="submit"
                {...register("submit")}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

export default CartPage;
