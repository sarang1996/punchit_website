angular
  .module('app')
  .controller('createPunchController',createPunchController)

  createPunchController.inject = ['navbar']

  function createPunchController(navbar){
    var vm = this;
      $('ul.tabs').tabs();
    navbar.shouldTabBarShow = false;
    vm.navbar = navbar;
  }
