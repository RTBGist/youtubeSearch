import {LSAPI} from "../api/api";
import store from "./redux-store";

const CHANGE_CURRENT_QUERY = 'favorites/CHANGE_CURRENT_QUERY'

const SET_QUERY_ARRAY = 'favorites/SET_QUERY_ARRAY'

const initialState = {
  currentQuery: {query: "", queryTitle: "", filterBy: "relevance", maxCount: 12, position: null},
  queryArray: null
}

const favoritesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_QUERY_ARRAY:
      return {
        ...state,
        queryArray: action.newArray
      }

    case CHANGE_CURRENT_QUERY:
      return {
        ...state,
        currentQuery: action.query
      }

    default:
      return state;
  }
}

// ACTION CREATORS
export const changeCurrentQuery = (query) => ({type: CHANGE_CURRENT_QUERY, query})
export const setQueryArray = (newArray) => ({type: SET_QUERY_ARRAY, newArray})



// THUNKS CREATORS
export const addQueries = (query) => async (dispatch, getState) => {
  const userId = store.getState().auth.userId;
  let queryArray = await LSAPI.getQueries(userId)

  if(queryArray) {
    queryArray.push(query)
    LSAPI.setQueries(queryArray, userId)
  } else {
    queryArray = [query]
    LSAPI.setQueries(queryArray, userId)
  }
  dispatch(setQueryArray(queryArray));
}

export const changeQueries = (newQuery, position) => async (dispatch, getState) => {
  const userId = store.getState().auth.userId;
  let queryArray = LSAPI.getQueries(userId)

  queryArray[position] = newQuery
  LSAPI.setQueries(queryArray, userId)
  dispatch(setQueryArray(queryArray));
}

export const deleteQuery = (position) => async (dispatch, getState) => {
  const userId = store.getState().auth.userId;
  let queryArray = LSAPI.getQueries(userId)

  queryArray.splice(position, 1)
  LSAPI.setQueries(queryArray, userId)
  dispatch(setQueryArray(queryArray));
}

export default favoritesReducer;