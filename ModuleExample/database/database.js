var mongoose=require('mongoose');
var database={};
database.init=function(app,config){
    console.log('init() 호출');
    connect(app,config);
}

function connect(app,config){
    console.log('connect 호출됨');
   // 데이터베이스 연결
    console.log('데이터베이스 연결을 시도합니다.');
    mongoose.Promise = global.Promise;  // mongoose의 Promise 객체는 global의 Promise 객체 사용하도록 함
	mongoose.connect(config.db_url);
	database.db=mongoose.connection;

	database.db.on('error', console.error.bind(console, 'mongoose connection error.'));	
	database.db.on('open', function () {
		console.log('데이터베이스에 연결되었습니다. : ' + config.db_url);
		// user 스키마 및 모델 객체 생성
		createSchema(app,config);
		
	});
	
    // 연결 끊어졌을 때 5초 후 재연결
	database.db.on('disconnected', connect);
    
}

function createSchema(app,config){
    var schemaLen=config.db_schemas.length;
    console.log("설정에 정의된 스키마의 수 : %d",schemaLen);
    for(var i=0; i<schemaLen; i++){
        var curItem=config.db_schemas[i];
        
        //모듈 파일에서 불러 함수호출
        var curSchema=require(curItem.file).createSchema(mongoose);
        console.log('%s 모듈을 불러들인 후 스키마 정의함',curItem.file);
        
        //User 모델정의
        var curModel=mongoose.model(curItem.collection, curSchema);
        console.log('%s 컬렉션을 위한 모듈 정의',curItem.collection);
        		database[curItem.schemaName] = curSchema;
		database[curItem.modelName] = curModel;
		console.log('스키마 이름 [%s], 모델 이름 [%s] 이 database 객체의 속성으로 추가됨.', curItem.schemaName, curItem.modelName);
    }
    
    app.set('database',database);
    console.log('database 객체가 App 객체의 속성으로 추가됨');
}

module.exports=database;