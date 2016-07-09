(function(){
  angular
    .module('app')
    .controller('communityHomeController',communityHomeController);
    communityHomeController.$inject = ['navbar']
    function communityHomeController(navbar){
      var vm = this;
      vm.navbar = navbar
      vm.data = []
      for (var i = 0; i <= 10; i++) {
        vm.data.push(i)
      }
    }
})();
