var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');

var url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';

http.get(url, function(sres) {
    var chunks = [];
    sres.on('data', function(chunk) {
        chunks.push(chunk);
    });

    sres.on('end', function() {
        var titles = []
        var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
        var $ =cheerio.load(html, {decodeEntities: false});
        $('.co_content8 .ulink').each(function(idx, element){
            var $element = $(element);
            titles.push({
                title: $element.text()
            })
        })
        console.log(titles);
    });
})
