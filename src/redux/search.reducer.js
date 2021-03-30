import {youtubeAPI} from "../api/api";

const SET_POSTS = 'search/SET_POSTS'
const SET_QUERY_PARAMS = 'search/SET_QUERY_PARAMS'
const CLEAR_PARAMS_POSTS = 'search/CLEAR_PARAMS_POSTS'

const initialState = {
  queryParams: { query: "", queryTitle: "", filterBy: "relevance", maxCount: 12 },
  posts: null
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_QUERY_PARAMS:
      return {
        ...state,
        queryParams: action.query
      }

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case CLEAR_PARAMS_POSTS:
      return {
        ...state,
        queryParams: { query: "", queryTitle: "", filterBy: "relevance", maxCount: 12 },
        posts: null
      }


    default:
      return state;
  }
}

// ACTION CREATORS
export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setQueryParams = (query) => ({type: SET_QUERY_PARAMS, query})
export const clearParamsPosts = () => ({type: CLEAR_PARAMS_POSTS})


// THUNKS CREATORS
export const getPosts = (queryParams) => async (dispatch) => {
  try {
    const response = await youtubeAPI.getPosts(queryParams)

    const posts = response.data.items.map((item) => {
      return {
        title: item.snippet.title,
        description: item.snippet.description,
        img: item.snippet.thumbnails.medium.url,
        link: 'https://youtu.be/' + item.id.videoId
      }
    });

    dispatch(setPosts(posts))
  } catch(error) {
    // error
    console.log(error)
  }
}


export default searchReducer;