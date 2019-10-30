var Calc=require('./calc3');

var calc=new Calc();
calc.emit('stop');

console.log(Calc.title+'에 stop 이벤트 전달함');

calc.emit('test');
console.log(Calc.title+'에 test 이벤트 전달함');