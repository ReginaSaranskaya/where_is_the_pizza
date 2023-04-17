import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./style.module.scss";

function CartCardTitle({ children, className = "" }) {
  return <h2 className={cn(styles.CartCardTitle, className)}>{children}</h2>;
}

CartCardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CartCardTitle;
