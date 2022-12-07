import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss"

function CardTitle({ children }) {
  return <h3 className={styles.CardTitle}>{children}</h3>;
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitle;