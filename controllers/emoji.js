import nodeEmoji from 'node-emoji';
import Emoji from '../models/emoji';

exports.getEmoji = (req, res) => {
  if (!req.params.emojiQuery) {
    res.status(400).send('query empty')
  } else {
    let ret = nodeEmoji.search(req.params.emojiQuery);
    if (ret) {
      res.status(200).json(ret);
    } else {
      res.status(204).send();
    }
  }
};


exports.favoriteEmoji = (req, res) => {
    var emoji = new Emoji();

    emoji.type = req.body.type;
    emoji.meta = req.body.meta;
    emoji.userId = req.user._id;

    emoji.save((err) => {
      if (err) return res.send(err);

      res.json({ message: 'Emoji saved', data: emoji });
    });
};
