'use strict'

const store = require('./store')
// const gameEvents = require('./events.js')

const signUpSuccess = function (data) {
  $('#api-message').text('Signed up Successfully')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function (error) {
  $('#api-message').text('Error on Signup')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('signUpFailure data is: ', error)
}

const signInSuccess = function (data) {
  $('#api-message').text('Signed in Successfully')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#gameboard').removeClass('hidden')
  $('.messages').removeClass('hidden')
  $('.button').removeClass('hidden')
  $('.games-display').removeClass('hidden')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#api-message').text('Error on Sign-In')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('signInFailure data is: ', error)
}

const changePwSuccess = function (data) {
  $('#api-message').text('Password Changed Successfully')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  console.log('changePwSuccess data is: ', data)
}

const changePwFailure = function (error) {
  $('#api-message').text('Error on Change Password')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('changePwFailure data is: ', error)
}

const signOutSuccess = function (data) {
  $('#api-message').text('Signed Out Successfully')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#gameboard').addClass('hidden')
  $('.messages').addClass('hidden')
  console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function (error) {
  $('#api-message').text('Error on Sign Out')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('signOutFailure data is: ', error)
}

const startNewGameSuccess = function (data) {
  $('#api-message').text('New Game Started')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  $('.button').removeClass('hidden')
  $('.games-display').removeClass('hidden')
  $('.messages').text('')
  store.game = data.game
  drawGame()
}

const drawGame = function () {
  let i
  for (i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
}

const startNewGameFailure = function () {
  $('#api-message').text('Error on Starting New Game')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('Failed to Create New Game')
}

const updateGameSuccess = function () {
  $('#api-message').text('Game Saved Successfully')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  console.log('game was successfully saved')
}

const updateGameFailure = function () {
  $('#api-message').text('Error Updating Server - Failed to Save Game')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('Failed to Create New Game')
}

const getAllGamesSuccess = function (data) {
  $('#api-message').text('Success retrieving all game records')
  $('#api-message').removeClass()
  $('#api-message').addClass('success')
  console.log('all game data is stored')
  store.games = data.games
  displayGamesData()
}

const displayGamesData = function () {
  let i
  for (i = 0; i < store.games.length; i++) {
    $('#game-data-display').text(store.games[i].id)
  }
}

const getAllGamesFailure = function () {
  $('#api-message').text('Failure retrieving all game records')
  $('#api-message').removeClass()
  $('#api-message').addClass('failure')
  console.log('failed to retrieve data for all games')
}
// const updateGameFailure = function () {
//   $('#api-message').text('Error Updating Server - Failed to Save Game')
//   $('#api-message').removeClass()
//   $('#api-message').addClass('failure')
//   console.log('Failed to Create New Game')
// }
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
  signOutFailure,
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getAllGamesSuccess,
  getAllGamesFailure
}
