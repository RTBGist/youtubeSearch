import React from "react";
import {Col} from "antd"
import styles from "./SearchPost.module.css"


const SearchPost = ({item, isRowLayout}) => {
  if(isRowLayout === "row") {
    return (
      <Col span={24}>
        <a className={styles.post + ' ' + styles.postRow} target="_blank" rel="noreferrer" href={item.link}>
          <div className={styles.postLeft}>
            <div className={styles.postImage}><img src={item.img} alt="videoIMG"/></div>
          </div>
          <div className={styles.postRight}>
            <div className={styles.postTitle}>{item.title}</div>
            <div className={styles.postDescr}>{item.description}</div>
          </div>

        </a>
      </Col>
    )
  }

  return (
      <Col span={6}>
        <a className={styles.post} target="_blank" rel="noreferrer" href={item.link}>
          <div className={styles.postImage}><img src={item.img} alt="videoIMG"/></div>
          <div className={styles.postTitle}>{item.title}</div>
          <div className={styles.postDescr}>{item.description}</div>
        </a>
      </Col>
  )
}

export default SearchPost;