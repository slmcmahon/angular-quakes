(function(){
	'use strict';
	
	angular
		.module("Quakes")
		.component('quakeList', {
	    	templateUrl: 'app/views/quakeListView.html',
	    	controller: QuakeListController,
	    	bindings: {
	    		list: '<'
	    	}
		});
	
	function QuakeListController($scope, $element, $attrs) {
	    var ctrl = this;
	}
})();

