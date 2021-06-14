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
      
        res.render('display',{db_rows_array:db_rows});
      });

});

router.get('/delete/:id',function(req,res,next){

  var deleteid = req.params.id;
  console.log(deleteid);
  db.query("delete from books where bookId = ?",[deleteid],function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.redirect('/display');
  });

});

router.get('/edit/:id',function(req,res,next){

  var editid = req.params.id;
  console.log(editid);
  db.query("select * from books where bookId = ?",[editid],function(err,db_rows){

    if(err) throw err;
 
    res.render('edit',{db_rows_array:db_rows });
  });

});

router.post('/edit/:id',function(req,res,next){

  var editid = req.params.id;
  
  
  var name =  req.body.name;
  var aname =  req.body.authorname;
  var price = req.body.price;


  console.log(editid);
  db.query("update books set Title = ?, author = ?, price = ? where bookId = ?",[name, aname, price, editid],function(err,db_rows){

    if(err) throw err;
    console.log(err);
    res.redirect('/display');
  });

});

module.exports = router;
