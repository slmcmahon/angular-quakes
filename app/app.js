var app = angular.module("Quakes", []);

app.controller("QuakeController", function($scope, $http){
	console.log("in controller");
	$scope.loadData = function() {
		console.log("got here");
		$http({
			method: "GET",
			url:"http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"	
		}).then(function mySuccess(response) {
			var features = response.data["features"];
			$scope.quakeCount = features.length;
			features.forEach(function (feature){
				var properties = feature.properties;
				console.log(properties["place"]);
			});
		}, 
		function myError(response){
			console.log(response.data.statusText);
		});
	};
});