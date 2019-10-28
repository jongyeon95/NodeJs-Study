var Person={};
Person['age']=20;
Person['name']='소녀시대';
Person.mobile='010-0000-9999'

console.log("age = : %d", Person.age);
console.log("name = : %s", Person.name);
console.log("mobile = : %s", Person['mobile']);
console.log("mobile = : %s", Person.mobile);