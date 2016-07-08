var app = angular.module('app.navbarController',[]);

app.controller('navbarController',['$scope','$location','AuthenticationService','navbar',function($scope,$location,AuthenticationService,navbar){
  $scope.navbar = navbar
  $scope.value = "dfsfs"
//   if(!AuthenticationService.checkLogin){
//   	$location.path('/home');
//   }

}]);
