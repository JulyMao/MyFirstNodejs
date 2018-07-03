const fs = require('fs');
let math = Math.random();
console.log(math);
fs.writeFile('E:/node.js/node/input2.txt','h嘿嘿嘿',function(err){
  if(err)
  return console.error(err);
  console.log("写入成功！");
});