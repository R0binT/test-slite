import giphyApi from 'giphy-api';
import Gif from '../models/gif';


let giphy = giphyApi();

exports.getGifs = (req, res) => {
  if (!req.params.gifQuery) {
    res.status(400).send('query empty')
  } else {
    giphy.search({
      q: req.params.gifQuery,
      limit: 20
    })
    .then((emojis) => {
      res.json(emojis);
    })
    .catch((err) => {
      res.status(401).send(err)
    })
  }
};

exports.favoriteGif = (req, res) => {
  var gif = new Gif();

  gif.type = req.body.type;
  gif.meta = req.body.meta;
  gif.userId = req.user._id;

  gif.save((err) => {
    if (err) return res.send(err);

    res.json({ message: 'Emoji saved', data: gif });
  });
}
