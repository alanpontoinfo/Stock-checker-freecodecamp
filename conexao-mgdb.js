const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
console.log('Connected to Distribution API Database - Initial Connection')
module.exports = db
