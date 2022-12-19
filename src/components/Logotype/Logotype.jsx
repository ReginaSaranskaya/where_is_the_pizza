import React from 'react';
import {Link} from "react-router-dom";

import styles from "./style.module.scss";
import Logo from "../Header/img/Logo.svg";

function Logotype() {
  return (
    <Link to="/" className={styles.Logo}>
      <img src={Logo} className={styles.Logo__image} alt="Пицца" />
      <span className={styles.Logo__name}>Куда пицца</span>
    </Link>
  );
}

export default Logotype;