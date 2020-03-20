'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameEvents = require('./events')

$(() => {
  $('.box').on('click', gameEvents.selectBox)
  gameEvents.resetBoard()
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-pw').on('submit', gameEvents.onChangePw)
  $('#sign-out').on('submit', gameEvents.onSignOut)
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  $('#get-all-games').on('click', gameEvents.onGetAllGames)
})
