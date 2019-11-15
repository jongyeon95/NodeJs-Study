var http=require('http');
var options ={
    host:'www.google.com',
    port :80,
    path : '/',
    method:'POST',
    headers:{}
};

var resData='';
var req=http.request(options,function(res){
    
    res.on('data',function(chunk){
        resData+=chunk;
    });
    
    res.on('end',function(){
        console.log(resData);
    });
    
    options.headers['Content-Tpye']='application/x-www-form-urlendcoded';
    req.data='q=actor';
    options.headers['Content-Length']=req.data.length;
    
    req.on(err,function(err){
        console.log("오류 발생 : "+err.message);
    });
    
    req.write(req.data);
    req.end();
    
})