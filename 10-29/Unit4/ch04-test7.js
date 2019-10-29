var fs=require('fs');

fs.writeFile('./output.txt','Hello world',function(err){
    if(err){
        console.log('It has err! Error: %s',err);
    }
   console.log("파일쓰기 완료"); 
});