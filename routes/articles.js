const express = require('express')
const router = express.Router()
const {
  addArticle,
  getArticles,
  getById,
  getByCategory,
  getByAuthor,
  editArticle,
  deleteArticle
} = require('../controllers/article.controller')
const {
  loginCheck
} = require('../middlewares/auth')
const {
  multer,
  sendUploadToGCS
} = require('../helpers/image')


router
  .post('/add', loginCheck, multer.single('image'), sendUploadToGCS, addArticle)
  .get('/list', getArticles)
  .get('/:id', loginCheck, getById)
  .get('/category/:category', getByCategory)
  .get('/author/:author', getByAuthor)
  .put('/edit/:id', loginCheck, editArticle)
  .delete('/delete/:id', loginCheck, deleteArticle)

module.exports = router
