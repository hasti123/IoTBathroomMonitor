/// </// <reference path="/javascripts/home.js" />

function start() {
		$("#uptime").text("Waiting for data...");
		var deviceID = "430036001547343339383037";
		var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
		var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);
		eventSource.addEventListener("lightStatus", function(e) {
			var parsedData = JSON.parse(e.data);
				$("#uptime").text(parsedData.data);
				//document.getElementById("uptime").innerHTML = parsedData.data
				if(parsedData.data == "lightOn"){
					document.body.style.backgroundColor = "green";
				} else {
					document.body.style.backgroundColor = "red";
				}
			}, false);
}

$(document).ready(function() {
	start();
});

