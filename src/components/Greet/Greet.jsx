import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";
import SectionTitle from "../../ui-components/SectionTitle";
import Button from "../../ui-components/Button/Button";
import ModalFilter from "../ModalFilter";
import Card from "../Card/Card";
import Ingridients from "../../ingridients.json";
import ModalCard from "../ModalCard/ModalCard";

function Greet({
  title,
  modalFilter,
  setModalFilter,
  filters,
  range,
  modalCard,
  setModalCard,
  current,
}) {
  return (
    <section className={styles.Greed}>
      <div className={styles.Greed__wrapper}>
        <SectionTitle>{title}</SectionTitle>
        <Button
          variant="text"
          size="small"
          handleClick={() => setModalFilter(true)}
        >
          Фильтры
        </Button>
        <ModalFilter
          onClose={() => setModalFilter(false)}
          location="right"
          isVisible={modalFilter}
          filters={filters}
        />
      </div>
      <div className={styles.Greed__wrapper}>
        {range.map(({ src, name, ingredients, price, id }) => (
          <Card
            title={title}
            price={price}
            src={src}
            name={name}
            ingredients={ingredients.map((item) => Ingridients[item])}
            id={id}
            setModal={() => setModalCard(id)}
          />
        ))}
        <ModalCard
          title={title}
          onClose={() => setModalCard(null)}
          location="center"
          isVisible={!!modalCard}
          current={current}
        />
      </div>
    </section>
  );
}

Greet.propTypes = {
  title: PropTypes.string,
  modalFilter: PropTypes.bool,
  setModalFilter: PropTypes.func,
  filters: PropTypes.oneOf([
    PropTypes.oneOf([
      PropTypes.shape({
        sauces: PropTypes.arrayOf(PropTypes.string),
        cheese: PropTypes.arrayOf(PropTypes.string),
        meat: PropTypes.arrayOf(PropTypes.string),
        vegetables: PropTypes.arrayOf(PropTypes.string),
      }), PropTypes.node
    ]),
    PropTypes.oneOf([
      PropTypes.shape({
        seafood: PropTypes.arrayOf(PropTypes.string),
        extra: PropTypes.arrayOf(PropTypes.string),
        basic: PropTypes.arrayOf(PropTypes.string),
      }),
      PropTypes.node
    ])
  ]),
  range: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      src: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      add: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.string,
    })
  ),
  modalCard: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  setModalCard: PropTypes.func,
  current: PropTypes.func,
};

export default Greet;
