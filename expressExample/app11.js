var express=require('express')
    ,http=require('http')
    ,path=require('path');
var bodyParser=require('body-parser')
    ,static=require('serve-static');

var cookieParser=require('cookie-parser');

var app=express();


var router=express.Router();

app.use(cookieParser());

app.set('port',process.env.PORT||3000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname,'public')));


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
