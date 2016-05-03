// 数据库模式

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	title:String,
	year:Number,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
});

module.exports = MovieSchema;

// models是模型
