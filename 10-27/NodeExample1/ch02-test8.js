var path=require('path');

var diretories=['user','mike','docs'];
var docsDirectory=diretories.join(path.sep);
console.log('문서 디렉터리 : %s ',docsDirectory);

var curPath=path.join('/Users/mike','notepad.exe');
console.log('파일 패스 : %s',curPath);

var filename="C://Users//mike//notepad.exe";
var dirname=path.dirname(filename);
var basename=path.basename(filename);
var extname=path.extname(filename);

console.log('디렉터리 : %s  파일 이름 : %s 확장자 : %s',dirname,basename,extname);