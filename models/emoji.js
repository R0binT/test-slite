import mongoose from 'mongoose';

var EmojiSchema   = new mongoose.Schema({
  type: String,
  meta: {
    key: String,
    emoji: String,
  },
  userId: String,
});

// Export the Mongoose model
module.exports = mongoose.model('Emoji', EmojiSchema);
