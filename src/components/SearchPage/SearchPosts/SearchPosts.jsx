import React, {useState} from "react";
import SearchPost from "./SearchPost/SearchPost";
import {Col, Row} from "antd"
import styles from "./SearchPosts.module.css"
import List from "../../../assets/images/list.svg"
import Grid from "../../../assets/images/grid.svg"

const SearchPosts = (props) => {
  const [isRowLayout, setIsRowLayout] = useState("row");

  return (
    <div className={styles.postsContainer}>
      <Row className={styles.postsFilter}>
        <Col flex="50%">
          Видео по запросу  «{props.queryName}»
        </Col>
        <Col flex="50%">
          <div className={styles.layoutIcons}>
            <div onClick={() => {setIsRowLayout("row")}} className={isRowLayout === "row" ? styles.active + " " + styles.layoutIcn : styles.layoutIcn}><img src={List} alt="row"/></div>
            <div onClick={() => {setIsRowLayout("grid")}} className={isRowLayout === "grid" ? styles.active + " " + styles.layoutIcn : styles.layoutIcn}><img src={Grid} alt="grid"/></div>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        {props.posts.length ? props.posts.map((item, i) => {
          return (
            <SearchPost isRowLayout={isRowLayout} key={i} item={item} i={i}/>
          )
        }) : ''}
      </Row>
    </div>
  )
}


export default SearchPosts;