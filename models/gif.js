import mongoose from 'mongoose';

var GifSchema   = new mongoose.Schema({
  type: String,
  meta: {
    name: String,
    url: String,
  },
  userId: String
});

module.exports = mongoose.model('Gif', GifSchema);
