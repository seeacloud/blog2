const User = require('./db')
const express = require('express')
const router = express.Router()
const check = require('./check')
const checkLogin = check.checkLogin
const checkNotLogin = check.checkNotLogin

router.post('/api/register/createUser', (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  })
  newUser.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('register success')
    }
  })
})

router.get('/api/register/getUser', (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

//sign in

router.post('/api/register/signin', function (req, res) {
  // req.session.user = req.body.userInfo
  res.send()
})

// get user by username
router.get('/api/register/getUser/:username', function (req, res) {
  User.findOne({username: req.params.username}, function (err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

router.post('/api/register/removeUser', (req, res) => {
  User.remove(req.body, function (err, result) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
    }
  })
})

module.exports = router


