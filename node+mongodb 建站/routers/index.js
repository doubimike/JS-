var movies = [{title:'movie1'},{title:'movie2'}]
exports.index = function (req,res) {
	 // res.render('index',{message:'hello',movies:movies,title:'首页'}); 
	 Movie.fetch(function(err,movies){
	 	if(err){
	 		console.log(err);
	 	}

	 	res.render('index',{message:'hello',movies:movies,title:'首页'});
	 });
}

exports.detail = function (req,res) {
	 res.render('detail',{message:'hello',items:items,title:'详情页'}); 
}

exports.admin = function (req,res) {
	 res.render('admin',{message:'hello',items:items,title:'后台录入页'}); 
}

exports.list = function (req,res) {
	 res.render('list',{message:'hello',items:items,title:'列表页'}); 
}
