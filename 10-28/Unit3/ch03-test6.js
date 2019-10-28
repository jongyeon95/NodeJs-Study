var Person ={};
Person['age']=20;
Person['name']='소녀시대';
var oper=function(a,b){return a+b;};

Person.add=oper;

console.log('function add(10,10) result : %d', Person.add(10,10));