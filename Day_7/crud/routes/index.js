var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add-process', function(req, res, next) {
  console.log(req.body);

  const mybodydata = {
    bookId: req.body.BookId,
    Title: req.body.name,
    author: req.body.authorname,
    price: req.body.price
  }


  db.query("insert into books set ?",mybodydata,function(err,result){
    if(err) console.log(err);
    res.redirect('/add');
  })

});

router.get('/display',function(req,res,next){

      db.query("select * from books ",function(err,db_rows){

        if(err) throw err;
        console.log(db_rows);
        res.render('display',{db_rows_array:db_rows});
      });

});

module.exports = router;
