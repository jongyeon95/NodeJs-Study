var Person={
  age:20,name:'소녀시대',
      add:function(a,b){return a+b;}
};

console.log('객체 결과값 age : %d  name : %s Func add : %d',Person.age, Person.name, Person.add(10,10));