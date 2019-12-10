const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const tweetSchema = new mongoose.Schema({
    username: String,
    tweet: String,
});
  
const Tweet = mongoose.model('Tweet', tweetSchema);

router.get('/', async (req, res) => {
    try {
        let tweets = await Tweet.find();
        return res.send(tweets);
    }catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    const tweet = new Tweet({
        username: req.body.name,
        tweet: req.body.tweet,
    });
    try {
      await tweet.save();
      return res.send(tweet);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Tweet.deleteOne({
        _id: req.params.id
        });
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = router;