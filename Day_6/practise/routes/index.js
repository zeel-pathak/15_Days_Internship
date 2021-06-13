var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/submit',function(req,res,next){
    var mo = req.body.txt1;
    var tm = req.body.txt2;


    
    if(mo>35){
        console.log("bfg");
        res.render('output',{greet: 'Congratulations! You have passed the exam', color:"green"});
      }
      else{
        res.render('output', {greet:"Better Luck Next time!", color:"red"});
      }
    
});

module.exports = router;
