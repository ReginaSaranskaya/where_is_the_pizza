import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss"

function SectionTitle({ children }) {
  return <h2 className={styles.SectionTitle}>{children}</h2>;
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
