const http = require('http');
const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

function getData(fn){
    https.get('https://bj.fang.lianjia.com/',(res)=>{
    let html = '';
    res.on('data',chuck=>{
        html+=chuck;
    });
    res.on('end',()=>{
        // console.log(html);
        let $ = cheerio.load(html);
        let itemConLi = $('#itemCon').find('li');
        let dataList = [];
        itemConLi.each((index,item)=>{
            dataList.push({
               imgSrc:$(item).find('img.lj-lazy').attr('data-original'),
               title:$(item).find('.title>a').text(),
               href:$(item).find('.title>a').text().trim(),
               address:$(item).find('.list-name').text().trim(),
               label:$(item).find('.title span').text().trim(),
               section:$(item).find('.list-name+p').text().trim(),
               price:$(item).find('.mt span').text().trim()
            })
        });
        fs.writeFileSync('./data.json',JSON.stringify(dataList));
        fn(dataList)
        
    });
});
}


let server = http.createServer((req,res)=>{
    getData((dataList)=>{
        res.end(JSON.stringify(dataList));
    });
});
server.listen('9000');