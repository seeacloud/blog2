const Models = require('./db')
const express = require('express')
const router = express.Router()
// const check = require('./check')
// const checkLogin = check.checkLogin
// const checkNotLogin = check.checkNotLogin

const User = Models.User
const Article = Models.Article

// create user

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
// get user list
router.get('/api/register/getUser', (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// get archive

router.get('/api/register/archive', (req, res) => {
  Article.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// post article
router.post('/api/register/publish', (req, res) => {
  let newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  })
  newArticle.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.redirect('/')
    }
  })
})

// update article

router.post('/api/register/updateArticle', (req, res) => {
  let _article = req.body.article
  Article.find({_id: _article._id}, function (err, docs) {
    if (err) {
      return
    }
    docs[0].title = _article.title
    docs[0].content = _article.content
    Article(docs[0]).save(function (err) {
      if (err) {
        return
      }
      res.send()
    })
  })
})

// sign in

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

router.post('/api/register/deleteArticle', function (req, res) {
  Article.remove(({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).send()
    }
  }))
})

// get article detail

router.get('/api/register/archive/:id', function (req, res) {
  Article.findOne({_id: req.params.id}, function (err, docs) {
    if (err) {

    } else {
      res.send(docs)
    }
  })
})

//
// router.post('/api/admin/deleteArticle', function (req, res) {
//   db.Article.remove({_id: req.body._id}, function (err) {
//     if (err) {
//       res.status(500).send()
//       return
//     }
//     res.send()
//   })
// })

module.exports = router
