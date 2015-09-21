var app = angular.module('BMApp.HomeCtrl', []);

/**
 * Controls the Blog
 */
app.controller('HomeCtrl', function ($scope, $location, $http, $timeout) {
  console.log("Home Controller reporting for duty.");
  
  $scope.initializePage = function(){
    $scope.pageTitle = "Welcome to the BM App";
    $scope.bathElevenClass = 'space';
  };
		
	// Set Bathroom Status function
	$scope.SetBathroomStatus = function (status) {
		if(status == "doorOpen"){					
			$timeout( function(){
				$scope.bathElevenClass = 'space';
			}, 0);
		} else if (status == "doorClosed") {					
			$timeout( function(){
				$scope.bathElevenClass = 'space active';
			}, 0);
		}
	}
			
	// Set initial status
	$scope.SetInitialStatus = function () {
		var deviceID = "430036001547343339383037";
		var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
		
		$http.post("https://api.spark.io/v1/devices/" + deviceID + "/getStatus?access_token=" + accessToken);
	}

	$scope.start = function () {

		$scope.initializePage();

		var deviceID = "430036001547343339383037";
		var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
		
		// Subscribe to event listener
		var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);
		eventSource.addEventListener("doorStatus", function(e) {
				// Parses JSON data
				var parsedData = JSON.parse(e.data);
				// Passes status to SetBathroomStatus function
				$scope.SetBathroomStatus(parsedData.data);
			}, false);
		
		$scope.SetInitialStatus();		
				
	}

});