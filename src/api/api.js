import * as axios from "axios";
import {fakeUserService} from "../fakebackend/fakeService";

const YOUTUBE_KEY = 'AIzaSyBAZO2bs3tpjhRFgXd3SJGhJdUqRxcoT68'


// YOUTUBE API
export const youtubeAPI = {
  getPosts(queryParams) {
    return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=${queryParams.filterBy}&type=video&q=${queryParams.query}&key=${YOUTUBE_KEY}&maxResults=${queryParams.maxCount}`)
  }
}

// LocalStorage API
export const LSAPI = {
  getToken() {
    return localStorage.getItem('token');
  },

  getQueries(userId) {
    return JSON.parse(localStorage.getItem(`queries_id_${userId}`))
  },

  setQueries(queryArray, userId) {
    localStorage.setItem(`queries_id_${userId}`, JSON.stringify(queryArray))
  }
}

// AUTH API
export const authAPI = {
  getUserId(token) {
    return fakeUserService.me(token)
  },

  login(username, password) {
    return fakeUserService.login(username, password)
  }
}

