var fs=require('fs');

var inname='./output.txt';
var outname='./output2.txt';

fs.exists(outname,function(exists){
    if(exists){
        fs.unlink(outname,function(err){
            if(err) throw err;
            console.log('기존 파일 ['+outname+'] 삭제함');
        });
    }
    
var infile=fs.createReadStream('./output.txt',{flags: 'r'});
var outfile=fs.createWriteStream('./output2.txt',{flags: 'w'});
var outfile2=fs.createWriteStream('./output3.txt',{flags: 'w'});
infile.pipe(outfile);
infile.pipe(outfile2);
    console.log('파일 복사 ['+inname+']->['+outname+']');
});