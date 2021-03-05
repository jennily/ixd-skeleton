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