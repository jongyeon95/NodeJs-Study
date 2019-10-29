process.on('tick',function(count){
    console.log('tick 함수 실행됨 : %s',count);
});

setTimeout(function(){
   console.log('2초 후에 tick 이벤트 전달 시도'); 
    process.emit('tick','2');

},2000);