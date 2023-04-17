import React from "react";
import PropTypes from "prop-types";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

function SmallCardTitle({ children, className }) {
  return <h3 className={cn([`SmallCardTitle`, className])}>{children}</h3>;
}

SmallCardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default SmallCardTitle;
