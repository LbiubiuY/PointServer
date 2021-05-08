var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let user = req.query;
  let inform = {
    name : "用户名是：" + user.name,
    passwd : "密码是" + user.passwd
  }
  res.send(inform)
});
module.exports = router;