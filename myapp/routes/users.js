var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/users', function (req, res) {
  res.send('Got a PUT request at /user');
});

router.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;