// const api = require('./api')
// const ui = require('./ui')
// const app = require('/.app')

// ADD LATER (double-check filepath - this is copied from jquery-ajax-crud training)
// const getFormFields = require('./../../../lib/get-form-fields')

let gameboard
let currentPlayer

// Make a function that selects a box when the user clicks it
const selectBox = function(event) {
  // check if the board has a winner
  if (isWinner()) {
    return
  }
  // let player make a move
  const selectedBox = event.target
  const boxId = event.target.id
  if (gameboard[boxId] !== null) {
    console.log('box has already been taken')
    return
  }
  placeMarker(currentPlayer, boxId, selectedBox)

  if (isWinner()) {
    console.log(currentPlayer + ' wins')
  } else if (isDraw()) {
    console.log('game over - draw')
  } else {
    switchPlayer()
  }
}

const resetBoard = function() {
  gameboard = [null, null, null, null, null, null, null, null, null]
  currentPlayer = ''
  switchPlayer()
}


// CHECK FOR WINNER:
// Pass the array through a function to check if:
const isWinner = function() {
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

const isDraw = function() {
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

const switchPlayer = function() {
  if (currentPlayer !== 'X') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  console.log(currentPlayer + ' is current player')
  $('#current-player').text(currentPlayer + ' take your turn')
}

const placeMarker = function(currentPlayer, boxId, selectedBox) {
  gameboard[boxId] = currentPlayer
  $(selectedBox).text(currentPlayer)
}

module.exports = {
  selectBox,
  resetBoard
}
