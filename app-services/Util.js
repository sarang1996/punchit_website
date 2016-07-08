(function(){

	angular
	.module('app')
	.factory('Util',Util);

	function Util(){
		var service={};
		service.host="HOSTNAME";

		return service;
	}

})();
