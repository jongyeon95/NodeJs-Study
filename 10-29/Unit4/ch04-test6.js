var fs=require('fs');

fs.readFile('./NodeExample1/package.json','utf8',function(err,data){
    console.log(data);
})

console.log('프로젝트 폴더 안의 package.json 파일을 읽어오도록 하겠습니다');