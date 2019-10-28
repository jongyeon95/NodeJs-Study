var Users=[{name:'소녀시대',age:20},{name:'걸스데이',age:19}];
console.log('unshift() 사용 전 배열의 요소 수 : %d',Users.length);

Users.unshift({name:'걸스데이',age:23});
console.log('unshift() 사용 후 배열의 요소 수 : %d',Users.length);

Users.shift();
console.log('shift() 사용 후 배열의 요소 수 : %d',Users.length);
