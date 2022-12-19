import React from "react";
import PropTypes from "prop-types";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

function Price({ children, size = "middle" }) {
  return <div className={cn(["Price", `Price_${size}`])}>{children}</div>;
}

Price.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'middle', 'large'])
};

export default Price;
