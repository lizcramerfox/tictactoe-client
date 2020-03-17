const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')

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

// GAME SAVING & RETRIEVAL
const onStartNewGame = function (event) {
  event.preventDefault()
  api.startNewGame()
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}
// const onUpdateGame = function (event) {
//   event.preventDefault()
//   api.updateGame()
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

const onGetAllGames = function (event) {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
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
  if (store.game.cells[boxId] !== '') {
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
  updateGame(boxId, currentPlayer, isOver())
}



// CHECK FOR WINNER:
// Pass the array through a function to check if:
const isWinner = function () {
  // if ANY of the following are true:
  return (
    ((store.game.cells[0] === store.game.cells[1]) && (store.game.cells[1] === store.game.cells[2]) && (store.game.cells[0] !== '')) || // 0=1=2 OR
    ((store.game.cells[3] === store.game.cells[4]) && (store.game.cells[4] === store.game.cells[5]) && (store.game.cells[3] !== '')) || // 3=4=5
    ((store.game.cells[6] === store.game.cells[7]) && (store.game.cells[7] === store.game.cells[8]) && (store.game.cells[6] !== '')) || // 6=7=8
    ((store.game.cells[0] === store.game.cells[3]) && (store.game.cells[3] === store.game.cells[6]) && (store.game.cells[0] !== '')) || // 0=3=6
    ((store.game.cells[1] === store.game.cells[4]) && (store.game.cells[4] === store.game.cells[7]) && (store.game.cells[1] !== '')) || // 1=4=7
    ((store.game.cells[2] === store.game.cells[5]) && (store.game.cells[5] === store.game.cells[8]) && (store.game.cells[2] !== '')) || // 2=5=8
    ((store.game.cells[0] === store.game.cells[4]) && (store.game.cells[4] === store.game.cells[8]) && (store.game.cells[0] !== '')) || // 0=4=8
    ((store.game.cells[6] === store.game.cells[4]) && (store.game.cells[4] === store.game.cells[2]) && (store.game.cells[6] !== '')) // 6=4=2
  )
}

const isDraw = function () {
  return (
    (store.game.cells[0] !== '') &&
    (store.game.cells[1] !== '') &&
    (store.game.cells[2] !== '') &&
    (store.game.cells[3] !== '') &&
    (store.game.cells[4] !== '') &&
    (store.game.cells[5] !== '') &&
    (store.game.cells[6] !== '') &&
    (store.game.cells[7] !== '') &&
    (store.game.cells[8] !== '')
  )
}

const switchPlayer = function () {
  if (currentPlayer !== 'x') {
    currentPlayer = 'x'
  } else {
    currentPlayer = 'o'
  }
  console.log(currentPlayer + ' is current player')
  $('#current-player').text(currentPlayer + ' take your turn')
}

const placeMarker = function (currentPlayer, boxId, selectedBox) {
  store.game.cells[boxId] = currentPlayer
  $(selectedBox).text(currentPlayer)
}

const resetBoard = function () {
  currentPlayer = ''
  switchPlayer()
  store.game = {
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false
  }
}

const clearAlert = function () {
  $('#game-message').text('')
}

const isOver = function() {
  return isWinner() || isDraw()
}

module.exports = {
  selectBox,
  resetBoard,
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onStartNewGame,
  onGetAllGames
}
