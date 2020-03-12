// const api = require('./api')
// const ui = require('./ui')
// const app = require('/.app')

// ADD LATER (double-check filepath - this is copied from jquery-ajax-crud training)
// const getFormFields = require('./../../../lib/get-form-fields')

// USER SELECTS & MARKS UP BOARD w/ MARKERS
let currentPlayer = 'X'
// Make a function that selects a box when the user clicks it
const selectBox = function (event) {
  event.preventDefault()
  console.log(event.target.id)
  const selectedBox = event.target
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

const gameboard = [null, null, null, null, null, null, null, null, null]



module.exports = {
  selectBox
}
