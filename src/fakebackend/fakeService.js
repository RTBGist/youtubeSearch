import axios from "axios";

const login = async (username, password) => {
  const users = await axios.get('/youtubeSearch/users.json');

  const filteredUsers = users.data.users.filter(user => {
    return user.username === username && user.password === password
  })

  return new Promise( (resolve, reject) => {

    if(filteredUsers.length) {
      // valid
      let user = filteredUsers[0]
      let profileUser = {
        id: user.id,
        username: user.username,
        token: user.token
      };

      resolve( {status: true, errorMessage: null, profileUser})
    } else {
      resolve( {status: false, errorMessage: 'Неправильный логин или пароль', profileUser: null})
    }
  })
}

const me = async (token) => {
  const users = await axios.get('/youtubeSearch/users.json');

  const filteredUsers = users.data.users.filter(user => {
    return user.token === token
  });

  return new Promise( (resolve, reject) => {
    if(filteredUsers.length) {
      // valid
      let user = filteredUsers[0]
      resolve(user.id)
    }
  })
}


export const fakeUserService = {
  login,
  me
}