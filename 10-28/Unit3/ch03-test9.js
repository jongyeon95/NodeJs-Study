var Users=[{name:'소녀시대',age:20},{name:'걸스데이',age:19}];

var add=function(a,b){return a+b;};
Users.push(add);

console.log('배열의 길이 : %d', Users.length);
console.log('배열의 add 함수 사용 결과 : %d',Users[2](10,10));