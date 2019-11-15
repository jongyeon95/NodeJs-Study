var express=require('express')
    ,http=require('http')
    ,path=require('path');
var bodyParser=require('body-parser')
    ,static=require('serve-static');

var app=express();

app.set('port',process.env.PORT||3000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname,'public')));

app.use(function(req,res,next){
    console.log("첫 번째 미들웨어에서 요청을 처리함.");
    
    var paramID=req.body.id||req.query.id;
    var paramPW=req.body.password||req.query.password;
    
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p> param ID :'+paramID+'</p></div>');
    res.write('<div><p> param password :'+paramPW+'</p></div>');
    res.end();
    
});



http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000포트에서 시작됨');
});
