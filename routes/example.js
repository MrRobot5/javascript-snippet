var express = require('express');
var router = express.Router();

/* GET example form. */
router.get('/submit', function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  res.send('respond with a resource');
});

/* json example. */
router.get('/subject_ajax', function(req, res, next) {
  console.log(req.query.subject_id);
  // 返回 json 数据
  res.send({
    "notes": [
      "Note 1",
      "Note 2"
    ],
    "chapters": [
      {
        "title": "First chapter",
        "summary": "Some content"
      },
      {
        "title": "Second chapter",
        "summary": "More content"
      }
    ]
  });
});

module.exports = router;
