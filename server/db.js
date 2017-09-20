const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog2')

const db = mongoose.connection
db.once('error', () => console.log('error'))
// db.once('open', () => console.log('connection success'))

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

// article schema

const articleSchema = mongoose.Schema({
  title: String,
  content: String
})

const Models = {

// article model
  Article: mongoose.model('Article', articleSchema),
  User: mongoose.model('User', userSchema)

}

module.exports = Models
