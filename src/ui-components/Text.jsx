import React from 'react';
import PropTypes from "prop-types";

import styles from "./style.module.scss";


function Text({children}) {
  return (
    <p className={styles.Text}>
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;