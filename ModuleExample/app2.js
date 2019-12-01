
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');
 



var user = require('./routes/user');
// 익스프레스 객체 생성
var app = express();
var config=require('./config');
console.log('config.server_port : %d',config.server_port);

//포트설정
app.set("port",process.env.PORT || config.server_port);


// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));
 
// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));





//===== 데이터베이스 연결 =====//

// 데이터베이스 객체를 위한 변수 선언
var database = require('./database/database');

// 데이터베이스 스키마 객체를 위한 변수 선언
var UserSchema;

// 데이터베이스 모델 객체를 위한 변수 선언
var UserModel;




// user 스키마 및 모델 객체 생성
function createUserSchema() {
    

	UserSchema=require('./database/user_schema').createSchema(mongoose);
	
	// User 모델 정의
	UserModel = mongoose.model("users3", UserSchema);
    user.init(database,UserSchema,UserModel);
	console.log('users3 정의함.');
	
}



//===== 라우팅 함수 등록 =====//

var route_loader=require('./routes/route_loader');

route_loader.init(app, express.Router());

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
 static: {
   '404': './ModuleExample/public/404.html'
 }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//===== 서버 시작 =====//

// 프로세스 종료 시에 데이터베이스 연결 해제
process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
	console.log("Express 서버 객체가 종료됩니다.");
	if (database) {
		database.close();
	}
});

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));

  // 데이터베이스 연결을 위한 함수 호출
 database.init(app, config);
   
});
