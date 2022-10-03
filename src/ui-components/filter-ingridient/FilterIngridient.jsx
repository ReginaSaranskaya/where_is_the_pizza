/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss"


function FilterIngridient({ children, id = "", name = "" }) {
  return (
    <div className={styles.FilterIngridient}>
        <input className={styles.FilterIngridient__input} onChange={() => {console.log('check')}} type="checkbox" name={name} id={id} />
        <label className={styles.FilterIngridient__label} htmlFor={id} >{children}</label>
    </div>
  );
}

FilterIngridient.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    name: PropTypes.string
};

export default FilterIngridient;