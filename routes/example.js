var express = require('express');
var router = express.Router();

/* GET example form. */
router.get('/submit', function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  res.send('respond with a resource');
});

module.exports = router;
