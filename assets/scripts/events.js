// const api = require('./api')
// const ui = require('./ui')
// const app = require('/.app')

// ADD LATER (double-check filepath - this is copied from jquery-ajax-crud training)
// const getFormFields = require('./../../../lib/get-form-fields')

const gameboard = [null, null, null, null, null, null, null, null, null]

// USER SELECTS & MARKS UP BOARD w/ MARKERS
let currentPlayer = 'X'
// Make a function that selects a box when the user clicks it
const selectBox = function (event) {
  const selectedBox = event.target
  const boxId = event.target.id
  if (gameboard[boxId] === null) {
    gameboard[boxId] = currentPlayer
  }
  const selectedBoxText = $(selectedBox).text() // '' , 'X', 'O'
  // if space is empty then add play
  if (selectedBoxText === '') {
    // add current player's marker to board
    $(selectedBox).text(currentPlayer)
    // change turn
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    // else invalid move
  } else {
    console.log('box has already been taken')
  }
}
// CHECK FOR WINNER:
// Pass the array through a function to check if:
const checkForWinner = function () {
  // if ANY of the following are true:
  if (
    ((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2])) || // 0=1=2 OR
    ((gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5])) || // 3=4=5
    ((gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8])) || // 6=7=8
    ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6])) || // 0=3=6
    ((gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7])) || // 1=4=7
    ((gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8])) || // 2=5=8
    ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8])) || // 0=4=8
    ((gameboard[6] === gameboard[4] && gameboard[4] === gameboard[2]))) { // 6=4=2
    console.log('winner!')
  } else {
    console.log('game in progress - make a move')
  }
}

module.exports = {
  selectBox,
  checkForWinner
}
