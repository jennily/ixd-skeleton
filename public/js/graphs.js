'use strict';
$(document).ready(function() {
	initializePage();
})

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Time Spent on Each App"
	},
	axisY: {
		title: "Seconds",
		includeZero: true,
		suffix: " "
	},
	data: [{
		type: "column",	
		yValueFormatString: "#,### ",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "Zoom", y: 0 },
			{ label: "Youtube", y: 0 },
			{ label: "Instagram", y: 0 },
			{ label: "TikTok", y: 0 },
		]
	}]
});

function updateChart() {
	var barColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		deltaY = Math.round(2 + Math.random() *(-2-2));
		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		barColor = yVal ? "#FF2500" : yVal ? "#FF6000" : yVal ? "#6B8E23 " : null;
		dps[i] = {label: " "+(i+1) , y: yVal, color: barColor};
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};
updateChart();

setInterval(function() {updateChart()}, 500);

}
