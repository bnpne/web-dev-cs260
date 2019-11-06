var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/answer', function(req, res) {
  console.log("In answer");
  res.send(answer);
});

module.exports = router;
