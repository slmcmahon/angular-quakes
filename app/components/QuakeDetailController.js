(function(){
	'use strict';
	
	angular
		.module("Quakes")
		.component('quakeDetail', {
	    	templateUrl: 'app/views/quakeDetailView.html',
	    	controller: QuakeDetailController,
	    	bindings: {
	    		quake: '<'
	    	}
		});

	function QuakeDetailController($scope, $element, $attrs) {
		var ctrl = this;
	}
})();

