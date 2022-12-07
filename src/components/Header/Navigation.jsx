import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.Navigation__list}>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Пицца
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Суши
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Напитки
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Закуски
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Комбо
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Десерты
          </Link>
        </li>
        <li className={styles.Navigation__item}>
          <Link className={styles.Navigation__link} to="/">
            Соусы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
