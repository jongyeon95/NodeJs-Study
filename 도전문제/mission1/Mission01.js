var fs=require('fs');
var readline=require('readline');

function FileReadLine(filename){
    var instream =fs.createReadStream(filename);
    var reader=readline.createInterface(instream,process.stdout);
    
    var count=0;
    
    reader.on('line',function(line){
        console.log('한 줄 읽음 : ' + line);
        
        count += 1;
        
        // 공백으로 구분
        var tokens = line.split(' ');
        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ' -> ' + tokens[0]);
        }
    });
    reader.on('close', function(line) {
        console.log('파일을 모두 읽음.');
    });
    
}
var filename = 'customer.txt';
FileReadLine(filename);