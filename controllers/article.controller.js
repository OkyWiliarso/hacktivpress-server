const Article = require('../models/article.model')

module.exports = {
  addArticle: (req, res) => {
    let article = new Article({
      title: req.body.title,
      content: req.body.content,
      image: req.file.cloudStoragePublicUrl,
      category: req.body.category,
      author: req.user.id,
      authorName: req.user.name
    })
    article.save()
    .then(response => {
      res.status(200).json({
        message: 'article created',
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'create article failed',
        err
      })
    })
  },
  getArticles: (req, res) => {
    Article.find()
    .then(response => {
      res.status(200).json({
        message: 'get article success',
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'cannot get article',
        err
      })
    })
  },
  getById: (req, res) => {
    Article.findById(req.params.id)
    .populate('author')
    .then(response => {
      res.status(200).json({
        message: 'get article success',
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'cannot get article',
        err
      })
    })
  },
  getByCategory: (req, res) => {
    Article.find({
      category: req.params.category
    })
    .then(response => {
      res.status(200).json({
        message: 'get article success',
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'cannot get article',
        err
      })
    })
  },
  getByAuthor: (req, res) => {
    Article.find({
      authorName: req.params.author
    })
    .then(response => {
      res.status(200).json({
        message: 'get article success',
        response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'cannot get article',
        err
      })
    })
  },
  editArticle: (req, res) => {
    Article.findOneAndUpdate({
      _id: req.params.id
    }, {
      title: req.body.title,
      content: req.body.content,
      image: req.file.cloudStoragePublicUrl,
      category: req.body.category,
      author: req.user.id,
      authorName: req.user.name
    }, (err, response)=>{
      if(err){
        res.status(400).json({
          message: 'edit article failed',
          err
        })
      } else {
        res.status(200).json({
          message: 'edit article success',
          response
        })
      }
    })
  },
  deleteArticle: (req, res) => {
    Article.findById(req.params.id)
    .populate('author')
    .then(response => {
      if(response.author._id == req.user.id) {
        Article.deleteOne({
          _id: req.params.id
        })
        .then(response => {
          res.status(200).json({
            message: 'delete article success'
          })
        })
        .catch(err => {
          res.status(400).json({
            message: 'delete article failed'
          })
        })
      } else {
        res.status(400).json({
          message: 'not authorized',
          err
        })  
      } 
    })
    .catch(err => {
      res.status(400).json({
        message: 'delete article failed',
        err
      })
    })

    // Article.deleteOne({
    //   _id: req.params.id
    // })
    // .then(response => {
    //   res.status(200).json({
    //     message: 'delete article success'
    //   })
    // })
    // .catch(err => {
    //   res.status(400).json({
    //     message: 'delete article failed'
    //   })
    // })
  }
}