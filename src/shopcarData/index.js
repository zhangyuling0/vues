// const http = require('http');
// const https = require('https');
// const fs = require('fs');
// const cheerio = require('cheerio');
// function getData(fn){
//     let shopCarData = fs.readFileSync('../../../shopcar/index.html');
//     https.get(shopCarData,(res)=>{
//         let html = '';
//         res.on('data',chunk=>{
//             html+=chunk;
//         });
//         res.on('end',()=>{
//             let $ = cheerio.load(html);
//             let itemConLi = $('.order_lists').find('li');
//             let shopCarData = [];
//             itemConLi.each((ind,item)=>{
//                 shopCarData.push({
//                     img:$(item).find('.list_img').text().trim(),
//                     text:$(item).find('.list_text').text().trim(),
//                     info:$(item).find('.list_info').text().trim(),
//                     money:$(item).find('.price').text().trim(),
//                     sum:$(item).find('./sum_price').text().trim(),
//                     op:$(item).find('./list_op').text().trim()
//                 });
//             });
//             fs.writeFileSync('./shopCarData.json',JSON.stringify(shopCarData));
//             fn(shopCarData);
//         })
//     })
// }
// let server = http.createServer((req,res)=>{
//     getData((shopCarData)=>{
//         res.end(JSON.stringify(shopCarData));
//     });
// });
// server.listen('9090');
const http=require("http");
const cheerio=require("cheerio");
const fs=require("fs");
const html=fs.readFileSync('./data.txt').toString();
let $=cheerio.load(html);
let dataList=[];
$(".cartMain .cartBox .shop_name").find("a").each((index,item)=>{
        dataList.push({
            title:$(item).text().trim(),
            list:[]
        })
})
$(".order_content").each((index,item)=>{
    $(item).find(".order_lists").each((key,val)=>{
        dataList[index].list.push({
            title:$(val).find(".list_text>a").text().trim(),
            src:$(val).find(".list_img>a>img").attr("src").trim(),
            rule:$(val).find(".list_info>p").eq(0).text().trim(),
            size:$(val).find(".list_info>p").eq(1).text().trim(),
            price:$(val).find(".list_price>p").text().trim()
        })
    })
     
       
})
fs.writeFileSync("./data.json",JSON.stringify(dataList))
let server=http.createServer((req,res)=>{
       if(req.url==="list"){
        res.end(JSON.stringify(dataList))
       }
      
});
server.listen("9090")
