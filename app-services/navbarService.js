(function(){

	angular
	.module('app')
	.factory('navbar', navbar);

	function navbar(){
		var service={};
		service.shouldNavBarShow = true;
		service.shouldTabBarShow = true;
		service.shouldShowNextButton = false;
		return service;
	}
})();
