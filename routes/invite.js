var invitefriends = require('../invitefriends.json');
exports.view = function(req, res){
  console.log(invitefriends)
  	res.render('invite', invitefriends);
};