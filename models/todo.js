const mongoose = ('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,
    requires: true
  },
  done: {
    type: Boolean
  }
})
module.exports = mongoose.model('Todo', todoSchema)