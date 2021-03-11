'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!")
	$('#submitbutton').click(changeText);
	$('#startbutton').click(checkTime)
}


	
function changeText(e){
	e.preventDefault();
	var newname =  document.getElementById("sessionname").value
	console.log(newname);
	$('#sessiontitle').html(newname);

}

	var timerhour =  document.getElementById("myHour").value
	var timerminute = document.getElementById("myMinute").value
	console.log(timerhour);
	console.log(timerminute);
	sessionStorage.setItem("timerHour", timerhour);
	sessionStorage.setItem("timerMinute", timerminute);

 /*function callBackFn(result) {
 	console.log(result);
 	$('#project' + result.id + ' .details').html('foo');
}*/

function checkTime(e){
	e.preventDefault();
	var timerhour =  document.getElementById("myHour").value
	var timerminute = document.getElementById("myMinute").value
	console.log(timerhour);
	console.log(timerminute);
	sessionStorage.setItem("timerHour", timerhour);
	sessionStorage.setItem("timerMinute", timerminute);
	if (timerhour === null || timerhour ==="" || timerminute === null || timerminute ==="") {
		alert("Must input hours and minutes!");
		console.log("null hour and minute input");
	}

	else {
	window.open("/session", "_self");
	}
}