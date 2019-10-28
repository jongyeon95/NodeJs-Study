var Users=[{name:'소녀시대',age:20},{name:'걸스데이',age:19}];
Users.push({name:'티아라',age:21});
console.log("배열 요소소의 수 : %d",Users.length);
for(var i=0;i<Users.length;i++){
    console.log('배열요소 #'+i+' : %s',Users[i].name);
}

console.log('Foreach 구문 사용하기');
Users.forEach(function(item,index){console.log('배열요소 #'+index+' : %s',item.name)});