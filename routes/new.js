var express = require("express");

var router = express.Router();


router.get('/',function(req,res){
    res.send("HI nEWIE")
});

module.exports = router;