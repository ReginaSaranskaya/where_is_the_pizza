import React from "react";
import PropTypes from "prop-types";

import Modal from "../../ui-components/Modal/Modal";
import FilterIngridient from "../../ui-components/FilterIngridient/FilterIngridient";
import styles from "./style.module.scss";
import Ingridients from "../../ingridients.json";

const title = {
  sauces: "Соус",
  vegetables: "Другое",
  cheese: "Сыр",
  meat: "Мясо",
  seafood: "Морепродукты",
  basic: "Основа",
  extra: "Добавки",
};

function ModalFilter({
  onClose,
  location = "center",
  isVisible = false,
  filters,
}) {
  return (
    <Modal onClose={onClose} location={location} isVisible={isVisible}>
      <h3 className={styles.ModalFilter__heading}>Фильтры</h3>
      {Object.keys(filters).map((key) => (
        <div className={styles.ModalFilter__category}>
          <div className={styles.ModalFilter__title} key={title[key]}>
            {title[key]}
          </div>
          {filters[key].map((ingridient) => (
            <FilterIngridient
              key={`${ingridient}${key}`}
              name={ingridient}
              id={ingridient}
            >
              {Ingridients[ingridient]}
            </FilterIngridient>
          ))}
        </div>
      ))}
    </Modal>
  );
}

ModalFilter.propTypes = {
  onClose: PropTypes.func.isRequired,
  location: PropTypes.string,
  isVisible: PropTypes.bool,
  filters: PropTypes.oneOf([
    PropTypes.shape({
      sauces: PropTypes.arrayOf(PropTypes.string),
      cheese: PropTypes.arrayOf(PropTypes.string),
      meat: PropTypes.arrayOf(PropTypes.string),
      vegetables: PropTypes.arrayOf(PropTypes.string),
    }),
    PropTypes.shape({
      seafood: PropTypes.arrayOf(PropTypes.string),
      extra: PropTypes.arrayOf(PropTypes.string),
      basic: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),
};

export default ModalFilter;
