process.on('exit',function(){
    console.log('exit 함수 실행됨');
});

setTimeout(function(){
   console.log('2초 후에 시스템 종료 시도'); 
    process.exit();

},2000);