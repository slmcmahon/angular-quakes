/* global loadQuakeData */

var QUAKES_URL = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

var app = angular.module("Quakes", []);

app.controller("QuakeController", function($scope, $http){
	
	$scope.loadData = function() {
		$scope.quakeItems = [];
		$http({
			method: "GET",
			url:QUAKES_URL	
		}).then(function mySuccess(response) {
			$scope.quakeItems = loadQuakeData(response.data["features"]);
		}, 
		function myError(response){
			console.log(response.data.statusText);
		});
	};
});

function loadQuakeData(features) {
	var quakeData = [];
	
	features.forEach(function (feature) {
		var props = feature.properties;
		var coords = feature.geometry.coordinates;
		var tsunami = props["tsunami"];
		
		var d = new Date(0);
		d.setUTCSeconds(props["time"] / 1000);
		var m = moment(d);
		
		quakeData.push({
			"place":props["place"],
			"title":props["title"],
			"magnitude":props["mag"],
			"url":props["url"],
			"latitude":coords[1],
			"longitude":coords[0],
			"tsunami": (tsunami && tsunami == 1) ? "yes" : "no",
			"date":m.format('DD-MMM-YYYY [at] HH:mm')
		});
	});
	
	return quakeData;
}