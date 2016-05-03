module.exports = function (grunt) {

	grunt.initConfig


	 
	 // 文件添加修改或者删除，重新执行任务
	 grunt.loadNpmTasks('grunt-contrib-watch') ;

	 // 实时监听app.js入口文件，如果改动，就自动重启
	 grunt.loadNpmTasks('grunt-nodemon') ;

	 // 针对慢任务开发的插件，诸如sass编译等，优化其构建事件
	 grunt.loadNpmTasks('grunt-concurrent') ;

// 配置参数
	 grunt.option('force',true)

	 grunt.registerTask('default',['concurrent'])

}