require('dotenv').config()
const { dbuser, dbpassword } = process.env
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const dbUrl = `mongodb://${dbuser}:${dbpassword}@ds125381.mlab.com:25381/hacktivpress-db`

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const articlesRouter = require('./routes/articles')

const app = express()
app.use(cors())

//mongoose connection
mongoose.connect(dbUrl, err => {
  if(err) {console.log('error connect to database')}

  console.log('success connect to database')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
