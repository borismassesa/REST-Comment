const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const { read } = require('fs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
  {
    username: 'Todd',
    comment: 'Lol that is so funny'
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog'
  },
  {
    username: 'sk8erBoi',
    comment: 'Plz delete your account, Todd'
  },
  {
    username: 'onlysaywoof',
    comment: 'woof woof wooof'
  }
]

app.get('/comments' , (req,res) => {
  res.render('comments/index', {comments})

})

app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

app.post('/comments', (req, res) => {
  // console.log(req.body)
  const {username, comment } = req.body;
  comments.push({username, comment})
  // res.send("IT WORKED!")
  res.redirect('/comments')
})


app.get('/tacos', (req,res) => {
  res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
  const { meat, qty} = req.body;
  res.send('OK, here are your ${qty} ${meat} tacos' )
})

app.listen(3000, () => {
  console.log("ON PORT 3000!")
})