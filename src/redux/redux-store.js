import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth.reducer";
import appReducer from "./app.reducer";
import searchReducer from "./search.reducer";
import favoritesReducer from "./favorites.reducer";


const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  searchPage: searchReducer,
  favoritesPage: favoritesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk) // Добавили опцию санок в случае нужды, то есть теперь принимает не только экшены
));

export default store;