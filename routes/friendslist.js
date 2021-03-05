var friendslist = require('../friends.json');
exports.view = function(req, res){
  console.log(friendslist)
  	res.render('friendslist', friendslist);
};