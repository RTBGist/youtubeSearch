import {getAuth} from "./auth.reducer";
import {LSAPI} from "../api/api";
import {setQueryArray} from "./favorites.reducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION'

const initialState = {
  init: false
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_INITIALIZATION:
      return {
        ...state,
        init: true
      }

    default:
      return state;
  }
}

// ACTION CREATORS
export const setInitialization = () => ({type: SET_INITIALIZATION})

// THUNKS CREATORS
export const setInit = () => (dispatch) => {
  let promise = dispatch(getAuth());


  promise.then((response) => {
    let favoriteQueries = LSAPI.getQueries(response);
    dispatch(setQueryArray(favoriteQueries));
    dispatch(setInitialization());
  })


}


export default appReducer;