(function(){
	'use strict';
	
	var QUAKES_URL = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

	angular
		.module('Quakes')
		.service('quakeService', quakeService);
	
	quakeService.$inject = ['$http'];

	function quakeService($http) {
		return {
			loadQuakes: loadQuakes
		};
		
		function loadQuakes() {
			return $http.get(QUAKES_URL)
				.then(getQuakesComplete)
				.catch(getQuakesFailed);
				
			function getQuakesComplete(response) {
				return loadQuakeData(response.data['features']);
			}
		
			function getQuakesFailed(error) {
				console.log(error.data);
			}
		
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
		}
	}
})();