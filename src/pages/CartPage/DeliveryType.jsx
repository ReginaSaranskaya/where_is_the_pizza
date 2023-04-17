import React, {useState} from 'react';
import {useFormContext} from "react-hook-form";

import styles from "./style.module.scss";
import RadioButton from "../../ui-components/RadioButton/RadioButton";
import Delivery from "./Delivery";
import Pickup from "./Pickup";

function DeliveryType() {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const { register } = useFormContext();
  return (
    <>
      <div className={styles.DeliveryType__wrapper}>
        <h3 className={styles.DeliveryType__title}>Доставка</h3>
        <div className={styles.DeliveryType__containerRadio}>
          <RadioButton
            {...register("delivery", {
              onChange: (e) => setDeliveryMethod(e.currentTarget.value),
            })}
            id="delivery"
            checked={deliveryMethod === "delivery"}
            volume
            value="delivery"
          >
            Доставка
          </RadioButton>
          <RadioButton
            {...register("delivery", {
              onChange: (e) => setDeliveryMethod(e.currentTarget.value),
            })}
            id="pickup"
            checked={deliveryMethod === "pickup"}
            volume
            value="pickup"
          >
            Самовывоз
          </RadioButton>
        </div>
      </div>
      {deliveryMethod === "delivery" && <Delivery />}
      {deliveryMethod === "pickup" && <Pickup />}
    </>

  );
}

export default DeliveryType;