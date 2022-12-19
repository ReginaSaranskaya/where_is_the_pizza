import React, { useEffect, useState } from "react";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";
import Cart from "./Cart";
import Navigation from "./Navigation";
import Navbar from "./Navbar";
import Location from "./img/Location.svg";
import Logotype from "../Logotype/Logotype";

const cn = cnBind.bind(styles);
const TOGGLE_OFFSET = 260;

function Header() {
  const [isToggleHeader, setIsToggleHeader] = useState(false);

  const handlerScroll = (e) => {
    e.stopPropagation();
    setIsToggleHeader(window.scrollY > TOGGLE_OFFSET);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);

  return (
    <header
      className={cn(styles.Header, {
        [styles["Header--fixed"]]: isToggleHeader,
      })}
    >
      <div className={styles.Header__info}>
        {!isToggleHeader && <div className={styles.Header__border}>
          <div className={cn(["Header__container", "Header__container--up"])}>
            <div className={styles.Header__location}>
              <img
                src={Location}
                className={styles.Header__location_image}
                alt="значок места"
              />
              <select className={styles.Header__location_city}>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Казань</option>
              </select>
            </div>
            <div className={styles.Header__schedule}>
              Время работы:{" "}
              <span className={styles.Header__time}>с 11:00 до 23:00</span>
            </div>
          </div>
        </div>}
        <div className={styles.Header__container}>
          <div className={styles.Header__wrapper}>
            <Logotype />
            {isToggleHeader && <Navigation />}
            <Cart>0 ₽</Cart>
          </div>
        </div>
      </div>
      {!isToggleHeader && <Navbar />}
    </header>
  );
}

export default Header;
