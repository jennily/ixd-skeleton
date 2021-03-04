'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!")
	$('#loginbutton').click(checkLogin);
	$('#signupbutton').click(checkLogin);
}

function checkLogin(e){
	e.preventDefault();
	var username =  document.getElementById("exampleInputEmail1").value
	var password = document.getElementById("exampleInputPassword1").value
	console.log(username);
	console.log(password);
	if (username === null || username ==="") {
		alert("Must input username!");
		console.log("null username input");
	}
	if (password === null || password ===""){
		alert("Must input password!");
		console.log("null password input");
	}
	else {
	window.open("/homepage", "_self");
	}
}