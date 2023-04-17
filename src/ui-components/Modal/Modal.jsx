import React, {useEffect, memo, useMemo} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cn = cnBind.bind(styles);

function Modal({ onClose, location = "center", isVisible, children }) {

  const modalRoot = useMemo(() => document.querySelector("body"), []);

  useEffect(() => {
    modalRoot.setAttribute("style", isVisible ? "overflow: hidden;" : "");
  }, [isVisible, modalRoot]);

  return createPortal((
    isVisible && (
      <div
        role="presentation"
        className={
          isVisible
            ? cn([
                "Modal",
                "Modal__active",
                `Modal__${location}`,
                `Modal__${location}`,
              ])
            : cn("Modal")
        }
        onClick={onClose}
      >
        <div
          role="presentation"
          className={cn(["Modal__content", `Modal__content--${location}`])}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={cn([`Modal__button`, `Modal__button--${location}`])}
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            {" "}
          </button>
          {children}
        </div>
      </div>
    )
  ), modalRoot);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  location: PropTypes.string,
};

export default memo(Modal);
