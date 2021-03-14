'use strict';


var zoom = "Zoom";
var youtube = "Youtube";
var discord = "Discord";
var instagram = "Instagram";
var gmail = "Gmail";

let applications = ["Zoom", "Youtube", "Discord", "Instagram", "Gmail"];

var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Time Spent on Apps"
	},
	axisY: {
		title: "Seconds"
	},
	data: [{        
		type: "column",  
		indexLabel: "{y}",
		dataPoints: [      
			{ y: 0, label: zoom },
			{ y: 0,  label: youtube },
			{ y: 0,  label: discord },
			{ y: 0,  label: instagram },
			{ y: 0,  label: gmail },
		]
	}]
});

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function updateChart() {
	var deltaY, yVal;
	var i = randomInt(5);
		var dps = chart.options.data[0].dataPoints;
		deltaY = 1;
		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		dps[i] = {label: (applications[i]) , y: yVal};
	
	chart.options.data[0].dataPoints = dps; 
	chart.render();
	console.log("graph3", deltaY);
};
updateChart();

setInterval(function() {updateChart()}, 1000);




// function randomInt(max) {
// 	return Math.floor(Math.random() * Math.floor(max));
// };

// function updateChart() {
// 	yVal = chart.options.data[0].dataPoints;
// 	chart.options.data[0].dataPoints = yVal + 1;
// 	chart.render()
// };

// setInterval(function() {updateChart()}, 500);

}