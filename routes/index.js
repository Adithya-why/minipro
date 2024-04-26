var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hellloooooooo', mes: messages });
});


router.post('/',function(req,res){
  messages.push({text: req.body.usermessage, user: req.body.username, added: new Date()})
  res.redirect('/');
});

module.exports = router;

