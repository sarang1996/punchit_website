angular
  .module('app')
  .controller('friendZoneController',friendZoneController)

  friendZoneController.inject = ['navbar']

  function friendZoneController(navbar){
    var vm = this;
    vm.navbar = navbar;
    vm.post_title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sapien sapien, quis condimentum dui bibendum vitae. Lorem ipsum dolor."
  }
