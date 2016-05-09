// var $$ = ajQuery = function(selector) {
//     if(!(this instanceof ajQuery)){
//         return new ajQuery(selector);
//     }
//     this.selector = selector;
//     return this
// }



// var $$ = ajQuery = function(selector) {
//     this.selector = selector;
//     return new ajQuery(selector);
// }
// 
// 
var $$ = ajQuery = function(selector) {
	//把原型上的init作为构造器
	return new ajQuery.fn.init(selector);
}

ajQuery.fn = ajQuery.prototype = {
	name: 'aaron',
	init: function(selector) {
		console.log(typeof this)
		this.selector = selector;
	},
	constructor: ajQuery,
	each: function(callback, args) {
		return ajQuery.each(this, callback, args);
	},
}

ajQuery.each = function() {
	console.log('each');
}



// ajQuery.fn = ajQuery.prototype = {
//     selectorName:function(){
//         return this.selector;
//     },
//     constructor: ajQuery
// }



$('input[type="button"]')
	.eq(0).click(function() {
		alert('点击我!');
	}).end().eq(1)
	.click(function() {
		$('input[type="button"]:eq(0)').trigger('click');
	}).end().eq(2)
	.toggle(function() {
		$('.aa').hide('slow');
	}, function() {
		$('.aa').show('slow');
	});



aAron.extend = aAron.fn.extend = function() {
	var options, src, copy,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length;

	//只有一个参数，就是对jQuery自身的扩展处理
	//extend,fn.extend
	if (i === length) {
		target = this; //调用的上下文对象jQuery/或者实例
		i--;
	}
	for (; i < length; i++) {
		//从i开始取参数,不为空开始遍历
		if ((options = arguments[i]) != null) {
			for (name in options) {
				copy = options[name];
				//覆盖拷贝
				target[name] = copy;
			}
		}
	}
	return target;
}



(function(i) {
	try {
		(function m() {
			++i && m()
		}())
	} catch (e) {
		return i
	}
})(0)



function a(){
	b();
	console.log('a')
}

function b(){
	c();
	console.log('b')
}

function c () {
	console.log('c')
}