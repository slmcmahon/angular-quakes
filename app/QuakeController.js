(function(){
	'use strict';

	angular
		.module("Quakes", [])
		.controller('QuakeController', QuakeController);
	
	QuakeController.$inject = ['quakeService'];
	
	function QuakeController(quakeService) {
		var vm = this;
		vm.quakeList = [];
		
		getQuakes();
		
		function getQuakes() {
			return quakeService.loadQuakes().then(function(data){
				vm.quakeList = data;
				return vm.quakeList;
			});
		}
	}
	
})();