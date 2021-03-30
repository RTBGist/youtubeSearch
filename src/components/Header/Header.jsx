import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import React from "react";
import {Row, Col, Button} from 'antd';

const Header = ({logout}) => {

  return (
    <header>
      <div className={styles.headerContainer}>
        <Row>
          <Col flex="50%">
            <div className={styles.headerLeft}>
              <div className={styles.headerLogo}><img src={Logo} alt="Logo"/></div>
              <NavLink className={styles.headerLink} exact to="/" activeClassName={styles.active}>Поиск</NavLink>
              <NavLink className={styles.headerLink} exact to="/favorites/" activeClassName={styles.active}>Избранное</NavLink>
            </div>
          </Col>
          <Col flex="50%">
            <div className={styles.headerRight}>
              <Button type="link" onClick={logout}>Выйти</Button>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header;