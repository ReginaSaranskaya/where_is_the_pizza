import React, { useState } from "react";
import PropTypes from "prop-types";

import SmallCardTitle from "../../ui-components/SmallCardTitle";
import styles from "./style.module.scss";
import RadioButton from "../../ui-components/RadioButton/RadioButton";
import AddIngridient from "../../ui-components/AddIngredient";
import Price from "../../ui-components/Price/Price";
import Button from "../../ui-components/Button/Button";
import Modal from "../../ui-components/Modal/Modal";
import Ingridients from "../../ingridients.json";

const addIngridients = [
  { name: "cheese", title: "Моцарелла", price: "59" },
  { name: "champignons", title: "Шампиньоны", price: "59" },
  { name: "onion", title: "Красный лук", price: "59" },
  { name: "pepper", title: "Сладкий перец", price: "59" },
];

function ModalCard({
  onClose,
  location = "center",
  isVisible,
  current,
  title,
}) {
  const [diameter, setDiameter] = useState("20");
  const [dough, setDough] = useState("thick");

  return (
    <Modal onClose={onClose} location={location} isVisible={isVisible}>
      <div className={styles.ModalCard__wrapp}>
        <div className={styles.ModalCard__boxImg}>
          <img
            className={styles.ModalCard__image}
            src={current?.src}
            alt={current?.name}
          />
        </div>
        <div className={styles.ModalCard__container}>
          <SmallCardTitle>{current?.name}</SmallCardTitle>
          <p className={styles.ModalCard__text}>
            <span>Состав: </span>
            {current?.ingredients.map((item) => Ingridients[item]).join(", ")}
          </p>
          {title === "Пицца" && (
            <div>
              <div className={styles.ModalCard__btnContainer}>
                <RadioButton
                  className={styles.ModalCard__diameter}
                  name="diameter"
                  id="small"
                  onChange={(e) => setDiameter(e.currentTarget.value)}
                  value="20"
                  volume
                  checked={diameter === "20"}
                >
                  20 см
                </RadioButton>
                <RadioButton
                  className={styles.ModalCard__diameter}
                  name="diameter"
                  id="medium"
                  onChange={(e) => setDiameter(e.currentTarget.value)}
                  value="28"
                  volume
                  checked={diameter === "28"}
                >
                  28 см
                </RadioButton>
                <RadioButton
                  className={styles.ModalCard__diameter}
                  name="diameter"
                  id="large"
                  onChange={(e) => setDiameter(e.currentTarget.value)}
                  value="33"
                  volume
                  checked={diameter === "33"}
                >
                  33 см
                </RadioButton>
              </div>
              <div className={styles.ModalCard__btnContainer}>
                <RadioButton
                  className={styles.ModalCard__dough}
                  name="dough"
                  id="thick"
                  onChange={(e) => setDough(e.currentTarget.value)}
                  value="thick"
                  volume
                  checked={dough === "thick"}
                >
                  Толстое
                </RadioButton>
                <RadioButton
                  className={styles.ModalCard__dough}
                  name="dough"
                  id="subtle"
                  onChange={(e) => setDough(e.currentTarget.value)}
                  value="subtle"
                  volume
                  checked={dough === "subtle"}
                >
                  Тонкое
                </RadioButton>
              </div>
              <div className={styles.ModalCard__additionalBox}>
                <SmallCardTitle className={styles.ModalCard__title}>
                  Добавьте в пиццу
                </SmallCardTitle>
                {addIngridients.map((ingridient) => (
                  <AddIngridient
                    price={ingridient.price}
                    handleClick={() => console.log("!")}
                    name={ingridient.name}
                    text={ingridient.title}
                  />
                ))}
              </div>
            </div>
          )}
          <div className={styles.ModalCard__wrapper}>
            <Price>{`Итого: ${current?.price}`}</Price>
            <Button
              size="big"
              variant="primary"
              handleClick={() => console.log("click")}
            >
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ModalCard.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  location: PropTypes.string,
  isVisible: PropTypes.bool,
  current: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]))
};

export default ModalCard;
