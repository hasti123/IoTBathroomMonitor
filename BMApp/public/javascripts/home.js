/// </// <reference path="/javascripts/jquery.min.js" />
		
// Set initial status
function SetInitialStatus() {
	var deviceID = "430036001547343339383037";
	var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
	
	$.ajax({
			type: "POST",
			url: "https://api.spark.io/v1/devices/" + deviceID + "/getStatus?access_token=" + accessToken,
	});
}

function start() {
		$("#uptime").text("Waiting for data...");
		
		var deviceID = "430036001547343339383037";
		var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
		
		// Subscribe to event listener
		var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);
		eventSource.addEventListener("lightStatus", function(e) {
			var parsedData = JSON.parse(e.data);
				$("#uptime").text(parsedData.data);
				//document.getElementById("uptime").innerHTML = parsedData.data
				if(parsedData.data == "lightOn"){
					$("#IndicatorBulb").attr("src", "/images/BulbOn.png");
					$("#IndicatorLight").attr("src", "/images/LightsOn.png");
				} else {
					$("#IndicatorBulb").attr("src", "/images/BulbOff.png");
					$("#IndicatorLight").attr("src", "/images/LightsOff.png");
				}
			}, false);
			
			// Calls function forcing Photon to publish
			SetInitialStatus();
			
}

$(document).ready(function() {
	start();
});


/*
var insertUserIntoDB = function(db, callback) {
   db.collection('user').insertUser( {
      "NAME" : {
         "FIRST" : "Michael",
         "LAST" : "Schlecht"
      },
      "POSITION" : "Software Developer",
      "employee_id" : "0"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback(result);
  });
};
*/

