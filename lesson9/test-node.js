const  http = require("http");
const  port = 8000;
http.createServer((req, res)=>
{
    res.writeHead(200, {'Content-Type':  'text/plain'});
    res.end('Hellow World\n');
}).listen(port);

console.log('server run at  port  8000');
