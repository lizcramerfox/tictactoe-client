const api = require('./api')
const ui = require('./ui')

// ADD LATER (double-check filepath - this is copied from jquery-ajax-crud training)
  // const getFormFields = require('./../../../lib/get-form-fields')


// Make a function that toggles the
const makeMove = function (event) {
  event.preventDefault()
  const clickedBox = event.target
  console.log(clickedBox)
}
// Make an event handler to select a specific g


// We are exporting (outputing) an object with our event handlers inside of it
module.exports = {
  makeMove
}
