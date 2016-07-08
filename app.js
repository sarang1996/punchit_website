(function(){
	'use strict'
	angular
	.module('app',['ngRoute','ngCookies','app.navbarController','truncate'])
	.config(config);
	//.run(run);

	config.$inject=['$routeProvider','$locationProvider'];

	function config($routeProvider,$locationProvider){
		$routeProvider
		.when('/login',{
			controller: 'homeController',
			templateUrl: 'home/home.html',
			controllerAs: 'vm'
		})

		.when('/suggestions',{
			controller: 'suggestionController',
			templateUrl: 'suggestionPage/community_suggestion_page.html',
			controllerAs: 'vm'
		})

		.when('/my_communities',{
			controller : 'communityHomeController',
			templateUrl : 'communityHome/communityHome.html',
			controllerAs : 'vm'
		})

		.otherwise({
			redirectTo :'/login'
		});
	}


})();
