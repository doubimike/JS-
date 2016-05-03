'use strict';

// grunt基本框架
module.exports = function (grunt) {
	// 引入下面两个组件，grunt作为形参传入
	 require('load-grunt-tasks')(grunt);
	 require('time-grunt')(grunt);

	  // 配置项目路径
	 var config = {
	 	app:'app',
	 	dist:'dist'	
	 };

	 // task配置
	 grunt.initConfig({
	 	// 引入config配置
	 	config:config,

	 	// 首先安装最基本的task  先安装grunt文件拷贝依赖于官方的 ： 在命令行输入 npm install grunt-contrib-copy --save-dev
	 	// 文件删除依赖于官方的 ： 在命令行输入 npm install grunt-contrib-clean --save-dev
	 	// 接下来进行配置 先在项目目录下生成mkdir app 把js index.html等遗留代码放进去

	 	// 配置下copy命令

	 	// 第一种方法
	 	// copy:{
	 	// 	dist_html: {
	 	// 		// 源文件
	 	// 		src:'<%= config.app %>/index.html',
	 	// 		// 目标文件
	 	// 		dest:'<%= config.dist %>/index.html'
	 	// 	},
	 	// 	dist_js : {
	 	// 		src:'<%= config.app %>/js/index.js',
	 	// 		dest:'<%= config.dist %>/js/index.js'
	 	// 	}
	 	// },

	 	// 第2种写法
	 	// copy: {
	 	// 	dist:{
	 	// 		files:[
	 	// 			{
	 	// 				src:'<%= config.app %>/index.html',
	 	// 				dest:'<%= config.dist %>/index.html'
	 	// 			},
	 	// 			{
	 	// 				src:'<%= config.app %>/js/index.js',
	 	// 				dest:'<%= config.dist %>/js/index.js'	
	 	// 			}
	 	// 		]
	 	// 	}
	 	// },

	 	// 第3种写法
	 	copy:{
	 		dist:{
	 			files:{
	 				// key是目标文件，value是源文件
	 				'<%= config.dist %>/index.html':'<%= config.app %>/index.html',
	 				'<%= config.dist %>/js/index.js':'<%= config.app %>/js/index.js'	
	 			}
	 		}
	 	},

	 	// 配置清除
	 	clean: {
	 		dist:{
	 			// 麻烦
	 			// src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js']

	 			// 直接用通配符 *匹配任意字符但是不匹配反斜杠 **匹配任意数量任意字符，包括反斜杠
	 			src:['<%= config.dist %>/**/*']
	 		}
	 	}
	 });
}