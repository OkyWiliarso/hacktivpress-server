const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  authorName: {
    type: String
  }
},{
  timestamps: true
})

module.exports = mongoose.model('article', ArticleSchema)