'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!")
	$('#submitbutton').click(changeText)
}


	
function changeText(e){
	e.preventDefault();
	var newname =  document.getElementById("sessionname").value
	console.log(newname);
	$('#sessiontitle').html(newname);
}

 /*function callBackFn(result) {
 	console.log(result);
 	$('#project' + result.id + ' .details').html('foo');
}*/


