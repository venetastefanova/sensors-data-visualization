import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <div className={styles.Wrapper}>
    <div>
      <img
        className={styles.Logo}
        src="https://www.eficode.com/hubfs/images/logos/efilogotext.svg"
        alt="logo"/>
    </div>
    <div>
      <h1>Sensors data visualization task</h1>
    </div>
  </div>
);

export default Navigation;
