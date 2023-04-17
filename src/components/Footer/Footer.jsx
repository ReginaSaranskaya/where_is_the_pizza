import React from 'react';
import {Link} from "react-router-dom";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";
import Logotype from "../Logotype/Logotype";
import Instagram from "./img/Instagram.svg";
import FaceBook from "./img/Facebook.svg";
import Location from "./img/Location.svg";
import Phone from "./img/Phone.svg";

const cn = cnBind.bind(styles);

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__box}>
        <Logotype />
        <span className={styles.Footer__copyright}>© Copyright 2021 — Куда Пицца</span>
      </div>

      <div className={styles.Footer__wrapper}>
        <h3 className={styles.Footer__title}>Контакты</h3>
        <Link className={cn(["Footer__contact", "Footer__phone"])} type="tel" to="tel:+7 (926) 223-10-11">
          <img className={[styles["Footer__phone--icn"]]}  src={Phone} alt="Телефон"/>
          +7 (926) 223-10-11
        </Link>
        <div className={cn(["Footer__contact", "Footer__address"])}>
          <img className={[styles["Footer__address--icn"]]} src={Location} alt="Локация"/>
          Москва, ул. Юных Ленинцев, д.99
        </div>
        <div className={styles.Footer__container}>
          <Link className={cn(["Footer__contact", "Footer__socials"])} to="https://ru-ru.facebook.com/">
           <img className={[styles["Footer__socials--icn"]]}  src={FaceBook} alt="Фэйсбук"/>
            Facebook
          </Link>
          <Link className={cn(["Footer__contact", "Footer__socials"])} to="https://www.instagram.com/">
            <img className={[styles["Footer__socials--icn"]]} src={Instagram} alt="Инстаграм"/>
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;