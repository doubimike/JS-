var student = require('./moduleTest')
var teacher = require('./teacher')

function add (teacherName,students) {
	 teacher.add(teacherName) ;
	 students.forEach( function(element, index) {
	 	student.add(element);
	 });
}

// 和exports.add = add 是一样的，推荐这种
exports.add = add


