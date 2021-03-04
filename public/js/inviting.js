'use strict';
$(document).ready(function() {
	initializePage();
})
var friendslist = '{"friends": [{"id": "1","name": "Jake","imageURL":"/images/Jake.png"},{"id": "2" ,"name": "Amy","imageURL":"/images/Amy.png"}]}';

function initializePage() {
	console.log("Javascript connected!");
	console.log(friendslist);
	$('#invitesent').click(inviteMia);

}
function inviteMia(e) {
	console.log("clicked");
	var friendslist = '{"friends": [{"id": "1","name": "Jake","imageURL":"/images/Jake.png"},{"id": "2" ,"name": "Amy","imageURL":"/images/Amy.png"}]}';
	var obj = JSON.parse(friendslist);
	obj['friends'].push({"id": "3", "name": "Mia", "imageURL": "/images/Bob.png"});
	friendslist = JSON.stringify(obj);
	console.log(friendslist);
	$('#invitesent').html('Invited');
	/*var newinvite = {"id": 4, "name": "Mia", "imageURL": "/images/Bob.png"}
	var invitefriends = [];
	invitefriends.push(newinvite);
	console.log(newinvite);*/
}
