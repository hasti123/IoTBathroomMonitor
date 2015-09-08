/// </// <reference path="/javascripts/jquery.min.js" />
		
// Set initial status
function SetInitialStatus() {
	var deviceID = "";
	var accessToken = "";
	
	$.ajax({
			type: "POST",
			url: "https://api.spark.io/v1/devices/" + deviceID + "/getStatus?access_token=" + accessToken,
	});
}

function start() {
		var deviceID = "";
		var accessToken = "";
		
		// Subscribe to event listener
		var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);
		eventSource.addEventListener("lightStatus", function(e) {
			var parsedData = JSON.parse(e.data);
				if(parsedData.data == "lightOn"){
					$("#IndicatorLight").attr("src", "/images/LightsOn.png");
					$("#IndicatorText").text("ON");
					$("#IndicatorText").attr('style', 'color: green');
				} else {
					$("#IndicatorLight").attr("src", "/images/LightsOff.png");
					$("#IndicatorText").text("OFF");
					$("#IndicatorText").attr('style', 'color: red');
				}
			}, false);
			
		// Looping function call forcing Photon to publish until we have a status
		//do {
			SetInitialStatus();	
		//} while ($("#IndicatorText").text() != "ON" && $("#IndicatorText").text() != "OFF");
		
			
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

