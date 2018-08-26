var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');

var index = 1;
var url = 'http://www.ygdy8.net/html/gndy/dyzz/list_23_';
var titles = [];

function getTitle(url, i){
    console.log("It is getting" + i + "content");
    http.get(url + i + '.html', function(sres) {
        var chunks = [];
        sres.on('data', function(chunk){
            chunks.push(chunk);
        });
        sres.on('end', function(){
            var html = iconv.decode(Buffer.concat(chunks),'gb2312');
            var $ = cheerio.load(html, {decodeEntities: false});
            $('.co_content8 .ulink').each(function(idx, element){
                var $element = $(element);
                titles.push({
                    title: $element.text()
                })
            })
            if(i < 2){
                getTitle(url, ++index)
            }else{
                console.log(titles);
                console.log("Title get finish");
            }
        });
    });
}

function main() {
    console.log("begin");
    getTitle(url, index);
}

main();
