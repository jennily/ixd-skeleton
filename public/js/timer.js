'use strict';
$(document).ready(function() {
	initializePage();
})


function initializePage() {
	console.log("Javascript connected!");
	/*var timerhour =  document.getElementById("myHour").value
	var timerminute = document.getElementById("myMinute").value
	console.log(timerhour);
	*/
	var timerhour = sessionStorage.getItem("timerHour");
	var timerminute = sessionStorage.getItem("timerMinute");
	console.log(timerhour);
	console.log(timerminute);
	$('#hourminute').html("0" + timerhour + ":0" + timerminute + ":00");
	countdownTimer();
}



window.onload = function() {


}

/*function countdownTimer() {
	var current = new Date()
	var x = setInterval(function() {
		var hours = parseInt(sessionStorage.getItem("timerHour"));
		var minutes = parseInt(sessionStorage.getItem("timerMinute"));
		var seconds;
		var hDistance = hours - current.getHours();
		console.log(hDistance);
		var mDistance = minutes - current.getMinutes();
		var sDistance = seconds - current.getSeconds();
		Math.floor((hDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		Math.floor((mDistance % (1000 * 60 * 60)) / (1000 * 60));
		Math.floor((sDistance % (1000 * 60)) / 1000);
		document.getElementById("hourminute").innerHTML = hours + " : " +
		minutes + " : " + seconds;
	}, 1000);
}*/

var interval = null;

function countdownTimer() {
	var hours = parseInt(sessionStorage.getItem("timerHour"));
	var minutes = parseInt(sessionStorage.getItem("timerMinute"));
	var seconds = 0;
	var timeinseconds = (hours * 60 * 60) + (minutes * 60) + seconds;
	var displayTime = () => {
		var disHours = Math.floor(timeinseconds / (60 * 60));
        var remainder = timeinseconds - (disHours * 60 * 60);
        var disMinutes = Math.floor(remainder / 60);
        var disSeconds = remainder - (disMinutes * 60);
        document.getElementById("hourminute").innerHTML = disHours + " : " + disMinutes + " : " + disSeconds;
    };
    interval = setInterval(() => {
        displayTime();
        timeinseconds -= 1;
        console.log(timeinseconds);
        if (timeinseconds <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}
