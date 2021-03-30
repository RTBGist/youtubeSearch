import React, {useState} from 'react'
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import ModalForm from "../common/ModalForm/ModalForm";
import {Link} from "react-router-dom";
import styles from "./Favorites.module.css"
import {Button} from 'antd';

const Favorites = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitForm = (values, position) => {
    props.changeQueries(values, position)
  };

  const changeQuery = (i) => {
    const newQueryParams = {...props.queryArray[i], position: i}
    props.changeCurrentQuery(newQueryParams)
    showModal()
  };

  const onDelete = (i) => {
    props.deleteQuery(i)
  }

  const executeQuery = (i) => {
    props.setQueryParams(props.queryArray[i])
    props.getPosts(props.queryArray[i])
  }

  return (
    <div className={styles.favWrapper}>
      <div><h1>Избранное</h1></div>

      {props.queryArray ? props.queryArray.map((query, i) => {
        return (
          <div key={i} className={styles.favItem}>
            <div className={styles.favTitle}>{query.queryTitle}</div>

            <div className={styles.favButtons}>
              <Link to={'/'} onClick={() => {executeQuery(i)}}>выполнить</Link>
              <Button type="link" onClick={() => {changeQuery(i)}}>изменить</Button>
              <Button type="link" danger onClick={() => {onDelete(i)}}>удалить</Button>
            </div>
          </div>
        )
      }) : 'Элементы отсутствуют'}


      <ModalForm onSubmitForm={onSubmitForm}
                 queryParams={props.currentQuery}
                 isModalVisible={isModalVisible}
                 showModal={showModal}
                 hideModal={hideModal}
                 queryDisabled={false}
                 formTitle={"Изменить запрос"}
                 formButton={"Изменить"}
      />
    </div>
  )
}

export default compose(
  withAuthRedirect
)(Favorites);