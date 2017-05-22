var mysql = require('mysql');
var db = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456',
    database:'marketWeb'
});
var  query= function(sql,callback){
    db.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                conn.release(); //释放连接
                callback(qerr,vals,fields);//事件驱动回调
            })
        }
    })
};
module.exports = query;