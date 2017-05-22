var express = require('express');
var router = express.Router();
//var query = require('./js/db');
var mysql = require('mysql');
var async = require('async');
/* GET home page. */
//商城网站
router.get('/',function(req,res){
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    classinfo:'select * from classinfo',
    spclssinfo:'select * from spclassinfo'
  };
  async.map(sqls, function(item, callback) {
    sql.query(item, function(err, results) {
      callback(err, results);
    });
  }, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      //console.log(results);
      res.render('view/index',{classinfo:results[0],spclassinfo:results[1]});
    }
  });
  sql.end();
});
//查看商品信息
router.get('/spinfo',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//查看购车是否已经添加了本商品
router.post('/shopcheck',function(req,res){
  var id = req.body.id;
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query('select * from shopinfo where sp_id = ?',[id],function(err,data){
    console.log(data);
    res.json(data);
  });
  sql.end();
});
//加入购物车
router.get('/shopcar/:id',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query('insert into shopinfo(sp_id) values(?)',[req.params.id],function(err,data){
    if(data.affectedRows>0){
      res.redirect('/car');
    }
  });
  sql.end();
});
//查看购物车
router.get('/car',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from shopinfo inner join spinfo where shopinfo.sp_id = spinfo.sp_id ",function(err,data){
    console.log(data);
    res.render('view/shopcar',{sp:data});
  });
  sql.end();
});
//按销量进行排序筛选
router.get('/number',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo order by sp_number desc",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//进行模糊查询
router.post('/like',function(req,res){
  var txt =  req.body.txt;
  console.log(txt);
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo where sp_name like ?",['%'+txt+'%'],function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//按上架时间进行排序筛选
router.get('/new',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo order by sp_time desc",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//按商品价格进行排序
router.get('/price',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo order by sp_price desc",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
router.get('/price1',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo order by sp_price asc",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//按评论数量进行排序筛选
router.get('/pl',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from spinfo order by sp_pl desc",function(err,data){
    //console.log(data);
    res.render('view/spinfo',{info:data});
  });
  sql.end();
});
//显示所有店铺的信息
router.get("/storeinfo",function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    info:'select * from spinfo',
    store:'select * from storeinfo'
  };
  async.map(sqls,function(data,callback){
    sql.query(data,function(err,data){
      callback(err,data);
    })
  },function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('view/storeinfo',{info:data[0],store:data[1]})
    }
    sql.end();
  });
});
//自营的店铺信息
router.get('/ziying',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    info:'select * from spinfo',
    store:"select * from storeinfo where store_iszy = '自营'"
  };
  async.map(sqls,function(data,callback){
    sql.query(data,function(err,data){
      callback(err,data);
    })
  },function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('view/storeinfo',{info:data[0],store:data[1]})
    }
    sql.end();
  });
});
//包邮的店铺信息
router.get('/baoyou',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    info:'select * from spinfo',
    store:"select * from storeinfo where store_isby = '包邮'"
  };
  async.map(sqls,function(data,callback){
    sql.query(data,function(err,data){
      callback(err,data);
    })
  },function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('view/storeinfo',{info:data[0],store:data[1]})
    }
    sql.end();
  });
});
//满减的店铺信息
router.get('/manjian',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    info:'select * from spinfo',
    store:"select * from storeinfo where store_ismj = '满减'"
  };
  async.map(sqls,function(data,callback){
    sql.query(data,function(err,data){
      callback(err,data);
    })
  },function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('view/storeinfo',{info:data[0],store:data[1]})
    }
    sql.end();
  });
});
//满赠的店铺信息
router.get('/manzeng',function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  var sqls={
    info:'select * from spinfo',
    store:"select * from storeinfo where store_ismz = '满赠'"
  };
  async.map(sqls,function(data,callback){
    sql.query(data,function(err,data){
      callback(err,data);
    })
  },function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('view/storeinfo',{info:data[0],store:data[1]})
    }
    sql.end();
  });
});
//查询显示所有的用户信息列表
router.get("/useInfo",function(req,res){
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from useinfo",function(err,data){
    console.log(data);
    res.render('admin/index',{info:data});
  });
  sql.end();
});
//注册用户信息
router.get('/register',function(req,res){
  res.render('view/register',{title:'注册页面'});
});
router.get("/registerCheck",function(req,res){
  var use_name =req.query.use_name;
  var use_password =req.query.use_password;
  var use_repassword =req.query.use_repassword;
  //console.log(use_name + use_password);
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("insert into useinfo(use_name,use_password,use_repassword) values(?,?,?)",[use_name,use_password,use_repassword],function(err,data){
    //console.log(data);
    if(data.affectedRows>0){
      res.render('view/login',{title:'注册成功，请您登录'});
    }
  });
  sql.end();
});
router.post("/registerTest",function(req,res){
  var use_name = req.body.use_name;
  //console.log(use_name);
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query("select * from useinfo where use_name=?",[use_name],function(err,data){
    //console.log(data);
    res.json(data);
  });
  sql.end();
});
//登录
router.get('/login',function(req,res){
  res.render('view/login',{title:'登录页面'});
});
//验证用户登录
router.post('/loginCheck',function(req,res){
  var name = req.body.use_name;
  var password = req.body.use_password;
  //console.log(name,password);
  var sql = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:'root',
    password:'123456',
    database:'marketweb'
  });
  sql.connect();
  sql.query('select * from useinfo where use_name = ? and use_password = ?',[name,password],function(err,data){
    console.log(data);
    if(data[0] == null){
      res.render('view/login',{title:'登录失败，请重新登录'});
    }else{
      res.redirect('/');
    }
  });
  sql.end();
});
//查看并显示订单信息
router.get('/orderinfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from orderinfo order by order_id desc limit 0,1',function(err,data){
    console.log(data);
    res.render('view/orderinfo',{info:data[0]});
  });
  sql.end();
});
//提交订单
router.get('/addorder',function(req,res){
  res.render('view/addorder',{title:'请填写订单信息！'})
});
router.post('/addorderCheck', function(req, res, next) {
  var name = req.body.name;
  var phone = req.body.phone;
  var place = req.body.province1+req.body.city1+req.body.district1;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into orderinfo(order_name,order_phone,order_place) ' +
      'values(?,?,?)',[name,phone,place], function (err, data) {
    console.log(data);
    if(data.affectedRows>0){
      res.redirect('/orderinfo');
    }
  });
  sql.end();
});
//修改订单
router.get('/updateorder/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from orderinfo where order_id = ?',[req.params.id], function (err, data) {
    console.log(data);
    res.render('view/updateorder',{info:data[0],title:'请编辑订单信息!!!'});
  });
  sql.end();
});
router.get('/updateorderCheck', function(req, res, next) {
  var id = req.query.id;
  var name = req.query.name;
  var phone = req.query.phone;
  var place = req.query.place;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update orderinfo set order_name=?,order_phone = ?,order_place=?  ' +
      'where order_id = ? ',[name,phone,place,id], function (err, data) {
    console.log(data);
    res.redirect('/orderInfo');
  });
  sql.end();
});
module.exports = router;
