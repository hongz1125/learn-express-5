var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2' });
});

router.get('/haha', (req, res) => {
  res.send('Hello World! haha')
})
module.exports = router;
