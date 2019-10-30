var fs=require('fs');

var infile=fs.createReadStream('./output.txt',{flags: 'r'});
var outfile=fs.createWriteStream('./output2.txt',{flags: 'w'});

infile.on('data',function(data){
    console.log('읽어 드린 데이터 : %s',data);
    outfile.write(data);
});

infile.on('end',function(){
    console.log('파일 읽기 종료');
    outfile.end(function(){
        console.log('파일 쓰기 종료');
    });
});