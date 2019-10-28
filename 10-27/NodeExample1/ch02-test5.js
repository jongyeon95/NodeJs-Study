var calc=require('./calc');
var calc2=require('./calc2');
console.log('모듈 분리 후 calc.add 함수 호출 결과: %d', calc.add(10,10));
console.log('모듈 분리 후(module.exports) calc2.add 함수 호출결과 : %d', calc2.add(10,10));
