import React from "react"
import "antd/dist/antd.css";
import styles from "./App.module.css"
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import {loginMe, logout} from "./redux/auth.reducer";
import {useEffect} from "react";
import {setInit} from "./redux/app.reducer";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";
import {clearParamsPosts, getPosts, setQueryParams} from "./redux/search.reducer";
import {
  addQueries,
  changeCurrentQuery,
  changeQueries,
  deleteQuery
} from "./redux/favorites.reducer";



const App = (props) => {

  useEffect(() => {
    props.setInit()
  }, [props]);

  if(!props.init) {
    return (
      <div>Загрузка... Пожалуйста, подождите</div>
    )
  }

  return (
    <div className={styles.mainWrapper}>
      {props.isAuth && <Header logout={props.logout} />}

      <Switch>
        <Route exact path="/" render={() =>
          <SearchPage clearParamsPosts={props.clearParamsPosts}
                      addQueries={props.addQueries}
                      setQueryParams={props.setQueryParams}
                      queryParams={props.queryParams}
                      getPosts={props.getPosts}
                      posts={props.posts}
          />}
        />
        <Route path="/login" render={() =>
          <Login
            isSubmitting={props.isSubmitting}
            isAuth={props.isAuth}
            loginMe={props.loginMe}
            errorFormMessage={props.errorFormMessage}
          />}
        />
        <Route path="/favorites" render={() =>
          <Favorites
            deleteQuery={props.deleteQuery}
            getPosts={props.getPosts}
            setQueryParams={props.setQueryParams}
            changeQueries={props.changeQueries}
            changeCurrentQuery={props.changeCurrentQuery}
            currentQuery={props.currentQuery}
            queryArray={props.queryArray}
          />}
        />
        <Route path="*" render={() => "404 Страница не найдена"} />
      </Switch>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    init: state.app.init,
    errorFormMessage: state.auth.errorFormMessage,
    isAuth: state.auth.isAuth,
    isSubmitting: state.auth.isSubmitting,
    posts: state.searchPage.posts,
    queryParams: state.searchPage.queryParams,
    queryArray: state.favoritesPage.queryArray,
    currentQuery: state.favoritesPage.currentQuery
  }
}

const AppContainer = connect(mapStateToProps,
  {loginMe, changeQueries, setInit,
    getPosts, logout, setQueryParams,
    addQueries, clearParamsPosts, changeCurrentQuery,
    deleteQuery})(App);

const MainApp = () => {
  // HashRouter for GH pages
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}


export default MainApp;
