





http.createServer(function(req,res){

	var str = '';
	req.on('data',function(err,data){
		str += data
	});
	req.on('end',function(err){
		var json = querystring.parse(str)
	})


})