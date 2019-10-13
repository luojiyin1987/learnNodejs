const express = require('express');
const wiki =  require('./route/wiki');
const app  = express();

app.use('/wiki', wiki);

app.get('/', (req, res) =>
{
   res.send('Hello World');
   setTimeout(() =>
   {
       console.log('first');
   }, 3000);

   console.log("second");
});

app.listen(3000, ()=>
{
    console.log('app run at port 3000');
});
