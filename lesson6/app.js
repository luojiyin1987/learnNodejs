const express = require('express');

var app = express();

const info = [
    {
      "title": "【公告】发招聘帖的同学留意一下这里",
      "href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12"
    },
    {
      "title": "发布一款 Sublime Text 下的 JavaScript 语法高亮插件",
      "href": "http://cnodejs.org/topic/54207e2efffeb6de3d61f68f"
    }
  ]

app.get('/', function(req, res)
{
    res.send(info);
})

app.listen(3000, function()
{
    console.log("app is running listening at port 3000");
})