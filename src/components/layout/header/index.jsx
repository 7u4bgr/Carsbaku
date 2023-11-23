import React from "react";
import styles from "./index.module.css";
import { CarDetails, CarIcon, LogoIcon } from "../../../icons";

const Header = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.texts}>
          <div className={styles.text1}>
            <h2>Главная</h2>
          </div>
          <div className={styles.text2}>
           <CarIcon/>
            <h2>Машины</h2>
          </div>
          <div className={styles.text3}>
           <CarDetails/>
            <h2>Запчасти</h2>
          </div>
          <div className={styles.text3}>
           
            <h2>Услуги</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
