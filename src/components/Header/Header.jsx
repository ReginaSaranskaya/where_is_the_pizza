import React  from "react";
import cnBind from "classnames/bind";

import styles from "./style.module.scss";
import Cart from "./Cart";
import Navigation from "./Navigation";
// import Navbar from "./Navbar";
import Location from "./img/Location.svg";
import Logotype from "../Logotype/Logotype";

const cn = cnBind.bind(styles);

function Header() {

  return (
    <header
      className={cn(styles.Header
      )}
    >
      <div className={styles.Header__info}>
          <div className={styles.Header__border}>
            <div className={cn(["Header__container", "Header__container--up"])}>
              <div className={styles.Header__location}>
                <img
                  src={Location}
                  className={styles.Header__location_image}
                  alt="значок места"
                />
                <select className={styles.Header__location_city}>
                  <option>Москва</option>
                  <option disabled>Санкт-Петербург</option>
                  <option disabled>Казань</option>
                </select>
              </div>
              <div className={styles.Header__schedule}>
                Время работы:{" "}
                <span className={styles.Header__time}>с 11:00 до 23:00</span>
              </div>
            </div>
          </div>
        <div className={styles.Header__container}>
          <div className={styles.Header__wrapper}>
            <Logotype />
            <Navigation />
            <Cart>0 ₽</Cart>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </header>
  );
}

export default Header;
