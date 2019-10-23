var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
});

module.exports = router;
