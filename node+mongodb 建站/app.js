var express = require('express');
// 引入 mongoose工具模块连接本地数据库
var mongoose = require('mongoose');
// process.env.PORT 是一个命令行设置的环境变量
var port = process.env.PORT || 3300;
var app = express();
var routers = require('./routers');

// express如何处理静态文件
var path = require('path'); 

// 连接数据库 imooc是数据库的名字
mongoose.connect('mongodb://localhost/imooc');
var Movie = require('./models/movie');

app.set('views','./views/pages/'); // 设置视图根目录
app.set('view engine','ejs'); // 默认的模板引擎
app.use(express.static(path.join(__dirname,'public')));
app.listen(port)

console.log('imooc started on port'+port);

// 编写路由
// index page
app.get('/',routers.index);
app.get('/movie/:id',routers.detail);
app.get('/admin/list',routers.list);
app.get('/admin/movie',routers.admin);


