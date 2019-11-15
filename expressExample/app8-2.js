var express=require('express')
    ,http=require('http')
    ,path=require('path');
var bodyParser=require('body-parser')
    ,static=require('serve-static')



var app=express();

var router=express.Router();

app.set('port',process.env.PORT||3000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname,'public')));

router.route('/process/login/:name').post(function(req,res){
    console.log('/process/login/:name 처리함');
    
    var paramName=req.params.name;
    
    var paramID=req.body.id||req.query.id;
    var paramPW=req.body.password||req.query.password;
    
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
     res.write('<div><p> param Name :'+paramName+'</p></div>');
    res.write('<div><p> param ID :'+paramID+'</p></div>');
    res.write('<div><p> param password :'+paramPW+'</p></div>');
    res.write("<br><br><a href='/login2.html'> 로그인 페이지로 돌아가기 </a>")
    res.end();
    
});
app.use('/',router);

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000포트에서 시작됨');
});
