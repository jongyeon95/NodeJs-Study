var net = require('net');

var hostname = 'localhost';
var port = 3000;

var client= new net.Socket();
client.connect(port,hostname,function(){
    console.log('서버에 연결됨 -> ' + hostname + ':' + port);
	client.write('안녕');
});

client.on('data', function(data) {
	console.log('서버로부터 받은 데이터 -> ' + data);
    
    // 클라이언트 연결 종료
	client.destroy();
});

client.on('close', function() {
	console.log('연결 끊어짐.');
});
