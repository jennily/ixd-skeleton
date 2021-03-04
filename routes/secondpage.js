

var participants = require('../participants.json');
exports.view = function(req, res){
  console.log(participants)
  	res.render('secondpage', participants);
};