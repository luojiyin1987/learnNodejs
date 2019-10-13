const express = require('express');
const wiki =  require('./route/wiki');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

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
   console.log("download", req.body.downloadURL);
   const {downloadURL} = req.body;

   if(isEmpty(downloadURL) || isBlank(downloadURL))
   {
       res.json({result:1 , err: "no url"});
       return;
   }
   res.json({result:0, download:"ok"});
   exec(`youtube-dl ${downloadURL}`,
       (err, rtn) =>
       {
           console.log("youtube-dl", err, rtn);
       });



});

app.listen(3000, ()=>
{
    console.log('app run at port 3000');
});

function   isEmpty(str)
{
    return (!str || 0 === str.length);
}

function isBlank(str)
{
    return (!str || /^\s*$/.test(str));
}
