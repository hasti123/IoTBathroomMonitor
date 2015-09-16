/// </// <reference path="/javascripts/jquery.min.js" />
		
		
// Set Bathroom Status function
function SetBathroomStatus(status) {
	if(status == "doorOpen"){					
		$('#bathEleven').attr('class', "space");
	} else if (status == "doorClosed") {					
		$('#bathEleven').attr('class', "space active");
	}
}
		
// Set initial status
function SetInitialStatus() {
	var deviceID = "";
	var accessToken = "";
	
	$.ajax({
			type: "POST",
			url: "https://api.spark.io/v1/devices/" + deviceID + "/getStatus?access_token=" + accessToken
	});
}

function start() {
		var deviceID = "";
		var accessToken = "";
		
		// Subscribe to event listener
		var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);
		eventSource.addEventListener("doorStatus", function(e) {
			// Parses JSON data
			var parsedData = JSON.parse(e.data);
			// Passes status to SetBathroomStatus function
			SetBathroomStatus(parsedData.data);
			}, false);
		
		SetInitialStatus();		
			
}

$(document).ready(function() {
	start();
});


