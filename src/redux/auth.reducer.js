import {authAPI, LSAPI} from "../api/api";

const SET_ERROR_FORM = 'auth/SET_ERROR_FORM'
const SET_SUBMITTING = 'auth/SET_SUBMITTING'
const SET_AUTH = 'auth/SET_AUTH'

const initialState = {
  userId: null,
  isAuth: false,
  errorFormMessage: null,
  isSubmitting: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_ERROR_FORM:
      return {
        ...state,
        isAuth: false,
        errorFormMessage: action.msg
      }

    case SET_AUTH:
      return {
        ...state,
        isAuth: action.auth,
        userId: action.id
      }

    case SET_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.submitting
      }

    default:
      return state;
  }
}

// ACTION CREATORS
export const setErrorForm = (msg) => ({type: SET_ERROR_FORM, msg})
export const setAuth = (auth, id = null) => ({type: SET_AUTH, auth, id})
export const setSubmitting = (submitting) => ({type: SET_SUBMITTING, submitting})



// THUNKS CREATORS
export const getAuth = () => async (dispatch) => {
  const token = await LSAPI.getToken() // fake request getToken

  if(!!token) {
    const userId = await authAPI.getUserId(token)

    dispatch(setAuth(true, userId));
    return userId
  } else {
    dispatch(setAuth(false, null));
  }
}
export const loginMe = (username, password) => async (dispatch) => {
  dispatch(setSubmitting(true))
  const data = await authAPI.login(username, password)

  if (data.status) {
    // login success
    dispatch(setAuth(true, data.profileUser.id))
    dispatch(setSubmitting(false))

    localStorage.setItem('token', data.profileUser.token)
  } else {
    dispatch(setErrorForm(data.errorMessage))

    setTimeout(() => {
      dispatch(setErrorForm(null))
      dispatch(setSubmitting(false))
    }, 3000)
  }


};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(setAuth(false, null))
};


export default authReducer;