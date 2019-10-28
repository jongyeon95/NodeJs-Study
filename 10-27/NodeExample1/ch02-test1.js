var result=0;

console.time('duration_sum');

for(var i=1; i<=1000;i++){
    result +=i;
}

console.timeEnd('duration_sum');
console.log('결과 값 : %d',result);
console.log('현재 실행한 파일의 이름 : %s',__filename);
console.log('현재 실행한 파일의 패스 : %s',__dirname);

var Person={name:"김말똥",age:"24"};
console.dir(Person);