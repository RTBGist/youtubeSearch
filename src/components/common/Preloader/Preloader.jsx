import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <div className={styles.preloader}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}

export default Preloader;