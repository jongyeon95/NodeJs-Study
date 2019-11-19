var express=require('express')
    ,http=require('http')
    ,path=require('path');
var bodyParser=require('body-parser')
    ,static=require('serve-static');

var cookieParser=require('cookie-parser');
var expressSession=require('express-session');

var app=express();


var router=express.Router();


app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUnititialized:true
}));

app.set('port',process.env.PORT||3000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname,'public')));

router.route('/process/product').get(function(req,res){
    console.log('/process/product 호출됨 ');
    if(req.session.user){
        res.redirect('/public/product.html');
    }
    else{
        res.redirect('/public/login2.html');
    }
});

router.route('/process/login').post(function(req,res){
    console.log("Called process/login");
    var paramId=req.body.id||req.query.id;
    var paramPassword=req.body.password||req.query.password;
    if(req.session.user){
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');
        res.redirect('/public/product.html');
        
    }
    else{
        req.session.user={
            id:paramId,
            name:"소녀시대",
            authorized: true
        };
        res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p> param ID :'+paramId+'</p></div>');
    res.write('<div><p> param password :'+paramPassword+'</p></div>');
    res.write("<br><br><a href='/process/product'> 상품 페이지로 돌아가기 </a>")
    res.end();
    }
});
router.route('/process/logout').post(function(req,res){
    console.log("Called process/logout");
   
    if(req.session.user){
        console.log('로그아웃 합니다');
        req.session.destroy(function(err){
            if(err)
                throw err;
            console.log("세션을 삭제하고 로그아웃 했습니다.");
            res.redirect('/public/login2.html');
        });
        
        
    }
    else{
        console.log("아직 로그인 되어있지 않습니다.");
        res.redirect('/public/login2.html');
    }
});
router.route('/process/showCookie').get(function(req,res){
    console.log('/process/showCookie 호출됨 ');
    res.send(req.cookies);
});

router.route('/process/setUserCookie').get(function(req,res){
    console.log('/process/showCookie 호출됨 ');
    res.cookie('user',{
        id:"mike",
        name:"소녀시대",
        authorized:true
    });
    res.redirect('/process/showCookie')
});



app.use('/',router);
var expressErrorHandler=require('express-error-handler');

var errorHandler=expressErrorHandler({
    static:{
        '404' : './expressExample/public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

app.all('*',function(req,res){
    res.status(404).send("<h1>ERROR 404 NOT FOUND</h1>");
})

http.createServer(app).listen(4000,function(){
    console.log('Express 서버가 4000포트에서 시작됨');
});
