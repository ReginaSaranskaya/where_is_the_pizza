import React from "react";
import {Outlet} from "react-router-dom";

import styles from "./style.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {

  return (
    <>
      <Header />
      <div className={styles.Layout__wrapper}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
