'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up Successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function (error) {
  $('#auth-message').text('Error on Signup')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signUpFailure data is: ', error)
}

const signInSuccess = function (data) {
  $('#auth-message').text('Signed in Successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').text('Error on Sign-In')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signInFailure data is: ', error)
}

const changePwSuccess = function (data) {
  $('#auth-message').text('Password Changed Successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('changePwSuccess data is: ', data)
}

const changePwFailure = function (error) {
  $('#auth-message').text('Error on Change Password')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('changePwFailure data is: ', error)
}

const signOutSuccess = function (data) {
  $('#auth-message').text('Signed Out Successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function (error) {
  $('#auth-message').text('Error on Sign Out')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signOutFailure data is: ', error)
}
// export ui functions so they can be used in events.js
// if your key has the same name as its value, you can just write the name once
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
