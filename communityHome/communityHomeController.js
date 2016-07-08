(function(){
  angular
    .module('app')
    .controller('communityHomeController',communityHomeController);
    communityHomeController.$inject = ['navbar']
    function communityHomeController(navbar){
      var vm = this;
      vm.navbar = navbar
    }
})();
