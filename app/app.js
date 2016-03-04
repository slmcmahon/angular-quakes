// uses ../assets/js/utilities.js

var app = angular.module("Quakes", []);

app.controller("QuakeController", function($scope, $http){
	
	$scope.loadData = function() {
		$scope.quakeItems = [];
		$http({
			method: "GET",
			url:"http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"	
		}).then(function mySuccess(response) {
			$scope.quakeItems = loadQuakeData(response.data["features"]);
		}, 
		function myError(response){
			console.log(response.data.statusText);
		});
	};
});

