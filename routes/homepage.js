var friends = require('../friends.json');
exports.view = function(req, res){
	console.log(friends)
  	res.render('homepage', friends);
};