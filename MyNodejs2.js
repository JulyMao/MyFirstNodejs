/*var fs = require('fs');

var iconv = require('iconv-lite'); 
fs.readFile('E:/node.js/node/input.txt',function(err,data){
  if(err){
  return console.error(err);
}
console.log('文件内容是：' + iconv.decode(data,'gbk'));
});*/



const fs = require('fs');
const buf = new Buffer(1024);
const iconv = require('iconv-lite');

fs.open('E:/node.js/node/input.txt','r+',function(err,fd){
  if(err)
    return console.error(err);
  console.log("打开文件成功，准备读取文件！")


  fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err)
      return console.error(err);
    console.log(iconv.decode(buf.slice(0,bytes),'gbk'));


    fs.close(fd,function(err){
      if(err)
      return console.error(err);
      });
    });
  });