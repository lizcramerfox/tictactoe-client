const api = require('./api')
const ui = require('./ui')

// ADD LATER (double-check filepath - this is copied from jquery-ajax-crud training)
// const getFormFields = require('./../../../lib/get-form-fields')
const boardItems = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// Make a function that selects a box when the user clicks it
const makeMove = function (event) {
  event.preventDefault()
  const selectedBox = event.target
  console.log(selectedBox)
  if (selectedBox !== undefined) {
    console.log('box is available')
    $(selectedBox).text('x')
  }
}

// We are exporting (outputing) an object with our event handlers inside of it
module.exports = {
  makeMove
}
