const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog2')

const db = mongoose.connection
db.once('error', () => console.log('error'))
// db.once('open', () => console.log('connection success'))

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User

