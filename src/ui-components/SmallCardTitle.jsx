import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss"

function SmallCardTitle({ children }) {
  return <h3 className={styles.SmallCardTitle}>{children}</h3>;
}

SmallCardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmallCardTitle;