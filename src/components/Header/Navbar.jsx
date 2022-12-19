import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";
import Pizza from "./img/Pizza.svg";
import Sushi from "./img/Sushi.svg";
import Drinkables from "./img/Drinkables.svg";
import Snacks from "./img/Snacks.svg";
import Combo from "./img/Combo.svg";
import Desserts from "./img/Desserts.svg"
import Sauces from "./img/Sauces.svg";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Navbar__list}>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Pizza} className={styles.Navbar__img} alt="Пиццф" />
            Пицца
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Sushi} className={styles.Navbar__imgSmall} alt="Суши" />
            Суши
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Drinkables} className={styles.Navbar__img} alt="Напитки" />
            Напитки
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Snacks} className={styles.Navbar__img} alt="Закуски" />
            Закуски
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Combo} className={styles.Navbar__img} alt="Комбо" />
            Комбо
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Desserts} className={styles.Navbar__img} alt="Десерты" />
            Десерты
          </Link>
        </li>
        <li className={styles.Navbar__item}>
          <Link className={styles.Navbar__link} to="/">
            <img src={Sauces} className={styles.Navbar__imgSmall} alt="Соусы" />
            Соусы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
