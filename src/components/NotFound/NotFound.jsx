import React from "react"
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.NotFoundWrapper}>
      <div>
        <h1>404</h1>
        Страница не найдена
      </div>
    </div>

  )
};

export default NotFound;