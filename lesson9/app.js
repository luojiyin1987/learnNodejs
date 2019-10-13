const express = require('express');
const wiki =  require('./route/wiki');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.json());


app.use('/wiki', wiki);

app.use(express.static('public'));

app.get('/download', (req, res) =>
{
   res.json({result: 0});
});

app.get('/', (req, res)=>
{
    res.sendfile('index.html');
});

app.post('/download', (req, res)=>
{
   console.log("download", req.body);
   res.json({result:0, download:"ok"});
});

app.listen(3000, ()=>
{
    console.log('app run at port 3000');
});
