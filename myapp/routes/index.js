var express = require('express');
const {Sequelize} = require("sequelize");
var router = express.Router();

/* Create database link */
const sequelize = new Sequelize('mysql://root:@127.0.0.1:3306/bilemo_node?serverVersion=5.7');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(sequelize);
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});

router.route('/book')
    .get(function(req, res) {
      res.send('Get a random book');
    })
    .post(function(req, res) {
      res.send('Add a book');
    })
    .put(function(req, res) {
      res.send('Update the book');
    });

module.exports = router;
