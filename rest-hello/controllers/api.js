const fs = require('fs');
// 存储Product列表，相当于模拟数据库:
// var products = [{
//     name: 'iPhone',
//     price: 6999
// }, {
//     name: 'Kindle',
//     price: 999
// }];
var url = '1.txt'

module.exports = {
    'POST /api/file': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        
        var data = fs.readFileSync(ctx.request.body.url);

        // 设置Response Body:
        ctx.response.body = {
            // products: products,
            file: data.toString(),
            request: ctx.request.body
        };
    },

    /*'POST /api/file': async (ctx, next) => {
    var p = {
        name: ctx.request.body.name,
        price: ctx.request.body.price
    };
    products.push(p);
    ctx.response.type = 'application/json';
    ctx.response.body = p;
}*/
}