const express = require('express');
const wiki =  require('./route/wiki');
const app  = express();

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


app.listen(3000, ()=>
{
    console.log('app run at port 3000');
});
