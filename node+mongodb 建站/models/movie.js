// 模型
var mongoose = require('mongoose');

// 引入模式
var MovieSchema = require('../schemas/movie');

// 编译生成movie的模型，调用mongoose的model方法传入模型名字和模式
var Movie = mongoose.model('Movie',MovieSchema);

module.exports = Movie;
