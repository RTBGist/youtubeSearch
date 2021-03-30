import React, {useState} from 'react'
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import Search from "./Search/Search";
import ModalForm from "../common/ModalForm/ModalForm";
import styles from "./SearchPage.module.css"
import SearchPosts from "./SearchPosts/SearchPosts";



const SearchPage = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitForm = (newQuery) => {
    props.addQueries(newQuery, props.userId)
  }

  return (

    <div className={styles.searchPageWrapper}>
      <Search searchResult={!!props.posts} clearParamsPosts={props.clearParamsPosts} setQueryParams={props.setQueryParams} queryParams={props.queryParams} showModal={showModal} getPosts={props.getPosts} />


      {props.posts &&
        <SearchPosts queryName={props.queryParams.query} posts={props.posts} />
      }

      <ModalForm onSubmitForm={onSubmitForm}
                 queryParams={props.queryParams}
                 isModalVisible={isModalVisible}
                 showModal={showModal}
                 hideModal={hideModal}
                 queryDisabled={true}
      />
    </div>
  )
};



export default compose(
  withAuthRedirect
)(SearchPage);