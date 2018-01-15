var express = require('express');
var bodyparser = require('body-parser');
var queryApi = require('./queryApi');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var app = express();

app.use(bodyparser.json());

//用户注册
let regist = '/admin/registerUser';
// 用户登陆
let login = '/admin/loginUser';

//商品数据
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
})

app.post('/mall/index/getGoodsChannel',function(req,res){
    res.status(200);
    queryApi('/mall/index/getGoodsChannel',req.body,"POST").then(data=>{
        res.end(data)
    })
})
//分类页面数据
app.post('/mall/category/topCategory',function(req,res){
    res.status(200);
    queryApi('/mall/category/topCategory',"POST").then(data=>{
      res.end(data)
    })
})
//分类页面右边数据
app.post('/mobile/Category/categorySon',(req, res) => {
    // console.log(req.body)
    let index = req.body.sonid
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    var classify_list = JSON.parse(fs.readFileSync('./data_table/classify_list.json','utf-8'));
     res.end(JSON.stringify(classify_list.classify[index]))
})
//城市渲染
app.post('/admin/location/root',function(req,res){
    var addr = require('./data_table/addr.json');
    res.end(JSON.stringify(addr))
})

app.post(regist,function(req,res){
    
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});

    var admin_list = fs.readFileSync('./data_table/admin_list.json',{encoding:'utf-8'})
    
    admin_list = JSON.parse(admin_list);
    
    admin_list.list.push(req.body);

     rendoms = '';

    for(var i=0; i<4; i++){
        var num=Math.floor(Math.random()*9);
        rendoms+=num;
    }
     
    fs.writeFileSync('./data_table/admin_list.json',JSON.stringify(admin_list))
    var obj = {
        "code": 1,
        "rendoms":rendoms,
        "msg": "SUCCESS"
    }
    res.end(JSON.stringify(obj))
})
app.post(login,function(req,res){
   res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    var admin_list = JSON.parse(fs.readFileSync('./data_table/admin_list.json','utf-8'));
    var token,response,flag=false;
    admin_list.list.forEach((item)=>{
        if(item.user_tel==req.body.user_tel){
            flag=true
            if(item.user_password==req.body.user_password){
                token = jwt.sign(req.body,'1508B',{expiresIn:60*30})
                response = {
                    "code": 1,
                    "token":token,
                    "msg": "SUCCESS"
                }
            }else{
                response = {
                    "code": 2,
                    "error":"error",
                    "msg": "密码错误"
                }
            }
        }
    })
    if(!flag){
        response = {
            "code": 3,
            "error":"error",
            "msg": "此用户不存在"
        }
    }
     
    res.end(JSON.stringify(response))
});
app.listen(3000,function(){
    console.log('server listen 3000')
})