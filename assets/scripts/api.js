'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('You are now in: api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('You are now in: api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePw = function (data) {
  console.log('token is ' + store.user.token)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}


// export the api functions, so they can be used in `events.js`
module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
