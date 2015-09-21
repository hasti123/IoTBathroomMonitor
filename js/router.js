/**
 * Main AngularJS Web Application
 */
var app = angular.module('BMApp', [
  'ngRoute', 
  'BMApp.HomeCtrl'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {
    	templateUrl: "partials/home.html"
    })
}]);