var Person ={};
Person['age']=20;
Person['name']='소녀시대';
Person.add=function(a,b){return a+b;};

console.log('function add(10,10) result : %d', Person.add(10,10));