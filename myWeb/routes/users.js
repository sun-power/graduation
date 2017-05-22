var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET users listing. */
//用户信息管理
router.get('/useInfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from useinfo',function(err,data){
    //console.log(data);
    res.render('admin/index',{useinfo:data});
  });
  sql.end();
});
//增加用户信息
router.get('/adduse',function(req,res){
  res.render('admin/adduse',{title:'请注册用户信息!!!'});
});
router.get('/adduseCheck', function(req, res, next) {
  var use_name = req.query.name;
  var use_password = req.query.password;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into useinfo(use_name,use_password) values(?,?)',[use_name,use_password], function (err, data) {
    //console.log(data);
    res.redirect('/users/useInfo');
  });
  sql.end();
});
//修改用户信息
router.get('/updateuse/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from useinfo where use_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.render('admin/updateuse',{useinfo:data[0],title:'请修改用户信息!!!'});
  });
  sql.end();
});
router.get('/updateuseCheck', function(req, res, next) {
  var use_id = req.query.id;
  var use_name = req.query.name;
  var use_password = req.query.password;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update useinfo set(use_name=?,use_password=?) where use_id = ? ',[use_name,use_password,use_id], function (err, data) {
    //console.log(data);
    res.redirect('/users/useInfo');

  });
  sql.end();
});
//删除用户信息
router.get('/deleteuse/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from useinfo where use_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/useInfo');
  });
  sql.end();
});
//商品版块信息管理
router.get('/classInfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from classinfo limit 0,6',function(err,data){
    //console.log(data);
    res.render('admin/classinfo',{classinfo:data});
  });
  sql.end();
});
router.post('/classInfo1', function(req, res, next) {
  var num = req.body.num;
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from classinfo limit ?,6',[(num-1)*6],function(err,data){
    //console.log(data);
    res.json(data);
  });
  sql.end();
});
//增加商品版块信息
router.get('/addclass',function(req,res){
  res.render('admin/addclass',{title:'请增加商品版块信息!!!'});
});
router.get('/addclassCheck', function(req, res, next) {
  var class_name = req.query.name;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into classinfo(class_name) values(?)',[class_name], function (err, data) {
    //console.log(data);
    res.redirect('/users/classinfo');
  });
  sql.end();
});
//编辑商品版块信息
router.get('/updateclass/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from classinfo where class_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.render('admin/updateclass',{classinfo:data[0],title:'请编辑商品版块信息!!!'});
  });
  sql.end();
});
router.get('/updateclassCheck', function(req, res, next) {
  var class_id = req.query.id;
  var class_name = req.query.name;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update classinfo set class_name=? where class_id = ? ',[class_name,class_id], function (err, data) {
    console.log(data);
    res.redirect('/users/classInfo');

  });
  sql.end();
});
//删除商品版块信息
router.get('/deleteclass/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from classinfo where class_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/classInfo');
  });
  sql.end();
});
//商品分类信息管理
router.get('/spclassInfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from spclassinfo',function(err,data){
    //console.log(data);
    res.render('admin/spclassinfo',{classinfo:data});
  });
  sql.end();
});
//增加商品分类信息
router.get('/addspclass',function(req,res){
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from classinfo',function(err,data){
    console.log(data);
    res.render('admin/addspclass',{classinfo:data,title:'请增加商品分类信息!!!'});
  });
  sql.end();
});
router.get('/addspclassCheck', function(req, res, next) {
  var name = req.query.name;
  var id = req.query.id;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into spclassinfo(spclass_name,class_id) values(?,?)',[name,id], function (err, data) {
    console.log(data);
    res.redirect('/users/spclassinfo');
  });
  sql.end();
});
//编辑商品分类信息
router.get('/updatespclass/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from spclassinfo where spclass_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.render('admin/updatespclass',{classinfo:data[0],title:'请编辑商品分类信息!!!'});
  });
  sql.end();
});
router.get('/updatespclassCheck', function(req, res, next) {
  var id = req.query.id;
  var name = req.query.name;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update spclassinfo set spclass_name=? where spclass_id = ? ',[name,id], function (err, data) {
    console.log(data);
    res.redirect('/users/spclassInfo');

  });
  sql.end();
});
//删除商品分类信息
router.get('/deletespclass/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from spclassinfo where spclass_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/spclassInfo');
  });
  sql.end();
});
//商品信息管理
router.get('/spInfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from spinfo limit 0,3',function(err,data){
    //console.log(data);
    res.render('admin/spinfo',{info:data});
  });
  sql.end();
});
router.post('/spInfo1', function(req, res, next) {
  var num = req.body.num;
  console.log(num);
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from spinfo limit ?,3',[(num-1)*3],function(err,data){
    //console.log(data);
    res.json(data);
  });
  sql.end();
});
//增加商品信息
router.get('/addsp',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from storeinfo',function (err, data) {
    //console.log(data);
    res.render('admin/addsp',{title:'请增加商品信息!!!',info:data});
  });
  sql.end();

});
router.post('/addspCheck', function(req, res, next) {
  var store_name = req.body.store_name;
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var number = req.body.number;
  var pl = req.body.pl;
  var dz = req.body.dz;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into spinfo(store_name,sp_name,sp_price,sp_image,sp_number,sp_pl,sp_dz) values(?,?,?,?,?,?,?)',[store_name,name,price,image,number,pl,dz], function (err, data) {
    console.log(data);
    res.redirect('/users/spinfo');
  });
  sql.end();
});
//编辑商品信息
router.get('/updatesp/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from spinfo where sp_id = ?',[req.params.id], function (err, data) {
    console.log(data);
    res.render('admin/updatesp',{info:data[0],title:'请编辑商品信息!!!'});
  });
  sql.end();
});
router.get('/updatespCheck', function(req, res, next) {
  var id = req.query.id;
  var name = req.query.name;
  var price = req.query.price;
  var image = req.query.image;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update spinfo set sp_name=?,sp_price =?,sp_image = ?  where sp_id = ? ',[name,price,image,id], function (err, data) {
    console.log(data);
    res.redirect('/users/spInfo');
  });
  sql.end();
});
//删除商品信息
router.get('/deletesp/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from spinfo where sp_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/spInfo');
  });
  sql.end();
});



//订单信息管理
router.get('/orderinfo', function(req, res, next) {
  var sql = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'marketWeb'
  });
  sql.connect();
  sql.query('select * from orderinfo',function(err,data){
    console.log(data);
    res.render('admin/orderinfo',{info:data});
  });
  sql.end();
});
//增加订单信息
router.get('/addorder',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from spinfo',function (err, data) {
    //console.log(data);
    res.render('admin/addorder',{title:'请增加订单信息!!!',info:data});
  });
  sql.end();

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
    res.redirect('/users/orderinfo');
  });
  sql.end();
});
//编辑订单信息
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
    res.render('admin/updateorder',{info:data[0],title:'请编辑订单信息!!!'});
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
    res.redirect('/users/orderInfo');
  });
  sql.end();
});
//删除订单信息
router.get('/deleteorder/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from orderinfo where order_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/orderinfo');
  });
  sql.end();
});














//显示店铺的信息
router.get('/storeinfo',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from storeinfo',function (err, data) {
    //console.log(data);
    res.render('admin/storeinfo',{info:data});
  });
  sql.end();
});
//增加店铺信息
router.get('/addstore',function(req,res){
    res.render('admin/addstore',{title:'请增加店铺信息!!!'});
});
router.post('/addstoreCheck', function(req, res, next) {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var number = req.body.number;
  var pl = req.body.pl;
  var dz = req.body.dz;
  console.log(name,price,image,number,pl,dz);
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('insert into storeinfo(store_name,store_spnum,store_iszy,store_isby,store_ismj,store_ismz) values(?,?,?,?,?,?)',[name,price,image,pl,number,dz], function (err, data) {
    console.log(data);
    res.redirect('/users/storeinfo');
  });
  sql.end();
});
//编辑店铺信息
router.get('/updatestore/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('select * from storeinfo where store_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.render('admin/updatestore',{info:data[0],title:'请编辑店铺信息!!!'});
  });
  sql.end();
});
router.get('/updatestoreCheck', function(req, res, next) {
  var id = req.query.id;
  var name = req.query.name;
  var price = req.query.price;
  var image = req.query.image;
  var number = req.query.number;
  var pl = req.query.pl;
  var dz = req.query.dz;
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('update storeinfo set store_name=?,store_spnum =?,store_iszy = ?,store_isby=?,store_ismj=?,store_ismz=? ' +
      ' where store_id = ? ',[name,price,image,pl,number,dz,id], function (err, data) {
    console.log(data);
    res.redirect('/users/storeinfo');

  });
  sql.end();
});
//删除店铺信息
router.get('/deletestore/:id',function(req,res){
  var sql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'marketWeb'
  });
  sql.connect();
  sql.query('delete from storeinfo where store_id = ?',[req.params.id], function (err, data) {
    //console.log(data);
    res.redirect('/users/storeinfo');
  });
  sql.end();
});
module.exports = router;
