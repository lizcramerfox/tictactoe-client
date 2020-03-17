const api = require('./api')
const ui = require('./ui')
// const app = require('./app')
const getFormFields = require('./../../lib/get-form-fields')

let gameboard
let currentPlayer

// *** AUTHENTICATION ***
// Sign-Up (New User)
const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  document.getElementById('sign-up').reset()
}
// Sign-In (Existing User, NOT Currently Logged-In)
const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  document.getElementById('sign-in').reset()
}
// Change Password (Currently Logged-In User)
const onChangePw = function (event) {
  event.preventDefault()
  console.log('Changing Password')
  const data = getFormFields(event.target)
  api.changePw(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
  document.getElementById('change-pw').reset()
}

// Sign Out (Currently Logged-In User)
const onSignOut = function (event) {
  event.preventDefault()
  console.log('Logging Out')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// *** GAME ENGINE ***
// Select a box when user clicks it
const selectBox = function (event) {
  // check if the board has a winner OR a draw (game is over)
  if (isWinner()) {
    return
  }
  if (isDraw()) {
    return
  }
  // clear any existing alert messages before making next valid move
  clearAlert()
  // let player make a move
  const selectedBox = event.target
  const boxId = event.target.id
  if (gameboard[boxId] !== null) {
    console.log('box has already been taken')
    $('#game-message').text('Invalid move: please choose a blank square')
    return
  }
  placeMarker(currentPlayer, boxId, selectedBox)

  if (isWinner()) {
    $('#game-message').text('GAME OVER - ' + currentPlayer + ' wins!')
    $('#current-player').text('')
    console.log(currentPlayer + ' wins')
  } else if (isDraw()) {
    $('#game-message').text('GAME OVER - draw game')
    $('#current-player').text('')
    console.log('game over - draw')
  } else {
    switchPlayer()
  }
}

const resetBoard = function () {
  gameboard = [null, null, null, null, null, null, null, null, null]
  currentPlayer = ''
  switchPlayer()
}

// CHECK FOR WINNER:
// Pass the array through a function to check if:
const isWinner = function () {
  // if ANY of the following are true:
  return (
    ((gameboard[0] === gameboard[1]) && (gameboard[1] === gameboard[2]) && (gameboard[0] !== null)) || // 0=1=2 OR
    ((gameboard[3] === gameboard[4]) && (gameboard[4] === gameboard[5]) && (gameboard[3] !== null)) || // 3=4=5
    ((gameboard[6] === gameboard[7]) && (gameboard[7] === gameboard[8]) && (gameboard[6] !== null)) || // 6=7=8
    ((gameboard[0] === gameboard[3]) && (gameboard[3] === gameboard[6]) && (gameboard[0] !== null)) || // 0=3=6
    ((gameboard[1] === gameboard[4]) && (gameboard[4] === gameboard[7]) && (gameboard[1] !== null)) || // 1=4=7
    ((gameboard[2] === gameboard[5]) && (gameboard[5] === gameboard[8]) && (gameboard[2] !== null)) || // 2=5=8
    ((gameboard[0] === gameboard[4]) && (gameboard[4] === gameboard[8]) && (gameboard[0] !== null)) || // 0=4=8
    ((gameboard[6] === gameboard[4]) && (gameboard[4] === gameboard[2]) && (gameboard[6] !== null)) // 6=4=2
  )
}

const isDraw = function () {
  return (
    (gameboard[0] !== null) &&
    (gameboard[1] !== null) &&
    (gameboard[2] !== null) &&
    (gameboard[3] !== null) &&
    (gameboard[4] !== null) &&
    (gameboard[5] !== null) &&
    (gameboard[6] !== null) &&
    (gameboard[7] !== null) &&
    (gameboard[8] !== null)
  )
}

const switchPlayer = function () {
  if (currentPlayer !== 'X') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  console.log(currentPlayer + ' is current player')
  $('#current-player').text(currentPlayer + ' take your turn')
}

const placeMarker = function (currentPlayer, boxId, selectedBox) {
  gameboard[boxId] = currentPlayer
  $(selectedBox).text(currentPlayer)
}

const clearAlert = function () {
  $('#message').text('')
}

module.exports = {
  selectBox,
  resetBoard,
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
