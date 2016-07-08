(function(){
	'use strict';
	angular
	.module('app')
	.controller('homeController',homeController);

	homeController.$inject=['AuthenticationService','UserService','$location','navbar'];
	function homeController(AuthenticationService,UserService,$location,navbar){
		var vm=this;
		vm.login=login;
		// vm.register=register;
		navbar.shouldNavBarShow = false;
		navbar.shouldTabBarShow = false;
		function postLogin(response){
			AuthenticationService.setCredentials(response);
			$location.path('/community_master_page');
		}
		function login(){
			AuthenticationService.Login(vm.username,vm.password,postLogin);
		}
	}
})();
